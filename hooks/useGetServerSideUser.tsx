import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const useGetServerSideUser = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data: user, error } = await supabase.auth.getUser();

  if (error) {
    throw error;
  }

  return {
    user: user.user,
  };
};
