import { SocialLink } from "@/lib/types";
import { create } from "zustand";

type SocialLinkStore = {
  socialLinks: SocialLink[];
  setSocialLinks: (socialLinks: SocialLink[]) => void;
};

export const useSocialLinks = create<SocialLinkStore>((set) => ({
  socialLinks: [],
  setSocialLinks: (socialLinks) => set({ socialLinks }),
}));
