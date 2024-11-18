import { GRAPHS } from "@/agent/GRAPHS";
import type { LangGraphRunnableConfig } from "@langchain/langgraph";
import type { OpenCanvasGraphAnnotation } from "../state";

export const reflectNode = async (
  state: typeof OpenCanvasGraphAnnotation.State,
  config: LangGraphRunnableConfig,
) => {
  const reflectionInput = {
    messages: state.messages,
    artifact: state.artifact,
  };
  const reflectionConfig = {
    configurable: {
      // Ensure we pass in the current graph's assistant ID as this is
      // how we fetch & store the memories.
      open_canvas_assistant_id: config.configurable?.assistant_id,
    },
  };

  const graph = GRAPHS.reflection;
  // Create a new reflection run, but do not `wait` for it to finish.
  // Intended to be a background run.
  await graph.invoke(reflectionInput, reflectionConfig);

  return {};
};
