//Icons
import IconDrag from "@/public/assets/images/icon-drag-and-drop.svg";
import IconLink from "@/public/assets/images/icon-link.svg";

//Components
import Input from "@/components/ui/input";
import { Draggable } from "@hello-pangea/dnd";
import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//Hooks
import {
  useFormContext,
  Controller,
  UseFieldArrayRemove,
} from "react-hook-form";

//Types
import { SocialLink, SocialLinkForm } from "@/lib/types";

//Constants
import { SocialLinks } from "@/lib/constants";

interface DraggableLinkItemProps {
  index: number;
  link: SocialLink;
  remove: UseFieldArrayRemove;
}

const DraggableLinkItem = ({ index, link, remove }: DraggableLinkItemProps) => {
  const {
    formState: { errors },
    register,
    control,
  } = useFormContext<SocialLinkForm>();

  return (
    <Draggable draggableId={link.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="w-full bg-grey-light p-5 flex flex-col gap-y-3 rounded-xl mb-6"
        >
          {/* Item Header */}
          <div className="flex justify-between items-center">
            <div
              {...provided.dragHandleProps}
              className="flex items-center font-bold text-grey gap-x-2"
            >
              <IconDrag />
              <div>Link #{link.order}</div>
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="body-m text-grey"
            >
              Remove
            </button>
          </div>
          {/* Form Fields */}
          <label className="flex flex-col">
            <span className="body-s">Platform</span>
            <Controller
              name={`socialLinks.${index}.platform` as const}
              control={control}
              render={({ field }) => (
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger onBlur={field.onBlur} ref={field.ref}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SocialLinks.map((link) => (
                      <SelectItem value={link.value} key={link.value}>
                        <link.icon />
                        <span>{link.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </label>
          <div>
            <Input
              icon={<IconLink />}
              placeholder="e.g. https://www.github.com/johnappleseed"
              label="Link"
              error={errors.socialLinks?.[index]?.url?.message}
              {...register(`socialLinks.${index}.url` as const)}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableLinkItem;
