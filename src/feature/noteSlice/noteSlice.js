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
    updateValue: (state, action) => {
      let { id, title, description, time } = action.payload;
      let note = state.noteItem.find((item) => item.id == id);
      if (note) {
        note.time = time;
        note.title = title;
        note.description = description;
        note.time = time;
        localStorage.setItem("note", JSON.stringify(state.noteItem));
      }
    },
  },
});
export const { addNote, noteDelete, updateValue } = noteSlice.actions;

export default noteSlice.reducer;
