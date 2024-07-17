import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./feature/noteSlice/noteSlice";

export const store = configureStore({
  reducer: {
    noteBook: noteSlice,
  },
});
