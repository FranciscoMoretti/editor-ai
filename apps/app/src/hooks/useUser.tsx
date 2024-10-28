import type { User } from "@supabase/supabase-js";
import { createClient } from "@v1/supabase/client";
import { useState } from "react";

export function useUser() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  async function getUser() {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user || undefined);
    setLoading(false);
  }

  return {
    getUser,
    user,
    loading,
  };
}
