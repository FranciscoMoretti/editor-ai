import {
  ALL_MODEL_NAMES,
  DEFAULT_MODEL_NAME,
  HAS_EMPTY_THREADS_CLEARED_COOKIE,
  THREAD_ID_COOKIE_NAME,
} from "@/constants";
import { getCookie, setCookie } from "@/lib/cookies";
import { api } from "@/trpc/react";
import { Metadata, Thread } from "@langchain/langgraph-sdk";
import { useState } from "react";

function threadResponseToThread(
  thread: Awaited<
    ReturnType<ReturnType<typeof api.threads.create.useMutation>["mutateAsync"]>
  > | null,
): Thread | undefined {
  if (!thread) {
    return undefined;
  }

  return {
    ...thread,
    created_at: thread.created_at.toISOString(),
    updated_at: thread.updated_at.toISOString(),
    metadata: thread.metadata as Metadata,
  };
}

// TODO: Update api usages in threads!
export function useThread() {
  const [threadId, setThreadId] = useState<string>();
  const [userThreads, setUserThreads] = useState<Thread[]>([]);
  const [isUserThreadsLoading, setIsUserThreadsLoading] = useState(false);
  const [modelName, setModelName] =
    useState<ALL_MODEL_NAMES>(DEFAULT_MODEL_NAME);
  const { mutateAsync: createThreadMutation } =
    api.threads.create.useMutation();
  const { mutateAsync: deleteThreadMutation } =
    api.threads.delete.useMutation();
  const utils = api.useUtils();

  const createThread = async (
    customModelName: ALL_MODEL_NAMES,
    userId: string,
  ): Promise<Thread | undefined> => {
    console.log("creating thread!", customModelName);
    try {
      const thread = await createThreadMutation({
        metadata: {
          supabase_user_id: userId,
          customModelName,
        },
      }).then(threadResponseToThread);
      if (!thread) {
        console.error("Failed to create thread");
        return;
      }
      setThreadId(thread.thread_id);
      setCookie(THREAD_ID_COOKIE_NAME, thread.thread_id);
      setModelName(customModelName);
      await getUserThreads(userId);
      return thread;
    } catch (e) {
      console.error("Failed to create thread", e);
    }
  };

  const getUserThreads = async (userId: string) => {
    setIsUserThreadsLoading(true);
    try {
      const userThreads = await utils.threads.findMany
        .fetch({
          // metadata: {
          //   supabase_user_id: userId,
          // },
          take: 100,
        })
        .then((threads) => threads.map(threadResponseToThread))
        .then((threads) =>
          threads.filter<Thread>((thread) => thread !== undefined),
        );

      if (userThreads.length > 0) {
        const lastInArray = userThreads[0];
        const allButLast = userThreads.slice(1, userThreads.length);
        const filteredThreads = allButLast.filter(
          (thread) => thread.values && Object.keys(thread.values).length > 0,
        );
        setUserThreads([...filteredThreads, lastInArray]);
      }
    } finally {
      setIsUserThreadsLoading(false);
    }
  };

  const searchOrCreateThread = async (userId: string) => {
    const threadIdCookie = getCookie(THREAD_ID_COOKIE_NAME);
    if (!threadIdCookie) {
      await createThread(modelName, userId);
      return;
    }

    // Thread ID is in cookies.
    const thread = await getThreadById(threadIdCookie);
    if (
      thread &&
      (!thread?.values || Object.keys(thread.values).length === 0)
    ) {
      // No values = no activity. Can keep.
      setThreadId(threadIdCookie);
      return threadIdCookie;
    } else {
      // Current thread has activity. Create a new thread.
      await createThread(modelName, userId);
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
      const userThreads = await utils.threads.findMany
        .fetch({
          // metadata: {
          //   supabase_user_id: userId,
          // },
          take: 100,
          skip: offset,
        })
        .then((threads) => threads.map(threadResponseToThread))
        .then((threads) =>
          threads.filter<Thread>((thread) => thread !== undefined),
        );

      const threadsToDelete = userThreads.filter(
        (thread) =>
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
          new Set(threadsToDelete.map((thread) => thread.thread_id)),
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
      const thread = await utils.threads.findUnique
        .fetch({
          where: {
            thread_id: id,
          },
        })
        .then(threadResponseToThread);
      if (thread?.metadata?.customModelName) {
        setModelName(thread.metadata.customModelName as ALL_MODEL_NAMES);
      }
      return thread;
    } catch (e) {
      console.error(`Failed to get thread with ID ${id}`, e);
    }
  };

  const deleteThread = async (
    id: string,
    userId: string,
    clearMessages: () => void,
  ) => {
    setUserThreads((prevThreads) => {
      const newThreads = prevThreads.filter(
        (thread) => thread.thread_id !== id,
      );
      return newThreads;
    });
    if (id === threadId) {
      clearMessages();
      // Create a new thread. Use .then to avoid blocking the UI.
      // Once completed, `createThread` will re-fetch all user
      // threads to update UI.
      void createThread(modelName, userId);
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
    threadId,
    userThreads,
    isUserThreadsLoading,
    modelName,
    createThread,
    clearThreadsWithNoValues,
    searchOrCreateThread,
    getUserThreads,
    deleteThread,
    getThreadById,
    setThreadId,
    setModelName,
  };
}
