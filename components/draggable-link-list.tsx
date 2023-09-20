"use client";
import Button from "@/components/ui/button";
import DraggableLinkItem from "./draggable-link-item";
import EmptyIllustration from "@/public/assets/images/illustration-empty.svg";
import Caption from "@/components/caption";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useState } from "react";

const initialLinks = [
  {
    id: "1",
    platform: "github",
    url: "github.com/emretfn",
    order: 1,
  },
  {
    id: "2",
    platform: "twitter",
    url: "twitter.com/emretfn",
    order: 2,
  },
  {
    id: "3",
    platform: "linkedin",
    url: "linkedin.com/in/emretfn",
    order: 3,
  },
];

const DraggableLinkList = () => {
  const [links, setLinks] = useState(initialLinks);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(links);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedLinks = items.map((item, index) => {
      return {
        ...item,
        order: index + 1,
      };
    });

    setLinks(updatedLinks);
  };
  return (
    <div className="flex flex-col gap-y-6">
      <Button block variant="secondary">
        Add new link
      </Button>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="w-full flex-1">
          {links.length > 0 ? (
            <Droppable droppableId="social-lists">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col"
                >
                  {links.map((link, index) => (
                    <DraggableLinkItem
                      key={link.id}
                      index={index}
                      draggableId={link.id}
                      link={link}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
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
      </DragDropContext>
    </div>
  );
};

export default DraggableLinkList;
