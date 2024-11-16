import { graph as openCanvasGraph } from "@/agent/open-canvas/index";
import { graph as reflectionGraph } from "@/agent/reflection/index";
import { graph as threadTitleGraph } from "@/agent/thread-title/index";

export const GRAPHS = {
  agent: openCanvasGraph,
  reflection: reflectionGraph,
  thread_title: threadTitleGraph,
} as const;
