import { cn } from "@/lib/utils";
import React from "react";

interface CaptionProps {
  title: string;
  description: string;
  align?: "left" | "center" | "right";
}

const Caption = ({ title, description, align = "left" }: CaptionProps) => {
  return (
    <div
      className={cn("flex flex-col gap-y-2", {
        "text-center": align === "center",
        "text-right": align === "right",
        "text-left": align === "left",
      })}
    >
      <p className="heading-m">{title}</p>
      <p className="text-grey">{description}</p>
    </div>
  );
};

export default Caption;