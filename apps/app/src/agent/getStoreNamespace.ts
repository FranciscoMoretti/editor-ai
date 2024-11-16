export function getStoreMemoriesNamespace(assistantId: string) {
  return JSON.stringify(["memories", assistantId]);
}

export function getStoreCustomActionsNamespace(userId: string) {
  return JSON.stringify(["custom_actions", userId]);
}
