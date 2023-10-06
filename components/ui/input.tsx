import { cn } from "@/lib/utils";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string | null;
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, type, className, error, label, ...props }, ref) => {
    return (
      <label className="flex flex-col gap-y-1">
        {label && <span className="body-s">{label}</span>}
        <div className="relative">
          {icon && (
            <span className="flex h-4 w-4 justify-center items-center absolute top-1/2 left-4 -translate-y-1/2 overflow-hidden">
              {icon}
            </span>
          )}
          <input
            type={type}
            ref={ref}
            className={cn(
              "w-full py-3 px-4 h-12 rounded-lg focus:outline-none  focus:border-primary caret-primary border border-grey-border focus:shadow-active placeholder:text-grey-dark/50 text-grey-dark",
              {
                "text-red border-red ": error,
                "pl-11 pr-4": icon,
              },
              className
            )}
            {...props}
          />
          {error && (
            <span className="body-s text-red absolute top-1/2 right-4 -translate-y-1/2">
              {error}
            </span>
          )}
        </div>
      </label>
    );
  }
);

export default Input;
