import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  noteItem: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.noteItem = [...state.noteItem, action.payload];
    },
  },
});
export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
