import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../types";
// import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";

// Configure the Redux store with the auth reducer
export const store = configureStore({
  reducer: {
    user: userReducer
  },
});

// Define a custom hook to access the store and dispatch actions
export function useAppDispatch() {
  return useDispatch<typeof store.dispatch>();
}

// Define a custom hook to select data from the store
export function useAppSelector<TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
) {
  return useSelector<RootState, TSelected>(selector, equalityFn);
}

// Create a memoized version of the custom hooks to improve performance
export function useRedux() {
  const dispatch = useAppDispatch();
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);
  const memoizedSelector = useMemo(() => useAppSelector, []);
  return { dispatch: memoizedDispatch, useSelector: memoizedSelector };
}
