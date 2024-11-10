import {
  ASSISTANT_ID_COOKIE,
  HAS_EMPTY_THREADS_CLEARED_COOKIE,
  THREAD_ID_COOKIE_NAME,
} from "@/constants";
import { getCookie, setCookie } from "@/lib/cookies";
import { api } from "@/trpc/react";
import { useState } from "react";

import { ThreadsSchema } from "@/server/api/routers/generated_zod/models/Threads.schema";
import { z } from "zod";
type Thread = z.infer<typeof ThreadsSchema>;

export function useThread(userId: string) {
  const [assistantId, setAssistantId] = useState<string>();
  const [threadId, setThreadId] = useState<string>();

  const { data: userThreads = [], isLoading: isUserThreadsLoading } =
    api.threads.findMany.useQuery(
      {
        take: 100,
      },
      {
        enabled: !!userId,
        select: (threads) => {
          if (threads.length === 0) return [];

          // TODO: Re enable filter
          return threads;

          const lastInArray = threads[0];
          const allButLast = threads.slice(1);
          const filteredThreads = allButLast.filter(
            (thread) => thread.values && Object.keys(thread.values).length > 0,
          );

          return [...filteredThreads, lastInArray];
        },
      },
    );

  const { mutateAsync: createThreadMutation } =
    api.threads.create.useMutation();
  const { mutateAsync: createAssistantMutation } =
    api.assitants.create.useMutation();
  const { mutateAsync: deleteThreadMutation } =
    api.threads.delete.useMutation();

  const createThread = async (
    supabaseUserId: string,
  ): Promise<Thread | undefined> => {
    try {
      const thread = await createThreadMutation({
        metadata: {
          supabase_user_id: supabaseUserId,
        },
      });
      if (!thread) {
        return;
      }
      setThreadId(thread.thread_id);
      setCookie(THREAD_ID_COOKIE_NAME, thread.thread_id);
      return thread;
    } catch (e) {
      console.error("Failed to create thread", e);
    }
  };

  const getOrCreateAssistant = async () => {
    console.log("getOrCreateAssistant");
    const assistantIdCookie = getCookie(ASSISTANT_ID_COOKIE);
    // TODO: This fails if assistant was deleted (should query as well)
    if (assistantIdCookie) {
      setAssistantId(assistantIdCookie);
      return;
    }
    try {
      const assistant = await createAssistantMutation({
        graph_id: "open_canvas",
      });
      if (!assistant) {
        return;
      }
      setAssistantId(assistant.assistant_id);
      setCookie(ASSISTANT_ID_COOKIE, assistant.assistant_id);
    } catch (e) {
      console.error("Failed to create assistant", e);
    }
  };

  const searchOrCreateThread = async (id: string) => {
    const threadIdCookie = getCookie(THREAD_ID_COOKIE_NAME);
    if (!threadIdCookie) {
      console.log("creating thread 1");
      await createThread(id);
      return;
    }

    // Thread ID is in cookies.
    const thread = await getThreadById(threadIdCookie);
    console.log("thread", thread);
    if (
      thread &&
      (!thread?.values || Object.keys(thread.values).length === 0)
    ) {
      // No values = no activity. Can keep.
      setThreadId(threadIdCookie);
      return threadIdCookie;
    } else {
      // Current thread has activity. Create a new thread.
      console.log("creating thread 2");
      await createThread(id);
      return;
    }
  };

  const clearThreadsWithNoValues = async (userId: string) => {
    const hasBeenClearedCookie = getCookie(HAS_EMPTY_THREADS_CLEARED_COOKIE);
    if (hasBeenClearedCookie === "true") {
      return;
    }

    const processedThreadIds = new Set<string>();

    const fetchAndDeleteThreads = async (offset = 0) => {
      // TODO: Figure out how to delete with pagination
      // const { data: userThreads } = await api.threads.findMany.useQuery({
      //   take: 100,
      //   skip: offset,
      // });
      if (!userThreads) {
        return;
      }

      // TOOD: Fix model typing errors
      const threadsToDelete = userThreads.filter<Thread>(
        (thread) =>
          thread &&
          !thread.values &&
          thread.thread_id !== threadId &&
          !processedThreadIds.has(thread.thread_id),
      );

      if (threadsToDelete.length > 0) {
        const deleteBatch = async (threadIds: string[]) => {
          await Promise.all(
            threadIds.map(async (threadId) => {
              await deleteThreadMutation({
                where: {
                  thread_id: threadId,
                },
              });
              processedThreadIds.add(threadId);
            }),
          );
        };

        // Create an array of unique thread IDs
        const uniqueThreadIds = Array.from(
          new Set(threadsToDelete.map((thread) => thread?.thread_id)),
        );

        // Process unique thread IDs in batches of 10
        for (let i = 0; i < uniqueThreadIds.length; i += 10) {
          try {
            await deleteBatch(uniqueThreadIds.slice(i, i + 10));
          } catch (e) {
            console.error("Error deleting threads", e);
          }
        }
      }

      if (userThreads.length === 100) {
        // If we got 100 threads, there might be more, so continue fetching
        await fetchAndDeleteThreads(offset + 100);
      }
    };

    try {
      await fetchAndDeleteThreads();
      setCookie(HAS_EMPTY_THREADS_CLEARED_COOKIE, "true");
    } catch (e) {
      console.error("Error fetching & deleting threads", e);
    }
  };

  const getThreadById = async (id: string): Promise<Thread | undefined> => {
    try {
      console.log("userThreads", userThreads);
      console.log("id", id);
      return userThreads.find((thread) => thread?.thread_id === id);
    } catch (e) {
      console.error(`Failed to get thread with ID ${id}`, e);
    }
  };

  const deleteThread = async (id: string, clearMessages: () => void) => {
    if (!userId) {
      throw new Error("User ID not found");
    }
    if (id === threadId) {
      clearMessages();
      // Create a new thread. Use .then to avoid blocking the UI.
      // Once completed, `createThread` will re-fetch all user
      // threads to update UI.
      console.log("deleting thread 1");
      void createThread(userId);
    }
    try {
      await deleteThreadMutation({
        where: {
          thread_id: id,
        },
      });
    } catch (e) {
      console.error(`Failed to delete thread with ID ${id}`, e);
    }
  };

  return {
    clearThreadsWithNoValues,
    threadId,
    assistantId,
    createThread,
    searchOrCreateThread,
    userThreads,
    isUserThreadsLoading,
    deleteThread,
    getThreadById,
    setThreadId,
    getOrCreateAssistant,
  };
}
