import { configureStore } from "@reduxjs/toolkit";
import studyUiReducer from "./studyUiSlice";

export const store = configureStore({
  reducer: {
    studyUi: studyUiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


