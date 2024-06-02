"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stateProps {
  value: {
    isLoggedIn: boolean;
    role: "ADMIN" | "USER" | null;
    serial: string | null;
  };
}

interface AuthState {
  isLoggedIn: boolean;
  role: "ADMIN" | "USER" | null;
  serial: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  role: null,
  serial: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (
      state: stateProps,
      action: PayloadAction<{ serial: string | null }>
    ) => {
      state.isLoggedIn = true;
      state.serial = action.payload.serial || "";
    },
    logOut: (state: stateProps) => {
      state.isLoggedIn = false;
      state.role = null;
      state.serial = "";
    },
    setRole: (state, action: PayloadAction<"ADMIN" | "USER">) => {
      state.role = action.payload;
    },
  },
});

export const { logIn, logOut, setRole } = authSlice.actions;

export default authSlice.reducer;
