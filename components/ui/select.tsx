"use client";

import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import IconChevronDown from "@/public/assets/images/icon-chevron-down.svg";

type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>;
type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger>;
type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>;
type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

// Anatomy of a Select component
{
  /* 
<Select>
    <Select.Trigger>
        <Select.Value />
    </Select.Trigger>
    <Select.Content>
        <Select.Item value="github">
            <IconGithub />
            <span>Github</span>
        </Select.Item>
    </Select.Content>
</Select>
 */
}

const Select = ({ children, ...props }: SelectProps) => {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
};

const SelectTrigger = ({ children, ...props }: SelectTriggerProps) => {
  return (
    <SelectPrimitive.Trigger
      className="flex items-center justify-between w-full border outline-primary bg-white border-grey-border px-4 py-3 rounded-lg data-[state=open]:border-primary data-[state=open]:shadow-active "
      {...props}
    >
      {children}
      <SelectPrimitive.Icon>
        <IconChevronDown />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectContent = ({ children, ...props }: SelectContentProps) => {
  return (
    <SelectPrimitive.Portal className="mt-2 w-[var(--radix-select-trigger-width)] shadow-box border border-grey-border max-h-[var(--radix-select-content-available-height)]">
      <SelectPrimitive.Content
        position="popper"
        side="bottom"
        className="overflow-hidden bg-white rounded-lg"
        {...props}
      >
        {/* <SelectPrimitive.ScrollUpButton className="h-6  flex items-center justify-center">
          <IconChevronDown className="rotate-180" />
        </SelectPrimitive.ScrollUpButton> */}
        <SelectPrimitive.Viewport className="p-1.5">
          {children}
        </SelectPrimitive.Viewport>
        {/* <SelectPrimitive.ScrollDownButton className="h-6  flex items-center justify-center">
          <IconChevronDown />
        </SelectPrimitive.ScrollDownButton> */}
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectItem = ({ children, ...props }: SelectItemProps) => {
  return (
    <>
      <SelectPrimitive.Item
        {...props}
        className="py-3 px-4 cursor-pointer data-[state=checked]:text-primary checked-fill-primary  data-[highlighted]:text-primary outline-none rounded-lg"
      >
        <SelectPrimitive.ItemText>
          <span className="flex items-center gap-x-3">{children}</span>
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
      <SelectPrimitive.Separator className="border-t border-grey-border last:hidden mx-4" />
    </>
  );
};

const SelectValue = () => {
  return <SelectPrimitive.Value />;
};

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue };
