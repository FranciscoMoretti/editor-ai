import { GRAPHS } from "@/agent/GRAPHS";
import { LangGraphRunnableConfig } from "@langchain/langgraph";
import { OpenCanvasGraphAnnotation } from "../state";

export const generateTitleNode = async (
  state: typeof OpenCanvasGraphAnnotation.State,
  config: LangGraphRunnableConfig,
) => {
  // return {};

  if (state.messages.length > 2) {
    // Skip if it's not first human ai conversation. Should never occur in practice
    // due to the conditional edge which is called before this node.
    return {};
  }

  const titleInput = {
    messages: state.messages,
    artifact: state.artifact,
  };
  const titleConfig = {
    configurable: {
      open_canvas_thread_id: config.configurable?.thread_id,
    },
  };

  // Create a new title generation run in the background

  const graph = GRAPHS.thread_title;
  // TODO: THis could be added to a queue instead but there is no queueing in the current implementation.
  // Create a new thread for title generation
  // const newThread = await langGraphClient.threads.create();
  await graph.invoke(titleInput, titleConfig);

  return {};
};
