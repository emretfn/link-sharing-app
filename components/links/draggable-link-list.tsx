"use client";
//Hooks
import { useEffect, useState } from "react";
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
//Store
import { useAppDispatch } from "@/store";
import { setSocialLinks } from "@/store/social-links-store";
//Constants
import { SocialLinks } from "@/lib/constants";
//Types
import { SocialLink, SocialLinkForm } from "@/lib/types";
import { SocialLinkSchema } from "@/lib/schemas";
import toast from "react-hot-toast";
import SaveIcon from "@/public/assets/images/icon-changes-saved.svg";
import Loader from "@/public/assets/images/icon-loader.svg";

const DraggableLinkList = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
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
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("links")
          .order("links->order", { ascending: true })
          .eq("id", userData.user.id)
          .returns<{ links: SocialLink[] }[]>();

        if (error) throw error;

        if (data) {
          const links = data[0].links;
          reset({ socialLinks: links });
        }
      }
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch(setSocialLinks(fields));
  }, [fields]);

  const onSubmit: SubmitHandler<SocialLinkForm> = async (formData) => {
    try {
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        const { data, error } = await supabase
          .from("profiles")
          .update({ links: formData.socialLinks })
          .eq("id", userData.user.id)
          .select("*");
        if (error) throw error;
        toast.success("Links saved successfully!", {
          icon: <SaveIcon />,
        });
      }
      reset(formData);
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const handleReorder = (result: DropResult) => {
    if (result.destination) {
      move(result.source.index, result.destination.index);
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
      order: getValues().socialLinks?.length + 1 || 1,
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
            {loading ? (
              <div className="flex items-center justify-center h-40 w-full ">
                <Loader className="animate-spin " />
              </div>
            ) : fields.length > 0 ? (
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
