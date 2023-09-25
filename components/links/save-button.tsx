"use client";
//Components
import Button, { ButtonProps } from "@/components/ui/button";

//Redux
import { useAppSelector } from "@/store";

type SaveButtonProps = Omit<ButtonProps, "disabled" | "children" | "onClick">;

const SaveButton = (props: SaveButtonProps) => {
  const isUpdated = useAppSelector((state) => state.socialLinks.isUpdated);
  return (
    <Button disabled={!isUpdated} {...props}>
      Save
    </Button>
  );
};

export default SaveButton;
