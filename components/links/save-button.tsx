"use client";
//Components
import Button, { ButtonProps } from "@/components/ui/button";

//Redux
import { useAppDispatch, useAppSelector } from "@/store";
import { saveSocialLinks } from "@/store/social-links-store";

type SaveButtonProps = Omit<ButtonProps, "disabled" | "children" | "onClick">;

const SaveButton = (props: SaveButtonProps) => {
  const isUpdated = useAppSelector((state) => state.socialLinks.isUpdated);
  const dispatch = useAppDispatch();
  const socialLinks = useAppSelector((state) => state.socialLinks.socialLinks);

  const handleSave = () => {
    dispatch(saveSocialLinks(socialLinks));
  };
  return (
    <Button disabled={!isUpdated} onClick={handleSave} {...props}>
      Save
    </Button>
  );
};

export default SaveButton;
