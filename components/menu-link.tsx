"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MenuLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const MenuLink = ({
  href,
  className,
  children,
  icon,
  ...props
}: MenuLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-x-2 px-7 py-3 rounded-lg heading-s hover:text-primary transition-colors text-grey hover-fill-primary",
        {
          "text-primary bg-primary-light": isActive,
        },
        className
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      <span className="hidden tablet:block">{children}</span>
    </Link>
  );
};

export default MenuLink;
