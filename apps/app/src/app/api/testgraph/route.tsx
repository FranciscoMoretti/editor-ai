import { builder, graph } from "@/agent/open-canvas/graph";
import { ROUTE_QUERY_PROMPT } from "@/agent/open-canvas/prompts";
import { DEFAULT_INPUTS } from "@/constants";
import { InMemoryStore } from "@langchain/langgraph";
import { ChatOpenAI } from "@langchain/openai";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

export const GET = async (req: NextRequest) => {
  // const model = new ChatOpenAI({
  //   model: "gpt-4o-mini",

  //   temperature: 0,
  // });
  // const response = await model.invoke([
  //   {
  //     role: "user",
  //     content: "say hello",
  //   },
  // ]);

  const inMemoryStore = new InMemoryStore();

  const graph = builder
    .compile({
      store: inMemoryStore,
    })
    .withConfig({
      runName: "open_canvas",
    });

  const result = await graph.invoke(
    {
      // TODO: FIx these inputs
      // thread_id: "123",
      // assistant_id: "123",
      ...DEFAULT_INPUTS,
      artifact: "",
      messages: [
        {
          role: "user",
          content: "Write a short story about a cat.",
        },
      ],
    },
    {
      configurable: {
        assistant_id: "123",
      },
    },
  );

  console.log(result);
  return NextResponse.json(result);
};
