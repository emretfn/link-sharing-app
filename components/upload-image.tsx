"use client";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import IconImage from "@/public/assets/images/icon-upload-image.svg";

interface UploadImageProps {
  userImage?: string | null;
  onImageSelect: (image: File) => void;
}

const UploadImage = ({ userImage, onImageSelect }: UploadImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      onImageSelect(files[0]);
    }
  };
  return (
    <div>
      <button
        type="button"
        className="w-[193px] h-[193px] bg-primary-light rounded-lg flex-shrink-0 overflow-hidden cursor-pointer"
        onClick={() => inputRef.current?.click()}
      >
        {userImage ? (
          <div className="relative w-full h-full">
            <Image
              alt="user image"
              src={userImage}
              width={193}
              height={193}
              className="aspect-square object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-y-2 items-center justify-center bg-black/50">
              <span className="custom-fill-white">
                <IconImage />
              </span>
              <span className="heading-s text-white">Change Image</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full h-full items-center justify-center gap-y-2">
            <IconImage />
            <span className="heading-s text-primary">+ Upload Image</span>
          </div>
        )}
      </button>
      <input
        type="file"
        className="hidden"
        ref={inputRef}
        accept=".png, .jpg, .jpeg"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default UploadImage;
