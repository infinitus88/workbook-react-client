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
      console.log(action.payload);
      const { id, username, email, profileImage } = action.payload;
        state.userData = { id, username, email, profileImage };
        state.error = null;
    },

    fetchUserData(state, action: PayloadAction<{ email: string; }>) {
      requestToServer.getUserData(action.payload.email)
      .then((response: { data: { id: number, username: string, email: string, profileImage: string } }) => {
          const userData = response.data;
          state.userData = userData;
          state.error = null;
      })
      .catch((error: any) => {
        state.error = "Ошибка при сохранении";
      });
    },

    logout(state) {
      state.userData = null;
      state.error = null;
    },

    updateUser(state, action: PayloadAction<{ id: number, username: string; profileImage: string; }>) {
      requestToServer.updateUser(action.payload.id, action.payload.username, action.payload.profileImage)
      .then((response: { data: { id: number, username: string, email: string, profileImage: string } }) => {
          console.log(response);
          const { id, username, email, profileImage } = response.data;
          state.userData = { id, username, email, profileImage }
      });
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const { setUser, logout, updateUser } = userSlice.actions;

export default userSlice.reducer;