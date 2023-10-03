//Types
import { SocialLink } from "@/lib/types";
import { checkUrlValidate, supabase } from "@/lib/utils";

//Redux
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

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

interface FetchTypes {
  links: SocialLink[];
}
export const fetchSocialLinks = createAsyncThunk(
  "socialLinks/fetchSocialLinks",
  async () => {
    const { data: userData } = await supabase.auth.getUser();
    if (userData.user) {
      const { data, error } = await supabase
        .from("profiles")
        .select("links")
        .order("links->order", { ascending: true })
        .eq("id", userData.user.id)
        .returns<{ links: SocialLink[] }[]>();

      return data?.[0].links;
    }
    return null;
  }
);

export const saveSocialLinks = createAsyncThunk(
  "socialLinks/saveSocialLinks",
  async (links: SocialLink[]) => {
    const { data: userData } = await supabase.auth.getUser();
    let isValid = true;

    links.forEach((link) => {
      if (checkUrlValidate(link.url)) {
        isValid = false;
      }
    });

    if (!isValid) {
      return;
    }

    if (userData.user) {
      console.log("links", links);
      const { data, error } = await supabase
        .from("profiles")
        .update({ links })
        .eq("id", userData.user.id)
        .select("*");
      if (error) {
        console.log("error", error);
        throw error;
      }
      console.log("data", data);
      return data;
    }
    return;
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
    addLink: (state, action: PayloadAction<SocialLink>) => {
      state.socialLinks = [...state.socialLinks, action.payload];
      state.isUpdated = true;
    },
    removeLink: (state, action: PayloadAction<string>) => {
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
    updateLink: (state, action) => {
      const updatedLinks = state.socialLinks.map((link) => {
        if (link.id === action.payload.id) {
          return {
            ...link,
            ...action.payload,
          };
        }
        return link;
      });
      state.socialLinks = updatedLinks;
      state.isUpdated = true;
    },
  },
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchSocialLinks.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }
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
    // Save
    builder.addCase(saveSocialLinks.fulfilled, (state, action) => {
      state.isUpdated = false;
      state.loading = false;
    });
    builder.addCase(saveSocialLinks.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(saveSocialLinks.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { reset, handleReorder, addLink, removeLink, updateLink } =
  socialLinks.actions;

export default socialLinks.reducer;
