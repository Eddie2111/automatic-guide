"use client";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import authReducer from "./features/auth";
import { employeeApi } from "./queries/employee.query.ts";
import { taskApi } from "./queries/task.query.ts";
import { userApi } from "./queries/user.query.ts";

const rootReducer = combineReducers({
  auth: authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer,
  [employeeApi.reducerPath]: employeeApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware, taskApi.middleware, employeeApi.middleware),
});

export const persistor = persistStore(store);
