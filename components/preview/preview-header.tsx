"use client";

import Link from "next/link";
import Button from "@/components/ui/button";

const PreviewHeader = () => {
  return (
    <div className="absolute top-0 left-0 w-full p-4 tablet:p-6">
      <div className="flex gap-x-4 justify-between tablet:py-4 tablet:px-6 tablet:bg-white tablet:rounded-xl ">
        <Button asChild variant="secondary">
          <Link href="/dashboard/links">Back to Editor</Link>
        </Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(window.location.toString());
          }}
        >
          Share Link
        </Button>
      </div>
    </div>
  );
};

export default PreviewHeader;
