import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as requestToServer from "./authCrud";
import type { RootState } from "../../types";

const object = [
  {
    name: "fjdaskfjdaskl",
    age: 12312
  }
];



interface AuthState {
  isAuthenticated: boolean;
  verifCode: string | null;
  userData: {
    id: number,
    username: string,
    email: string,
  } | null;
  accessToken: string | null;
  error: string | null;
};

const initialState: AuthState = {
  isAuthenticated: false,
  verifCode: null,
  userData: null,
  accessToken: null,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string}>) {
      requestToServer.login(action.payload)
      .then((response: { data: { id: number, username: string; email: string; token: string; }; }) => {
        const { id, username, email, token } = response.data;
        state.userData = { id, username, email };
        state.accessToken = token;
        state.error = null;
      })
      .catch((error: any) => {
        state.error = "Ошибка авторизации";
      })
    },

    logout(state) {
      state.isAuthenticated = false;
      state.userData = null;
      state.accessToken = null
      state.error = null;
    },

    forgetPassword(state, action: PayloadAction<{ email: string }>) {
      requestToServer.forgetPassword(action.payload)
      .then((response: { data: { verifCode: string }}) => {
          const { verifCode } = response.data;
          state.verifCode = verifCode;
          state.error = null;
      })
      .catch((error: any) => {
        state.error = "Ошибка при отправки запроса на верификацию";
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

export const { login, logout, forgetPassword, setError, clearError } = authSlice.actions;

export default authSlice.reducer;