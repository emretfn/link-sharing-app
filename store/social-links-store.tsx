//Types
import { SocialLink } from "@/lib/types";

//Redux
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SocialLinksState = {
  socialLinks: SocialLink[];
};

const initialState = {
  socialLinks: [],
} as SocialLinksState;

export const socialLinks = createSlice({
  name: "social-links",
  initialState,
  reducers: {
    setSocialLinks: (state, action: PayloadAction<SocialLink[]>) => {
      state.socialLinks = action.payload;
    },
  },
});

export const { setSocialLinks } = socialLinks.actions;

export default socialLinks.reducer;
