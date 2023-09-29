"use client";
//Hooks
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { v4 as uuid } from "uuid";

//Redux
import {
  addLink,
  fetchSocialLinks,
  handleReorder,
} from "@/store/social-links-store";

//Components
import Button from "@/components/ui/button";
import DraggableLinkItem from "./draggable-link-item";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import EmptyState from "@/components/links/empty-state";

//Constants
import { SocialLinks } from "@/lib/constants";
import { supabase } from "@/lib/utils";

const DraggableLinkList = () => {
  const dispatch = useAppDispatch();
  const storeLinks = useAppSelector((state) => state.socialLinks.socialLinks);

  useEffect(() => {
    dispatch(fetchSocialLinks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (userData.user) {
      const newLink = {
        id: uuid(),
        platform: SocialLinks[0].value,
        url: "",
        order: storeLinks.length + 1,
      };
      dispatch(addLink(newLink));
    }
  };

  return (
    <div className="flex flex-col gap-y-6">
      <Button block variant="secondary" onClick={handleAdd}>
        Add new link
      </Button>

      <DragDropContext onDragEnd={(result) => dispatch(handleReorder(result))}>
        <div className="w-full flex-1">
          {storeLinks.length > 0 ? (
            <Droppable droppableId="social-lists">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="flex flex-col"
                >
                  {storeLinks.map((link, index) => (
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
            <EmptyState />
          )}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DraggableLinkList;
