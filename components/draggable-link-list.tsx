import React from "react";
import Button from "@/components/ui/button";
import DraggableLinkItem from "./draggable-link-item";
import EmptyIllustration from "@/public/assets/images/illustration-empty.svg";
import Caption from "@/components/caption";

const DraggableLinkList = () => {
  const links = [
    {
      platform: "github",
      url: "github.com/emretfn",
      order: 1,
    },
    {
      platform: "twitter",
      url: "twitter.com/emretfn",
      order: 2,
    },
    {
      platform: "linkedin",
      url: "linkedin.com/in/emretfn",
      order: 3,
    },
  ];
  return (
    <div className="flex flex-col gap-y-6">
      <Button block variant="secondary">
        Add new link
      </Button>
      <div className="w-full flex-1">
        {links.length > 0 ? (
          <div className="flex flex-col gap-y-6">
            {links.map((link) => (
              <DraggableLinkItem />
            ))}
          </div>
        ) : (
          <div className="flex bg-grey-light  rounded-xl p-5  flex-col items-center gap-y-10 ">
            <EmptyIllustration />
            <Caption
              title="Let’s get you started"
              description="Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!"
              align="center"
              className="gap-y-6 max-w-[488px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableLinkList;
