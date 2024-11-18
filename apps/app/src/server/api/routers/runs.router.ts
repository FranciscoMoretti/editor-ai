import * as _Schema from "@zenstackhq/runtime/zod/input";

import { createTRPCRouter } from "@/server/api/trpc";
import { procedure } from "@/server/api/trpc";

import { DEFAULT_INPUTS } from "@/constants";
import { z } from "zod";
import { GRAPHS } from "../../../agent/GRAPHS";
/* eslint-disable */
import { db } from "../db";
import { checkMutate, checkRead } from "./generated/helper";

export const GraphInputSchema = z.union([
  z.array(z.record(z.any())),
  z.record(z.any()),
  z.null(),
]);

export const StreamMode = z
  .enum(["values", "debug", "updates", "events"])
  .default("values");

const RunsInputSchema = _Schema.RunsInputSchema;

export default function createRouter() {
  return createTRPCRouter({
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

        const assistant = await checkRead(
          db(ctx).asssitants.findUnique({
            where: {
              assistant_id: input.assistant_id,
            },
          }),
        );

        if (!assistant) {
          throw new Error("Assistant not found");
        }

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
        if (assistant.graph_id === "agent") {
          const graph = GRAPHS[assistant.graph_id];
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
                  thread_id: input.thread_id,
                },
                runId: run.run_id,
                version: "v1",
              },
            );
            // const count = 0;
            const dataArray: any[] = [];
            for await (const data of stream) {
              // console.log("data", count++, data);
              dataArray.push(data);
              yield { data };
            }
            // console.log(dataArray);

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
