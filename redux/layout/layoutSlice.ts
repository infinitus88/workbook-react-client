import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../types";
import { cloneElement } from "react";

const object = [
  {
    collapsed: true,
    shown: false
  }
];

interface LayoutState {
  collapsed: boolean,
  shown: boolean
};

const initialState: LayoutState = {
  collapsed: true,
  shown: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setCollapse(state, action: PayloadAction<{ collapsed: boolean}>) {
      state.collapsed = action.payload.collapsed
    },

    setShown(state, action: PayloadAction<{ shown: boolean }>) {
      state.shown = action.payload.shown
    },
  },
});

export const { setCollapse, setShown } = layoutSlice.actions;

export default layoutSlice.reducer;