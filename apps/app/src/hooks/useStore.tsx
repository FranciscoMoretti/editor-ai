import {
  getStoreCustomActionsNamespace,
  getStoreMemoriesNamespace,
} from "@/agent/getStoreNamespace";
import { StoreKey, parseStoreValue } from "@/server/api/routers/storeSchema";
import { api } from "@/trpc/react";
import { CustomQuickAction, Reflections } from "@/types";
import { useToast } from "@v1/ui/use-toast";
import { useState } from "react";

export function useStore() {
  const { toast } = useToast();
  const [isLoadingReflections, setIsLoadingReflections] = useState(false);
  const [isLoadingQuickActions, setIsLoadingQuickActions] = useState(false);
  const { mutateAsync: deleteReflectionAsync } = api.store.delete.useMutation();
  const { mutateAsync: putReflectionAsync } = api.store.put.useMutation();
  const utils = api.useUtils();
  const [reflections, setReflections] = useState<
    Reflections & { assistantId: string; updatedAt: Date }
  >();

  const getReflections = async (assistantId: string): Promise<void> => {
    setIsLoadingReflections(true);
    console.log("getReflections", assistantId);
    const res = await utils.store.get.fetch({
      namespace: getStoreMemoriesNamespace(assistantId),
      key: StoreKey.Values.reflection,
    });

    if (res === "NOT_FOUND") {
      setIsLoadingReflections(false);
      // No reflections found. Return early.
      setReflections(undefined);
      return;
    }
    const value = parseStoreValue(res.value, StoreKey.Values.reflection);
    setIsLoadingReflections(false);
    // No reflections found. Return early.
    setReflections(undefined);

    let styleRules = value.styleRules;
    let content = value.content;
    try {
      styleRules =
        typeof styleRules === "string" ? JSON.parse(styleRules) : styleRules;
      content = typeof content === "string" ? JSON.parse(content) : content;
    } catch (e) {
      console.error("Failed to parse reflections", e);
      styleRules = [];
      content = [];
    }

    setReflections({
      ...value,
      styleRules,
      content,
      updatedAt: new Date(res.updated_at ?? new Date()),
      assistantId,
    });
    setIsLoadingReflections(false);
  };

  const deleteReflections = async (assistantId: string): Promise<boolean> => {
    await deleteReflectionAsync({
      namespace: getStoreMemoriesNamespace(assistantId),
      key: StoreKey.Values.reflection,
    });

    setReflections(undefined);
    toast({
      title: "Failed to delete reflections",
      description: "Please try again later.",
    });
    return true;
  };

  const getCustomQuickActions = async (
    userId: string,
  ): Promise<CustomQuickAction[] | undefined> => {
    setIsLoadingQuickActions(true);
    try {
      const res = await utils.store.get.fetch({
        namespace: getStoreCustomActionsNamespace(userId),
        key: StoreKey.Values.actions,
      });

      if (res === "NOT_FOUND") {
        return undefined;
      }

      const value = parseStoreValue(res.value, StoreKey.Values.actions);

      return Object.values(value);
    } finally {
      setIsLoadingQuickActions(false);
    }
  };

  const deleteCustomQuickAction = async (
    id: string,
    rest: CustomQuickAction[],
    userId: string,
  ): Promise<boolean> => {
    const valuesWithoutDeleted = rest.reduce<Record<string, CustomQuickAction>>(
      (acc, action) => {
        if (action.id !== id) {
          acc[action.id] = action;
        }
        return acc;
      },
      {},
    );

    await putReflectionAsync({
      namespace: getStoreCustomActionsNamespace(userId),
      key: StoreKey.Values.actions,
      value: valuesWithoutDeleted,
    });

    return true;
  };

  const createCustomQuickAction = async (
    newAction: CustomQuickAction,
    rest: CustomQuickAction[],
    userId: string,
  ): Promise<boolean> => {
    const newValue = rest.reduce<Record<string, CustomQuickAction>>(
      (acc, action) => {
        acc[action.id] = action;
        return acc;
      },
      {},
    );

    newValue[newAction.id] = newAction;
    await putReflectionAsync({
      namespace: getStoreCustomActionsNamespace(userId),
      key: StoreKey.Values.actions,
      value: newValue,
    });

    return true;
  };

  const editCustomQuickAction = async (
    editedAction: CustomQuickAction,
    rest: CustomQuickAction[],
    userId: string,
  ): Promise<boolean> => {
    const newValue = rest.reduce<Record<string, CustomQuickAction>>(
      (acc, action) => {
        acc[action.id] = action;
        return acc;
      },
      {},
    );

    newValue[editedAction.id] = editedAction;
    await putReflectionAsync({
      namespace: getStoreCustomActionsNamespace(userId),
      key: StoreKey.Values.actions,
      value: newValue,
    });

    return true;
  };

  return {
    isLoadingReflections,
    reflections,
    isLoadingQuickActions,
    deleteReflections,
    getReflections,
    deleteCustomQuickAction,
    getCustomQuickActions,
    editCustomQuickAction,
    createCustomQuickAction,
  };
}
