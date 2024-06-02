"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { NextUIProvider } from "@nextui-org/react";
import { store, persistor } from "@/redux/store";
import { userApi } from "@/redux/services/user.service.ts";
import Navbar from "@/components/layout/navbar";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}
