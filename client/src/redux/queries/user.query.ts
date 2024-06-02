"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IuserData {
  email: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  active?: boolean;
  role?: "admin" | "user";
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3100",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData: IuserData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    signup: builder.mutation({
      query: (userData: IuserData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.query({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
  useLogoutQuery,
} = userApi;
