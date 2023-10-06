import { z } from "zod";

export const SocialLinkSchema = z.object({
  socialLinks: z.array(
    z.object({
      id: z.string().min(1, { message: "id is required" }),
      platform: z.string().min(1, { message: "Can't be empty" }),
      url: z
        .string()
        .min(1, { message: "Can't be empty" })
        .url({ message: "Please check the URL" }),
      order: z.number(),
    })
  ),
});
