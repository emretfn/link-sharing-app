import { cn } from "@/lib/utils";
import React from "react";

interface CaptionProps {
  title: string;
  description: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const Caption = ({
  title,
  description,
  align = "left",
  className,
}: CaptionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-2",
        {
          "text-center": align === "center",
          "text-right": align === "right",
          "text-left": align === "left",
        },
        className
      )}
    >
      <p className="text-2xl leading-[150%] font-bold tablet:heading-m">
        {title}
      </p>
      <p className="text-grey body-m">{description}</p>
    </div>
  );
};

export default Caption;
