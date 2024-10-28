"use client";
import { SignOut } from "@/components/sign-out";
import { getUser } from "@v1/supabase/queries";

import { Canvas } from "@/components/Canvas";
import { CanvasLoading } from "@/components/CanvasLoading";
import { useUser } from "@/hooks/useUser";
import { addAssistantIdToUser } from "@/lib/add_assistant_id_to_user";
import { useEffect } from "react";

export default function Home() {
  const { user, getUser } = useUser();

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !user) return;
    addAssistantIdToUser();
  }, [user]);

  if (!user) {
    return <CanvasLoading />;
  }

  return <Canvas user={user} />;
}
