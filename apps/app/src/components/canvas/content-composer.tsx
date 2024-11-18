"use client";

import { useGraphContext } from "@/contexts/GraphContext";
import {
  convertLangchainMessages,
  convertToOpenAIFormat,
} from "@/lib/convert_messages";
import type { ProgrammingLanguageOptions } from "@/types";
import {
  type AppendMessage,
  AssistantRuntimeProvider,
  useExternalMessageConverter,
  useExternalStoreRuntime,
} from "@assistant-ui/react";
import { type BaseMessage, HumanMessage } from "@langchain/core/messages";
import type { Thread as ThreadType } from "@langchain/langgraph-sdk";
import { Toaster } from "@v1/ui/toaster";
import { useToast } from "@v1/ui/use-toast";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Thread } from "../chat-interface/thread";

export interface ContentComposerChatInterfaceProps {
  switchSelectedThreadCallback: (thread: ThreadType) => void;
  setChatStarted: React.Dispatch<React.SetStateAction<boolean>>;
  hasChatStarted: boolean;
  handleQuickStart: (
    type: "text" | "code",
    language?: ProgrammingLanguageOptions,
  ) => void;
}

export function ContentComposerChatInterfaceComponent(
  props: ContentComposerChatInterfaceProps,
): React.ReactElement {
  const { toast } = useToast();
  const { userData, graphData, threadData } = useGraphContext();
  const { messages, setMessages, streamMessage } = graphData;
  const { getUserThreads } = threadData;
  const [isRunning, setIsRunning] = useState(false);

  async function onNew(message: AppendMessage): Promise<void> {
    if (!userData.user) {
      toast({
        title: "User not found",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    if (message.content?.[0]?.type !== "text") {
      toast({
        title: "Only text messages are supported",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }
    props.setChatStarted(true);
    setIsRunning(true);

    try {
      const humanMessage = new HumanMessage({
        content: message.content[0].text,
        id: uuidv4(),
      });

      setMessages((prevMessages) => [...prevMessages, humanMessage]);

      await streamMessage({
        messages: [convertToOpenAIFormat(humanMessage)],
      });
    } finally {
      setIsRunning(false);
      // Re-fetch threads so that the current thread's title is updated.
      await getUserThreads(userData.user.id);
    }
  }

  const threadMessages = useExternalMessageConverter<BaseMessage>({
    callback: convertLangchainMessages,
    messages: messages,
    isRunning,
  });

  const runtime = useExternalStoreRuntime({
    messages: threadMessages,
    isRunning,
    onNew,
  });

  return (
    <div className="h-full">
      <AssistantRuntimeProvider runtime={runtime}>
        <Thread
          userId={userData?.user?.id}
          setChatStarted={props.setChatStarted}
          handleQuickStart={props.handleQuickStart}
          hasChatStarted={props.hasChatStarted}
          switchSelectedThreadCallback={props.switchSelectedThreadCallback}
        />
      </AssistantRuntimeProvider>
      <Toaster />
    </div>
  );
}

export const ContentComposerChatInterface = React.memo(
  ContentComposerChatInterfaceComponent,
);
