import { notFound } from "next/navigation";
import { Profile, SocialLink } from "@/lib/types";
//Components
import PreviewLink from "@/components/preview-link";
import PreviewHeader from "@/components/preview/preview-header";
import Image from "next/image";
import { createServerSupabaseClient } from "@/lib/serverUtils";

interface LinksPageProps {
  params: {
    userId: string;
  };
}

const LinksPage = async ({ params }: LinksPageProps) => {
  const supabase = createServerSupabaseClient();
  const { data: user } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.userId)
    .single<Profile>();

  if (!user) {
    notFound();
  }

  const { data } = await supabase.auth.getSession();
  const isOwner = data.session?.user.id === params.userId;

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white tablet:bg-transparent">
      {/* Background */}
      <div className="hidden tablet:block absolute top-0 left-0 w-full bg-primary h-[357px] -z-10 rounded-b-[32px]"></div>
      {/* Header */}
      {isOwner && <PreviewHeader />}
      {/* Links */}
      <div className="w-60 flex flex-col gap-y-14 tablet:w-[350px] tablet:bg-white tablet:px-14 tablet:py-12 tablet:rounded-3xl tablet:shadow-box">
        {/* Profile */}
        <div className="flex flex-col items-center gap-y-[25px]">
          {/* Image */}
          {user.avatar_url ? (
            <Image
              alt="emre tufan"
              src={user.avatar_url}
              width={100}
              height={100}
              className="border-4 border-primary rounded-full object-cover aspect-square"
            ></Image>
          ) : (
            <div className="h-[6.25rem] w-[6.25rem] bg-gray-200 rounded-full border-4 border-primary"></div>
          )}
          {/* Caption */}
          <div className=" w-full text-center flex flex-col gap-y-2">
            {user.first_name && user.last_name && (
              <p className="heading-m">{`${user.first_name} ${user.last_name}`}</p>
            )}
            <p className="body-m text-grey">{user.email}</p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-y-5">
          {user.links?.map((link: SocialLink) => (
            <PreviewLink key={link.id} link={link} href={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
