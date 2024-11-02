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

  if (user) {
    // This is to mirror the user data to the database in the public_users table
    const { data, error } = await supabase
      .from("public_users")
      .upsert({
        id: user.id,
        email: user.email || "",
        full_name: user.user_metadata?.full_name,
        avatar_url: user.user_metadata?.avatar_url,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();
    if (error?.message) {
      console.log(error.message);
    }
  }
  // if (user) {
  //   await syncUserProfile(supabase, user.id, {
  //     email: user.email,
  //     user_metadata: user.user_metadata,
  //   });
  // }

  return { response, user };
};
