import React from "react";
import LogoLarge from "@/public/assets/images/logo-devlinks-large.svg";
import LogoSmall from "@/public/assets/images/logo-devlinks-small.svg";
import IconEye from "@/public/assets/images/icon-preview-header.svg";
import IconLink from "@/public/assets/images/icon-links-header.svg";
import IconProfile from "@/public/assets/images/icon-profile-details-header.svg";
import Button from "@/components/ui/button";
import MenuLink from "@/components/menu-link";
import Link from "next/link";

const Header = () => {
  return (
    <header className="h-20 bg-white rounded-xl px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div>
        <LogoSmall className="block tablet:hidden" />
        <LogoLarge className="hidden tablet:block" />
      </div>

      {/* Links */}
      <div className="flex items-center desktop :gap-x-4">
        <MenuLink icon={<IconLink />} href="/dashboard/links">
          Links
        </MenuLink>
        <MenuLink icon={<IconProfile />} href="/dashboard/profile">
          Profile Details
        </MenuLink>
      </div>

      {/* Preview Button */}
      <div>
        <Button asChild variant="secondary" className="py-3 px-4 tablet:px-7">
          {/* TODO: Change username to dynamic */}
          <Link href="/preview/username">
            <span className="tablet:hidden">
              <IconEye />
            </span>
            <span className="hidden tablet:flex">Preview</span>
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
