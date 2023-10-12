import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { SocialLink } from "@/lib/types";
//Components
import PreviewLink from "@/components/preview-link";
import PreviewHeader from "@/components/preview/preview-header";
import Image from "next/image";

interface LinksPageProps {
  params: {
    userId: string;
  };
}

const LinksPage = async ({ params }: LinksPageProps) => {
  const supabase = createServerComponentClient({ cookies });
  const { data: user } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", params.userId)
    .single();

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
          <Image
            alt="emre tufan"
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"
            width={100}
            height={100}
            className="border-4 border-primary rounded-full object-cover aspect-square"
          ></Image>
          {/* Caption */}
          <div className=" w-full text-center flex flex-col gap-y-2">
            <p className="heading-m">Ben Wright</p>
            <p className="body-m text-grey">ben@example.com</p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-y-5">
          {user.links.map((link: SocialLink) => (
            <PreviewLink link={link} href={link.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
