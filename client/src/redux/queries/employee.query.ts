"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ResponseProps {
  status: number;
  data?: IEmployeeData | IEmployeeData[] | any;
  message?: string;
}

interface IEmployeeData {
  serial: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "ADMIN" | "USER";
}

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3100",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query<{ data: ResponseProps }, number | void>({
      query: (query: string) => ({
        url: `/employee/getAll?page=${query}`,
        method: "GET",
      }),
    }),
    getOneEmployee: builder.query<{ data: ResponseProps }, number | void>({
      query: (query: string) => ({
        url: `/employee/getOne?id=${query}`,
        method: "GET",
      }),
    }),
    getOnlyEmployees: builder.query<{ data: ResponseProps }, number | void>({
      query: (query: string) => ({
        url: `/employee/getAll?page=${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetOneEmployeeQuery,
  useGetOnlyEmployeesQuery,
} = employeeApi;
