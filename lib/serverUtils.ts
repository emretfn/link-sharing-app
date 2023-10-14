"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cache } from "react";
import { cookies } from "next/headers";

export const createServerSupabaseClient = cache(() => {
  const cookieStore = cookies();
  return createServerComponentClient({ cookies: () => cookieStore });
});
