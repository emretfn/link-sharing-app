import React from "react";
import IconDrag from "@/public/assets/images/icon-drag-and-drop.svg";
import IconLink from "@/public/assets/images/icon-link.svg";
import Input from "./ui/input";
import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SocialLinks } from "@/lib/constants";

const DraggableLinkItem = () => {
  return (
    <div className="w-full bg-grey-light p-5 flex flex-col gap-y-3 rounded-xl">
      {/* Item Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center font-bold text-grey gap-x-2">
          <IconDrag />
          <div>Link #1</div>
        </div>
        <button className="body-m text-grey">Remove</button>
      </div>
      {/* Form Fields */}
      <label className="flex flex-col">
        <span className="body-s">Platform</span>
        <Select defaultValue={SocialLinks[0].value}>
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
        />
      </div>
    </div>
  );
};

export default DraggableLinkItem;
