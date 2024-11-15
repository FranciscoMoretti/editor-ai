import { graph as openCanvasGraph } from "@/agent/open-canvas/graph";
import { RunsInputSchema } from "@/server/api/routers/generated_zod/input/RunsInput.schema";
import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";

import { EventEmitter, on } from "node:stream";
import { DEFAULT_INPUTS } from "@/constants";
import { z } from "zod";
import { checkMutate, checkRead } from "./generated/helper";
/* eslint-disable */
import { db } from "./generated/routers";

export const GraphInputSchema = z.union([
  z.array(z.record(z.any())),
  z.record(z.any()),
  z.null(),
]);

export const StreamMode = z
  .enum(["values", "debug", "updates", "events"])
  .default("values");

export type WhoIsTyping = Record<string, { lastTyped: Date }>;

export interface MyEvents {
  add: (channelId: string, data: any) => void;
  isTypingUpdate: (channelId: string, who: WhoIsTyping) => void;
}
declare interface MyEventEmitter {
  on<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this;
  off<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this;
  once<TEv extends keyof MyEvents>(event: TEv, listener: MyEvents[TEv]): this;
  emit<TEv extends keyof MyEvents>(
    event: TEv,
    ...args: Parameters<MyEvents[TEv]>
  ): boolean;
}

class MyEventEmitter extends EventEmitter {
  public toIterable<TEv extends keyof MyEvents>(
    event: TEv,
    opts: NonNullable<Parameters<typeof on>[2]>,
  ): AsyncIterable<Parameters<MyEvents[TEv]>> {
    return on(this, event, opts) as any;
  }
}

// In a real app, you'd probably use Redis or something
export const ee = new MyEventEmitter();

// who is currently typing for each channel, key is `name`
export const currentlyTyping: Record<string, WhoIsTyping> = Object.create(null);

// Add some fake users who are "typing"
const demoUsers = ["Alice", "Bob", "Charlie"];
setInterval(() => {
  const now = Date.now();
  const channelId = "1";

  // Randomly add a new typer
  if (Math.random() < 0.3) {
    const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)]!;
    currentlyTyping[channelId] = {
      ...currentlyTyping[channelId],
      [randomUser]: { lastTyped: new Date() },
    };
  }

  // Clean up old typers
  const typers = currentlyTyping[channelId] ?? {};
  for (const [key, value] of Object.entries(typers)) {
    if (now - value.lastTyped.getTime() > 3e3) {
      delete typers[key];
    }
  }

  ee.emit("isTypingUpdate", channelId, currentlyTyping[channelId] ?? {});
}, 1000).unref();

export default function createRouter() {
  return createTRPCRouter({
    whoIsTyping: procedure
      .input(z.object({ channelId: z.string() }))
      .subscription(async function* (opts) {
        const input = opts.input;
        const channelId = input.channelId;

        let lastIsTyping = "";

        /**
         * yield who is typing if it has changed
         * won't yield if it's the same as last time
         */
        function* maybeYield(who: WhoIsTyping) {
          const idx = Object.keys(who).toSorted().toString();
          if (idx === lastIsTyping) {
            return;
          }
          yield Object.keys(who);

          lastIsTyping = idx;
        }

        // emit who is currently typing
        yield* maybeYield(currentlyTyping[channelId] ?? {});

        for await (const [channelId, who] of ee.toIterable("isTypingUpdate", {
          signal: opts.signal,
        })) {
          yield* maybeYield(who);
        }
      }),
    stream: procedure
      .input(
        z.object({
          thread_id: z.string().uuid(),
          assistant_id: z.string().uuid(),
          input: GraphInputSchema,
          stream_mode: StreamMode,
          config: z
            .object({
              configurable: z.object({
                customModelName: z.string().optional(),
              }),
            })
            .default({ configurable: {} }),
        }),
      )
      .query(async function* ({ ctx, input }) {
        // const thread = await checkRead(
        //   db(ctx).threads.findUnique({
        //     where: {
        //       thread_id: input.thread_id,
        //     },
        //   }),
        // );

        // const assistant = await checkRead(
        //   db(ctx).asssitants.findUnique({
        //     where: {
        //       assistant_id: input.assistant_id,
        //     },
        //   }),
        // );

        // if (!thread || !assistant) {
        //   throw new Error("Thread or assistant not found");
        // }

        // Create a run_id for the thread
        const run = await checkMutate(
          db(ctx).runs.create({
            data: {
              thread_id: input.thread_id,
              assistant_id: input.assistant_id,
              status: "running",
              metadata: {
                assistant_id: input.assistant_id,
              },
              kwargs: {},
              multitask_strategy: "enqueue",
            },
          }),
        );
        if (!run) {
          throw new Error("Failed to create run");
        }

        // TODO here switch by graph_id
        if (true) {
          const graph = openCanvasGraph;
          try {
            // TODO: FIX graph inputs

            const stream = await graph.streamEvents(
              {
                ...DEFAULT_INPUTS,
                artifact: undefined,
                ...input.input,
              },
              {
                configurable: {
                  assistant_id: input.assistant_id,
                  run_id: run.run_id,
                  ...input.config.configurable,
                },
                version: "v1",
              },
            );
            let count = 0;
            const dataArray: any[] = [];
            for await (const data of stream) {
              console.log("data", count++, data);
              dataArray.push(data);
              yield { data };
            }
            console.log(dataArray);

            console.log("Stream complete");
          } catch (error) {
            console.error("Stream error:", error);
            throw error;
          }
        } else {
          throw new Error("Graph not found");
        }
        await checkMutate(
          db(ctx).runs.update({
            where: {
              run_id: run.run_id,
            },
            data: {
              status: "success",
            },
          }),
        );
      }),
    aggregate: procedure
      .input(RunsInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.aggregate(input as any)),
      ),

    createMany: procedure
      .input(RunsInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.createMany(input as any)),
      ),

    create: procedure
      .input(RunsInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.create(input as any)),
      ),

    deleteMany: procedure
      .input(RunsInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.deleteMany(input as any)),
      ),

    delete: procedure
      .input(RunsInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.delete(input as any)),
      ),

    findFirst: procedure
      .input(RunsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input(RunsInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input(RunsInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findMany(input as any)),
      ),

    findUnique: procedure
      .input(RunsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input(RunsInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).runs.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input(RunsInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).runs.groupBy(input as any))),

    updateMany: procedure
      .input(RunsInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.updateMany(input as any)),
      ),

    update: procedure
      .input(RunsInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.update(input as any)),
      ),

    upsert: procedure
      .input(RunsInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).runs.upsert(input as any)),
      ),

    count: procedure
      .input(RunsInputSchema.count.optional())
      .query(({ ctx, input }) => checkRead(db(ctx).runs.count(input as any))),
  });
}
