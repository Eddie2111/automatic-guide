"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logIn, setRole } from "@/redux/features/auth";
import { useLoginMutation } from "@/redux/queries/user.query";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isLoggedIn
  );

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [login, { isLoading: isLoggingIn }] = useLoginMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await login(formData);
      const userRole: string = data?.data?.role ?? "";
      console.log("Login success:", data?.data?.serial);
      dispatch(logIn({ serial: data?.data?.serial ?? "" }));

      dispatch(setRole(data?.data?.role ?? null));
      if (userRole.toLowerCase() === "user") {
        router.push("/user");
      }
      if (userRole.toLowerCase() === "admin") {
        router.push("/admin");
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h1 className="mb-4 font-bold text-2xl">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 text-sm"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 p-2 rounded-md w-full focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 text-sm"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block border-gray-300 focus:border-indigo-500 shadow-sm mt-1 p-2 rounded-md w-full focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoggingIn}
            className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isLoggingIn ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
