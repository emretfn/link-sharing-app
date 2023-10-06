import { SocialLinkSchema } from "@/lib/schemas";
import { z } from "zod";

export type SocialLink = {
  id: string;
  platform: string;
  url: string;
  order: number;
};

export type SocialLinkForm = z.infer<typeof SocialLinkSchema>;
