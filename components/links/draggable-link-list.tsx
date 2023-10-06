"use client";
//Hooks
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
  useFieldArray,
  useForm,
  FormProvider,
  SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/lib/utils";

//Components
import Button from "@/components/ui/button";
import DraggableLinkItem from "./draggable-link-item";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import EmptyState from "@/components/links/empty-state";

//Constants
import { SocialLinks } from "@/lib/constants";
import { SocialLink, SocialLinkForm } from "@/lib/types";
import { SocialLinkSchema } from "@/lib/schemas";

const DraggableLinkList = () => {
  const methods = useForm<SocialLinkForm>({
    resolver: zodResolver(SocialLinkSchema),
  });
  const {
    getValues,
    reset,
    handleSubmit,
    formState: { isDirty },
    control,
  } = methods;

  const { fields, append, remove, move } = useFieldArray<SocialLinkForm>({
    control,
    name: "socialLinks",
  });

  const fetchData = async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (userData.user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("links")
        .order("links->order", { ascending: true })
        .eq("id", userData.user.id)
        .returns<{ links: SocialLink[] }[]>();

      if (error) {
        console.log("error", error);
        throw error;
      }

      if (data) {
        const links = data[0].links;
        reset({ socialLinks: links });
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit: SubmitHandler<SocialLinkForm> = async (formData) => {
    const { data: userData } = await supabase.auth.getUser();
    if (userData.user) {
      const { data, error } = await supabase
        .from("profiles")
        .update({ links: formData.socialLinks })
        .eq("id", userData.user.id)
        .select("*");
      if (error) {
        console.log("error", error);
        throw error;
      }
    }
    reset(formData);
  };

  const handleReorder = (result: DropResult) => {
    if (result.destination) {
      move(result.source.index, result.destination.index);

      // Update order without using fields
      const values = getValues();
      const newValues = values.socialLinks.map((item, index) => {
        return {
          ...item,
          order: index + 1,
        };
      });
      reset({ socialLinks: newValues }, { keepDirty: true });
    }
  };

  const handleAdd = () => {
    const newLink = {
      id: uuid(),
      platform: SocialLinks[0].value,
      url: "",
      order: getValues().socialLinks.length + 1,
    };

    append(newLink);
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Button block variant="secondary" onClick={handleAdd} type="button">
          Add new link
        </Button>

        <DragDropContext onDragEnd={handleReorder}>
          <div className="w-full flex-1">
            {fields.length > 0 ? (
              <Droppable droppableId="social-links">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col"
                  >
                    {fields.map((link, index) => (
                      <DraggableLinkItem
                        key={link.id}
                        index={index}
                        link={link}
                        remove={remove}
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
          <div className="px-10 py-6 border-t border-grey-border flex justify-end -mx-6 tablet:-mx-10 -mb-6 tablet:-mb-10">
            <Button disabled={!isDirty} type="submit">
              Save
            </Button>
          </div>
        </DragDropContext>
      </form>
    </FormProvider>
  );
};

export default DraggableLinkList;
