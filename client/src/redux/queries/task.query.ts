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

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3100",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (userData: IuserData) => ({
        url: "/task/create",
        method: "POST",
        body: userData,
      }),
    }),
    createTaskByEmployee: builder.mutation({
      query: (userData: IuserData) => ({
        url: "/task/createByEmployee",
        method: "POST",
        body: userData,
      }),
    }),
    updateTask: builder.mutation({
      query: (userData: IuserData) => ({
        url: "/task/updateTask",
        method: "POST",
        body: userData,
      }),
    }),
    readTask: builder.query({
      query: (query: string) => ({
        url: `/task/getTask?id=${query}`,
        method: "GET",
      }),
    }),
    readTasks: builder.query({
      query: (query: string) => ({
        url: `/task/getTasks?page=${query}`,
        method: "GET",
      }),
    }),
    readTasksEmployee: builder.query({
      query: (query: string) => ({
        url: `/task/getTasksEmployee?page=${query}`,
        method: "GET",
      }),
    }),
    deleteTask: builder.mutation({
      query: (bodyData: { serial: string }) => ({
        url: `/task/deleteTask`,
        method: "POST",
        body: bodyData,
      }),
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useCreateTaskByEmployeeMutation,
  useUpdateTaskMutation,
  useReadTaskQuery,
  useReadTasksEmployeeQuery,
  useReadTasksQuery,
  useDeleteTaskMutation,
} = taskApi;
