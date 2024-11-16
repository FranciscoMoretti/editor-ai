import { getArtifactContent } from "@/contexts/utils";
import {
  storeGetReflection,
  storePut,
} from "@/server/api/routers/store.router";
import { StoreKey } from "@/server/api/routers/storeSchema";
import { getEnhancedPrismaWithUser } from "@/server/db/enhanced";
import { ChatAnthropic } from "@langchain/anthropic";
import {
  type LangGraphRunnableConfig,
  START,
  StateGraph,
} from "@langchain/langgraph";
import { z } from "zod";
import { isArtifactMarkdownContent } from "../../lib/artifact_content_types";
import { getStoreMemoriesNamespace } from "../getStoreNamespace";
import { formatReflections } from "../utils";
import { REFLECT_SYSTEM_PROMPT, REFLECT_USER_PROMPT } from "./prompts";
import { ReflectionGraphAnnotation, ReflectionGraphReturnType } from "./state";

export const reflect = async (
  state: typeof ReflectionGraphAnnotation.State,
  config: LangGraphRunnableConfig,
): Promise<ReflectionGraphReturnType> => {
  const assistantId = config.configurable?.open_canvas_assistant_id;
  if (!assistantId) {
    throw new Error("`open_canvas_assistant_id` not found in configurable");
  }
  const memoryNamespace = getStoreMemoriesNamespace(assistantId);
  const prisma = await getEnhancedPrismaWithUser();
  const memories = await storeGetReflection(prisma, memoryNamespace);

  const memoriesAsString = memories
    ? formatReflections(memories)
    : "No reflections found.";

  const generateReflectionTool = {
    name: "generate_reflections",
    description: "Generate reflections based on the context provided.",
    schema: z.object({
      styleRules: z
        .array(z.string())
        .describe("The complete new list of style rules and guidelines."),
      content: z
        .array(z.string())
        .describe("The complete new list of memories/facts about the user."),
    }),
  };

  const model = new ChatAnthropic({
    model: "claude-3-5-sonnet-20240620",
    temperature: 0,
  }).bindTools([generateReflectionTool], {
    tool_choice: "generate_reflections",
  });

  const currentArtifactContent = state.artifact
    ? getArtifactContent(state.artifact)
    : undefined;

  const artifactContent = currentArtifactContent
    ? isArtifactMarkdownContent(currentArtifactContent)
      ? currentArtifactContent.fullMarkdown
      : currentArtifactContent.code
    : undefined;

  const formattedSystemPrompt = REFLECT_SYSTEM_PROMPT.replace(
    "{artifact}",
    artifactContent ?? "No artifact found.",
  ).replace("{reflections}", memoriesAsString);

  const formattedUserPrompt = REFLECT_USER_PROMPT.replace(
    "{conversation}",
    state.messages
      .map((msg) => `<${msg.getType()}>\n${msg.content}\n</${msg.getType()}>`)
      .join("\n\n"),
  );

  const result = await model.invoke([
    {
      role: "system",
      content: formattedSystemPrompt,
    },
    {
      role: "user",
      content: formattedUserPrompt,
    },
  ]);
  const reflectionToolCall = result.tool_calls?.[0];
  if (!reflectionToolCall) {
    console.error("FAILED TO GENERATE TOOL CALL", result);
    throw new Error("Reflection tool call failed.");
  }

  const newMemories = {
    styleRules: reflectionToolCall.args.styleRules,
    content: reflectionToolCall.args.content,
  };

  await storePut(
    prisma,
    memoryNamespace,
    StoreKey.Values.reflection,
    newMemories,
  );

  return {};
};

const builder = new StateGraph(ReflectionGraphAnnotation)
  .addNode("reflect", reflect)
  .addEdge(START, "reflect");

export const graph = builder.compile().withConfig({ runName: "reflection" });
