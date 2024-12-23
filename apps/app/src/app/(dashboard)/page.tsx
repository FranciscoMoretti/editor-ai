"use client";

import { Canvas } from "@/components/canvas/canvas";
import { GraphProvider } from "@/contexts/GraphContext";

export default function Home() {
  return (
    <GraphProvider>
      <Canvas />
    </GraphProvider>
  );
}
