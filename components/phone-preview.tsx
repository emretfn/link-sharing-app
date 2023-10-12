"use client";

import { useAppSelector } from "@/store";
import Image from "next/image";
import PreviewLink from "./preview-link";

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
