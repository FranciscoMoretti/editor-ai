"use client";

import { api } from "@/trpc/react";

export function PostsServer() {
  const { data } = api.posts.findMany.useQuery();
  const { data: data2 } = api.posts.findMany.useQuery();
  const { data: data3 } = api.posts.findUnique.useQuery({
    where: {
      id: "4787f383-9928-4954-8d9c-ec80ec8b005f",
    },
  });
  const { mutate: createPost } = api.posts.create.useMutation();
  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      {data2?.map((post) => (
        <div key={`${post.id}-${2}`}>{post.title}</div>
      ))}
      <button
        type="button"
        onClick={() =>
          createPost({
            data: {
              content: "New Post 2",
              title: "New Content 2",
            },
          })
        }
      >
        Create Post
      </button>
    </div>
  );
}
