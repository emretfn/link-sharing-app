import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const supabase = createClientComponentClient();

export const checkUrlValidate = (url: string) => {
  const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  if (!url) {
    return "Can't be empty";
  } else if (!regex.test(url)) {
    return "Please check the URL";
  } else {
    return null;
  }
};
