import {
  getStoreCustomActionsNamespace,
  getStoreMemoriesNamespace,
} from "@/agent/getStoreNamespace";
import { getArtifactContent } from "@/contexts/utils";
import {
  storeGetQuickActions,
  storeGetReflection,
} from "@/server/api/routers/store.router";
import { getEnhancedPrismaWithUser } from "@/server/db/enhanced";
import type { BaseMessage } from "@langchain/core/messages";
import type { LangGraphRunnableConfig } from "@langchain/langgraph";
import { isArtifactMarkdownContent } from "../../../lib/artifact_content_types";
import {
  type ArtifactCodeV3,
  type ArtifactMarkdownV3,
  type ArtifactV3,
  CustomQuickAction,
  Reflections,
} from "../../../types";
import { getModelFromConfig } from "../../utils";
import { formatReflections } from "../../utils";
import {
  CUSTOM_QUICK_ACTION_ARTIFACT_CONTENT_PROMPT,
  CUSTOM_QUICK_ACTION_ARTIFACT_PROMPT_PREFIX,
  CUSTOM_QUICK_ACTION_CONVERSATION_CONTEXT,
  REFLECTIONS_QUICK_ACTION_PROMPT,
} from "../prompts";
import type { OpenCanvasGraphAnnotation, OpenCanvasGraphReturnType } from "../state";

const formatMessages = (messages: BaseMessage[]): string =>
  messages
    .map(
      (msg) =>
        `<${msg.getType()}>\n${msg.content as string}\n</${msg.getType()}>`,
    )
    .join("\n");

export const customAction = async (
  state: typeof OpenCanvasGraphAnnotation.State,
  config: LangGraphRunnableConfig,
): Promise<OpenCanvasGraphReturnType> => {
  if (!state.customQuickActionId) {
    throw new Error("No custom quick action ID found.");
  }

  const smallModel = await getModelFromConfig(config, {
    temperature: 0.5,
  });

  const assistantId = config.configurable?.assistant_id;
  const userId = config.configurable?.supabase_user_id;
  if (!assistantId) {
    throw new Error("`assistant_id` not found in configurable");
  }
  if (!userId) {
    throw new Error("`supabase_user_id` not found in configurable");
  }
  const customActionsNamespace = getStoreCustomActionsNamespace(userId);
  const memoryNamespace = getStoreMemoriesNamespace(assistantId);

  const prisma = await getEnhancedPrismaWithUser();

  const [customActions, memories] = await Promise.all([
    storeGetQuickActions(prisma, customActionsNamespace),
    storeGetReflection(prisma, memoryNamespace),
  ]);

  const customQuickAction = customActions?.[state.customQuickActionId];
  if (!customQuickAction) {
    throw new Error(
      `No custom quick action found from ID ${state.customQuickActionId}`,
    );
  }

  const currentArtifactContent = state.artifact
    ? getArtifactContent(state.artifact)
    : undefined;

  let formattedPrompt = `<custom-instructions>\n${customQuickAction.prompt}\n</custom-instructions>`;
  if (customQuickAction.includeReflections && memories) {
    const memoriesAsString = formatReflections(memories);
    const reflectionsPrompt = REFLECTIONS_QUICK_ACTION_PROMPT.replace(
      "{reflections}",
      memoriesAsString,
    );
    formattedPrompt += `\n\n${reflectionsPrompt}`;
  }

  if (customQuickAction.includePrefix) {
    formattedPrompt = `${CUSTOM_QUICK_ACTION_ARTIFACT_PROMPT_PREFIX}\n\n${formattedPrompt}`;
  }

  if (customQuickAction.includeRecentHistory) {
    const formattedConversationHistory =
      CUSTOM_QUICK_ACTION_CONVERSATION_CONTEXT.replace(
        "{conversation}",
        formatMessages(state.messages.slice(-5)),
      );
    formattedPrompt += `\n\n${formattedConversationHistory}`;
  }

  const artifactContent = isArtifactMarkdownContent(currentArtifactContent)
    ? currentArtifactContent.fullMarkdown
    : currentArtifactContent?.code;
  formattedPrompt += `\n\n${CUSTOM_QUICK_ACTION_ARTIFACT_CONTENT_PROMPT.replace("{artifactContent}", artifactContent || "No artifacts generated yet.")}`;

  const newArtifactValues = await smallModel.invoke([
    { role: "user", content: formattedPrompt },
  ]);

  if (!currentArtifactContent) {
    console.error("No current artifact content found.");
    return {};
  }

  const newArtifactContent: ArtifactCodeV3 | ArtifactMarkdownV3 = {
    ...currentArtifactContent,
    index: state.artifact.contents.length + 1,
    ...(isArtifactMarkdownContent(currentArtifactContent)
      ? { fullMarkdown: newArtifactValues.content as string }
      : { code: newArtifactValues.content as string }),
  };

  const newArtifact: ArtifactV3 = {
    ...state.artifact,
    currentIndex: state.artifact.contents.length + 1,
    contents: [...state.artifact.contents, newArtifactContent],
  };

  return {
    artifact: newArtifact,
  };
};
