import { createServerClient } from "@supabase/ssr";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { NextRequest, NextResponse } from "next/server";

export const updateSession = async (
  request: NextRequest,
  response: NextResponse,
) => {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          for (const { name, value } of cookiesToSet) {
            request.cookies.set(name, value);
          }

          for (const { name, value, options } of cookiesToSet) {
            response.cookies.set(name, value, options);
          }
        },
      },
    },
  );

  // This is to ensure the session is updated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Auto-login for development
  if (
    process.env.NODE_ENV === "development" &&
    process.env.SUPABASE_ACCESS_TOKEN &&
    process.env.SUPABASE_REFRESH_TOKEN &&
    !user
  ) {
    await supabase.auth.setSession({
      access_token: process.env.SUPABASE_ACCESS_TOKEN!,
      refresh_token: process.env.SUPABASE_REFRESH_TOKEN!,
    });
    const {
      data: { user: devUser },
    } = await supabase.auth.getUser();
    return { response, user: devUser };
  } else {
    // Print the session to auto-singin in development mode
    // if (process.env.NODE_ENV === "development") {
    //   const session = await supabase.auth.getSession();
    //   console.log("session", session);
    // }

    // Return the user if they are logged in or not in development
    return { response, user };
  }
};
