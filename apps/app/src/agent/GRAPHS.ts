import { graph as openCanvasGraph } from "@/agent/open-canvas/graph";
import { graph as reflectionGraph } from "@/agent/reflection/graph";
import { graph as threadTitleGraph } from "@/agent/thread-title/graph";

export const GRAPHS = {
  agent: openCanvasGraph,
  reflection: reflectionGraph,
  thread_title: threadTitleGraph,
} as const;
