import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./task/tasksSlice";
import { filtersReducer } from "./filtersSlice";
import { authReducer } from "./auth/authSlice";
import storage from "redux-persist/es/storage"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistconfig = {
  key: "auth",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistconfig, authReducer),
    filters: filtersReducer,
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store)