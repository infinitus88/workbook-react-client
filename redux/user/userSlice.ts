import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as requestToServer from "./userCrud";
import type {  } from "../../types";

interface UserState {
  userData: {
    id: number,
    profileImage: string,
    username: string,
    email: string,
  } | null;
  error: string | null;
};

const initialState: UserState = {
  userData: null,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ id: number; username: string; email: string; profileImage: string; }>) {
      const { id, username, email, profileImage } = action.payload;
      state.userData = { id, username, email, profileImage };
      state.error = null;
    },




    logout(state) {
      state.userData = null;
      state.error = null;
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;