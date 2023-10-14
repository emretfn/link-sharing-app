"use client";
import React, { useEffect, useState } from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import UploadImage from "../upload-image";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileSchema } from "@/lib/schemas";
import { Profile, ProfileForm } from "@/lib/types";
import { supabase, uploadImage } from "@/lib/utils";
import { User } from "@supabase/supabase-js";

interface ProfileFormProps {
  profile: Profile;
}

const ProfileForm = ({ profile }: ProfileFormProps) => {
  const [image, setImage] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { isDirty, errors },
    reset,
  } = useForm<ProfileForm>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      firstName: profile?.first_name,
      lastName: profile?.last_name,
      email: profile?.email,
      avatarUrl: profile?.avatar_url,
    },
  });
  const onSubmit: SubmitHandler<ProfileForm> = async (data) => {
    let imageUrl = null;
    if (image) {
      //upload image
      imageUrl = await uploadImage(image, profile.id);
    }
    const newData = {
      first_name: data.firstName ?? profile.first_name,
      last_name: data.lastName ?? profile.last_name,
      email: data.email ?? profile.email,
      avatar_url: imageUrl ?? profile.avatar_url,
    };
    //update profile
    const { data: updateData, error } = await supabase
      .from("profiles")
      .update({ ...newData })
      .eq("id", profile.id)
      .single<Profile>();
    if (error) {
      throw error;
    }
    reset({ ...newData }, { keepDirty: false });
  };

  return (
    <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Image */}
      <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 p-5 bg-grey-light rounded-xl">
        <span className="body-m text-grey flex-1">Profile picture</span>
        <div className="flex flex-col tablet:flex-row gap-y-6 flex-1 tablet:items-center tablet:gap-x-6">
          <UploadImage
            userImage={
              image
                ? URL.createObjectURL(image)
                : profile.avatar_url
                ? profile.avatar_url
                : null
            }
            onImageSelect={(image) => setImage(image)}
          />
          <span className="body-s text-grey">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </span>
        </div>
      </div>
      {/* Form Inputs */}
      <div className="flex flex-col gap-y-3 p-5 bg-grey-light rounded-lg">
        <Input
          label="First name* "
          placeholder="e.g. John"
          containerClassName="tablet:flex-row tablet:text-grey"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last name* "
          placeholder="e.g. Appleseed"
          containerClassName="tablet:flex-row tablet:text-grey"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
        <Input
          label="Email "
          placeholder="e.g. email@example.com "
          containerClassName="tablet:flex-row tablet:text-grey"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>
      {/* Save Button */}
      <div className="p-4 border-t border-grey-border -mx-6 -mb-6 flex tablet:justify-end tablet:-mx-10 tablet:-mb-10">
        <Button
          disabled={!isDirty}
          type="submit"
          block
          className="tablet:w-auto"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
