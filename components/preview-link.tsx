import { SocialLinks } from "@/lib/constants";
import { SocialLink } from "@/lib/types";
import { createElement, ReactHTMLElement } from "react";
import IconArrowRight from "@/public/assets/images/icon-arrow-right.svg";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const containerClass = cva(
  "flex text-white items-center w-full rounded-lg gap-x-2",
  {
    variants: {
      variant: {
        small: "h-11 px-4 py-[11px]",
        medium: "h-14 p-4",
      },
    },
  }
);
const iconClass = cva("", {
  variants: {
    variant: {
      small: "w-4 h-4",
      medium: "w-5 h-5",
    },
  },
});

interface PreviewLinkProps extends VariantProps<typeof containerClass> {
  link: SocialLink;
  href: string;
}

const PreviewLink = ({ link, variant = "medium", href }: PreviewLinkProps) => {
  const socialLink = SocialLinks.find((item) => item.value === link.platform);

  if (socialLink) {
    return (
      <Link
        className={cn(containerClass({ variant }))}
        style={{ backgroundColor: socialLink.backgroundColor }}
        href={href}
        target="_blank"
      >
        {createElement(socialLink.previewIcon, {
          className: iconClass({ variant }),
        })}

        <span className="flex-1 body-s">{socialLink.name}</span>
        <IconArrowRight />
      </Link>
    );
  }
  return null;
};

export default PreviewLink;
