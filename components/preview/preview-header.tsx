"use client";

import Link from "next/link";
import Button from "@/components/ui/button";
import toast from "react-hot-toast";
import LinkIcon from "@/public/assets/images/icon-link.svg";

const PreviewHeader = () => {
  const handleClipboard = () => {
    navigator.clipboard.writeText(window.location.toString());
    toast.success("The link has been copied to your clipboard!", {
      icon: <LinkIcon />,
    });
  };

  return (
    <div className="absolute top-0 left-0 w-full p-4 tablet:p-6">
      <div className="flex gap-x-4 justify-between tablet:py-4 tablet:px-6 tablet:bg-white tablet:rounded-xl ">
        <Button asChild variant="secondary">
          <Link href="/dashboard/links">Back to Editor</Link>
        </Button>
        <Button onClick={handleClipboard}>Share Link</Button>
      </div>
    </div>
  );
};

export default PreviewHeader;
