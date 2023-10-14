import { ProfileSchema, SocialLinkSchema } from "@/lib/schemas";
import { z } from "zod";

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  order: number;
};

export type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  links: SocialLink[];
};

export type SocialLinkForm = z.infer<typeof SocialLinkSchema>;
export type ProfileForm = z.infer<typeof ProfileSchema>;
