import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  noteItem: [],
};

let saveNote = JSON.parse(localStorage.getItem("note"));
if (saveNote) {
  initialState.noteItem = saveNote;
}
export const noteSlice = createSlice({
  name: "note",
  initialState,

  reducers: {
    addNote: (state, action) => {
      //   state.noteItem.push(action.payload);
      state.noteItem = [...state.noteItem, action.payload];
      localStorage.setItem("note", JSON.stringify(state.noteItem));
    },
    noteDelete: (state, action) => {
      state.noteItem = state.noteItem.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("note", JSON.stringify(state.noteItem));
    },
  },
});
export const { addNote, noteDelete } = noteSlice.actions;

export default noteSlice.reducer;
