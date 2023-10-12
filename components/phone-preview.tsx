"use client";

import { useAppSelector } from "@/store";
import Image from "next/image";
import IconArrowRight from "@/public/assets/images/icon-arrow-right.svg";
import { SocialLink } from "@/lib/types";
import { SocialLinks } from "@/lib/constants";
import { createElement } from "react";

const PhonePreview = () => {
  const socialLinks = useAppSelector((state) => state.socialLinks.socialLinks);

  return (
    <div className="relative flex justify-center w-[307px] h-[631px] bg-phone-mockup ">
      <div className="flex flex-col gap-y-14 pt-[63.5px] w-[237px] h-full">
        {/* Image and Caption */}
        <div className="flex flex-col items-center gap-y-[25px] h-[158px]">
          {/* Image */}
          <div className="relative flex justify-center items-center w-24 h-24 bg-[#eeeeee] outline outline-4 outline-primary bg rounded-full overflow-hidden shrink-0">
            <Image
              alt="emre tufan"
              src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"
              width={100}
              height={100}
              className="w-auto h-auto"
            ></Image>
          </div>
          {/* Caption */}
          <div className="bg-white w-full text-center flex flex-col gap-y-2">
            <p className="font-semibold text-[18px] leading-[150%]">
              Ben Wright
            </p>
            <p className="text-grey text-[14px] leading-[150%]">
              ben@example.com
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-y-5">
          {socialLinks.map((link) => (
            <PreviewLinks key={link.id} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

function PreviewLinks({ link }: { link: SocialLink }) {
  const socialLink = SocialLinks.find((item) => item.value === link.platform);

  if (socialLink) {
    return (
      <div
        className="h-11 w-full px-4 py-[11px]  rounded-lg flex text-white items-center gap-x-2"
        style={{ backgroundColor: socialLink.backgroundColor }}
      >
        {createElement(socialLink.previewIcon, {
          className: "w-4 h-4",
        })}

        <span className="flex-1 body-s">{socialLink.name}</span>
        <IconArrowRight />
      </div>
    );
  }
  return null;
}

export default PhonePreview;
