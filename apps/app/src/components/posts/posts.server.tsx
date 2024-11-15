"use client";

import { api } from "@/trpc/react";
import React from "react";

export const pluralize = (count: number, singular: string, plural: string) =>
  count === 1 ? singular : plural;

export const listWithAnd = (list: string[]) => {
  if (list.length === 0) {
    return "";
  }
  if (list.length === 1) {
    return list[0];
  }
  if (list.length === 2) {
    return `${list[0]} and ${list[1]}`;
  }
  return `${list.slice(0, -1).join(", ")}, and ${list.at(-1)}`;
};

export function PostsServer() {
  const { data } = api.posts.findMany.useQuery();
  const { data: count } = api.posts.count.useQuery();
  const { data: user } = api.users.findFirst.useQuery({
    select: {
      id: true,
      created_at: false,
    },
  });
  const { mutate: createPost } = api.posts.create.useMutation();

  const { data: openCanvasResponse } = api.runs.stream.useQuery(
    {
      thread_id: "65c9e502-0259-4936-b1b2-2e7921497dae",
      assistant_id: "5d24250f-e5cc-4b6f-aab4-72968db3a553",
      input: {
        messages: [{ role: "user", content: "Write a story about a cat" }],
      },
    },
    {
      staleTime: Number.POSITIVE_INFINITY,
      gcTime: Number.POSITIVE_INFINITY,
    },
  );

  console.log(openCanvasResponse);

  // Cleanup on unmount
  React.useEffect(() => {
    if (openCanvasResponse) {
      for (const chunk of openCanvasResponse) {
        console.log(chunk);
      }
    } else {
      console.log("No open canvas response");
    }
  }, [openCanvasResponse]);

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}

      <button
        type="button"
        onClick={() =>
          createPost({
            data: {
              content: `New Post ${count}`,
              title: `New Content ${count}`,
            },
          })
        }
      >
        Create Post
      </button>
    </div>
  );
}
