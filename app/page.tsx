import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const HomePage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    redirect("/dashboard/links");
  } else {
    redirect("/login");
  }
};

export default HomePage;
