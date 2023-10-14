"use client";

import { useAppSelector } from "@/store";
import Image from "next/image";
import PreviewLink from "./preview-link";
import { supabase } from "@/lib/utils";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { Profile } from "@/lib/types";

interface PhonePreviewProps {
  user: User;
}

const PhonePreview = ({ user }: PhonePreviewProps) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const socialLinks = useAppSelector((state) => state.socialLinks.socialLinks);

  useEffect(() => {
    (async () => {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single<Profile>();
      if (error) throw error;
      setProfile(profile);
    })();
  }, []);

  return (
    <div className="relative flex justify-center w-[307px] h-[631px] bg-phone-mockup ">
      <div className="flex flex-col gap-y-14 pt-[63.5px] w-[237px] h-full">
        {/* Image and Caption */}
        <div className="flex flex-col items-center gap-y-[25px] h-[158px]">
          {/* Image */}
          <div className="relative flex justify-center items-center w-24 h-24 bg-[#eeeeee] outline outline-4 outline-primary bg rounded-full overflow-hidden shrink-0">
            {profile && (
              <Image
                alt="emre tufan"
                src={profile.avatar_url}
                width={100}
                height={100}
                className="aspect-square object-cover"
              ></Image>
            )}
          </div>
          {/* Caption */}
          <div className="bg-white w-full text-center flex flex-col gap-y-2">
            <p className="font-semibold text-[18px] leading-[150%]">
              {profile ? `${profile.first_name} ${profile.last_name}` : " "}
            </p>
            <p className="text-grey text-[14px] leading-[150%]">
              {profile ? profile.email : " "}
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-y-5">
          {profile?.links.map((link) => (
            <PreviewLink
              key={link.id}
              link={link}
              href={link.url}
              variant="small"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhonePreview;
