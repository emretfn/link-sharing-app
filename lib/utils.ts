import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const supabase = createClientComponentClient();

export const uploadImage = async (file: File, userId: string) => {
  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(`${userId}/avatar.png`, file, {
      upsert: true,
    });
  if (error) throw error;
  return `${process.env.NEXT_PUBLIC_SUPABASE_CDN_URL}${data.path}`;
};

export const getServerSideUser = async ({
  cookies,
}: {
  cookies: () => ReadonlyRequestCookies;
}) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return {
    user: user.user,
  };
};
