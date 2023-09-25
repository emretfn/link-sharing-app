//Types
import { SocialLink } from "@/lib/types";

//Redux
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

//mock data
const userLinks = [
  {
    id: "1",
    platform: "github",
    url: "github.com/emretfn",
    order: 1,
  },
  {
    id: "2",
    platform: "twitter",
    url: "twitter.com/emretfn",
    order: 2,
  },
  {
    id: "3",
    platform: "linkedin",
    url: "linkedin.com/in/emretfn",
    order: 3,
  },
] as SocialLink[];

type SocialLinksState = {
  socialLinks: SocialLink[];
  isUpdated: boolean;
  loading: boolean;
  error: string | undefined;
};

const initialState = {
  socialLinks: [],
  isUpdated: false,
  loading: false,
  error: undefined,
} as SocialLinksState;

//mock fetch
export const fetchSocialLinks = createAsyncThunk(
  "socialLinks/fetchSocialLinks",
  async () => {
    return Promise.resolve(userLinks);
  }
);

export const socialLinks = createSlice({
  name: "social-links",
  initialState,
  reducers: {
    reset: () => initialState,
    handleReorder: (state, action) => {
      if (!action.payload.destination) {
        return;
      }
      const items = Array.from(state.socialLinks);
      const [reorderedItem] = items.splice(action.payload.source.index, 1);
      items.splice(action.payload.destination.index, 0, reorderedItem);

      const updatedLinks = items.map((item, index) => {
        return {
          ...item,
          order: index + 1,
        };
      });

      state.socialLinks = updatedLinks;
      state.isUpdated = true;
    },
    addLink: (state, action) => {
      state.socialLinks = [...state.socialLinks, action.payload];
      state.isUpdated = true;
    },
    removeLink: (state, action) => {
      // remove and update order
      const updatedLinks = state.socialLinks
        .filter((link) => link.id !== action.payload)
        .map((link, index) => {
          return {
            ...link,
            order: index + 1,
          };
        });
      state.socialLinks = updatedLinks;
      state.isUpdated = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSocialLinks.fulfilled, (state, action) => {
      state.socialLinks = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchSocialLinks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchSocialLinks.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { reset, handleReorder, addLink, removeLink } =
  socialLinks.actions;

export default socialLinks.reducer;
