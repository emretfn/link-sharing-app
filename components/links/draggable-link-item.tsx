//Icons
import IconDrag from "@/public/assets/images/icon-drag-and-drop.svg";
import IconLink from "@/public/assets/images/icon-link.svg";

//Components
import Input from "@/components/ui/input";
import { Draggable } from "react-beautiful-dnd";
import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

//Redux
import { removeLink, updateLink } from "@/store/social-links-store";
import { useAppDispatch } from "@/store";

//Constants
import { SocialLinks } from "@/lib/constants";
import { FocusEvent, useState } from "react";
import { checkUrlValidate } from "@/lib/utils";

interface DraggableLinkItemProps {
  draggableId: string;
  index: number;
  link: {
    id: string;
    platform: string;
    url: string;
    order: number;
  };
}

const DraggableLinkItem = ({
  draggableId,
  index,
  link,
}: DraggableLinkItemProps) => {
  const dispatch = useAppDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeLink(id));
  };
  const [error, setError] = useState<string | null>(null);

  const checkValidate = (e: FocusEvent<HTMLInputElement, Element>) => {
    setError(null);
    const error = checkUrlValidate(e.target.value);
    if (error) {
      setError(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //store updateLink action
    dispatch(
      updateLink({
        id: link.id,
        url: e.target.value,
      })
    );
  };

  const handlePlatformChange = (value: string) => {
    dispatch(
      updateLink({
        id: link.id,
        platform: value,
      })
    );
  };

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
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
              onClick={() => handleRemove(link.id)}
              className="body-m text-grey"
            >
              Remove
            </button>
          </div>
          {/* Form Fields */}
          <label className="flex flex-col">
            <span className="body-s">Platform</span>
            <Select
              defaultValue={SocialLinks[0].value}
              value={link.platform}
              onValueChange={handlePlatformChange}
            >
              <SelectTrigger>
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
          </label>
          <div>
            <Input
              icon={<IconLink />}
              placeholder="e.g. https://www.github.com/johnappleseed"
              label="Link"
              value={link?.url}
              onChange={handleInputChange}
              onBlur={checkValidate}
              error={error}
            />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableLinkItem;
