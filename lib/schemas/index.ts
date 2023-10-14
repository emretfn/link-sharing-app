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

export const ProfileSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Can't be empty" }),
  lastName: z.string().trim().min(1, { message: "Can't be empty" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Can't be empty" })
    .email({ message: "Please check the email" }),
  avatarUrl: z.string().optional().nullable(),
});
