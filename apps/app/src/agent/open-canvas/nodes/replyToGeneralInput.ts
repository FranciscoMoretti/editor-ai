import { getStoreMemoriesNamespace } from "@/agent/getStoreNamespace";
import { getArtifactContent } from "@/contexts/utils";
import { storeGetReflection } from "@/server/api/routers/store.router";
import { getEnhancedPrismaWithUser } from "@/server/db/enhanced";
import type { LangGraphRunnableConfig } from "@langchain/langgraph";
import { Reflections } from "../../../types";
import { getModelFromConfig } from "../../utils";
import {
  formatArtifactContentWithTemplate,
  formatReflections,
} from "../../utils";
import { CURRENT_ARTIFACT_PROMPT, NO_ARTIFACT_PROMPT } from "../prompts";
import type { OpenCanvasGraphAnnotation, OpenCanvasGraphReturnType } from "../state";

/**
 * Generate responses to questions. Does not generate artifacts.
 */
export const replyToGeneralInput = async (
  state: typeof OpenCanvasGraphAnnotation.State,
  config: LangGraphRunnableConfig,
): Promise<OpenCanvasGraphReturnType> => {
  const smallModel = await getModelFromConfig(config);

  const prompt = `You are an AI assistant tasked with responding to the users question.
  
The user has generated artifacts in the past. Use the following artifacts as context when responding to the users question.

You also have the following reflections on style guidelines and general memories/facts about the user to use when generating your response.
<reflections>
{reflections}
</reflections>

{currentArtifactPrompt}`;

  const currentArtifactContent = state.artifact
    ? getArtifactContent(state.artifact)
    : undefined;

  const assistantId = config.configurable?.assistant_id;
  if (!assistantId) {
    throw new Error("`assistant_id` not found in configurable");
  }
  const memoryNamespace = getStoreMemoriesNamespace(assistantId);
  const prisma = await getEnhancedPrismaWithUser();

  const memories = await storeGetReflection(prisma, memoryNamespace);
  const memoriesAsString = memories
    ? formatReflections(memories)
    : "No reflections found.";

  const formattedPrompt = prompt
    .replace("{reflections}", memoriesAsString)
    .replace(
      "{currentArtifactPrompt}",
      currentArtifactContent
        ? formatArtifactContentWithTemplate(
            CURRENT_ARTIFACT_PROMPT,
            currentArtifactContent,
          )
        : NO_ARTIFACT_PROMPT,
    );

  const response = await smallModel.invoke([
    { role: "system", content: formattedPrompt },
    ...state.messages,
  ]);

  return {
    messages: [response],
  };
};
