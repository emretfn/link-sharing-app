import Caption from "@/components/caption";
import ProfileForm from "@/components/forms/profile-form";
import { createServerSupabaseClient } from "@/lib/serverUtils";
import { Profile } from "@/lib/types";
import { redirect } from "next/navigation";

const Page = async () => {
  const supabase = createServerSupabaseClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (error || !session?.user) {
    redirect("/login");
  }

  const { data: profile, error: errorProfile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session?.user.id || "")
    .single<Profile>();

  if (errorProfile) {
    throw error;
  }

  return (
    <div className="flex flex-col p-6 gap-y-10 tablet:p-10 h-full">
      <Caption
        title="Profile Details"
        description="Add your details to create a personal touch to your profile."
      />
      {/* Form */}
      <ProfileForm profile={profile} />
    </div>
  );
};
export default Page;
