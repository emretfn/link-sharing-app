import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/serverUtils";

const HomePage = async () => {
  const supabase = createServerSupabaseClient();
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    redirect("/dashboard/links");
  } else {
    redirect("/login");
  }
};

export default HomePage;
