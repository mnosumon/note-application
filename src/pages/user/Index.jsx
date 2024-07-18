import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteDelete } from "../../feature/noteSlice/noteSlice";

const User = () => {
  let [noteShow, setNoteShow] = useState(6);
  let notes = useSelector((state) => state.noteBook.noteItem);
  console.log(notes.length);
  let handleShow = () => {
    // setNoteShow(noteShow + 3);
    setNoteShow((prev) => prev + 3);
  };

  let dispatch = useDispatch();
  let handleNoteDelete = (id) => {
    dispatch(noteDelete(id));
  };
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 gap-4 mt-2">
          {notes?.slice(0, noteShow).map((note) => (
            <div
              key={note.id}
              className="border border-blue-400 rounded-md p-3"
            >
              <h2 className="text-4xl font-mono font-bold">{note.title}</h2>
              <p className="font-serif leading-6 my-4">{note.description}</p>
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => handleNoteDelete(note.id)}
                  className="text-xl font-sans py-2 px-4 bg-red-800 text-white rounded-md"
                >
                  Delete
                </button>
                <button className="text-xl font-sans py-2 px-4 bg-orange-500 text-white rounded-md">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {notes.length > noteShow && (
          <div className="text-center mt-5">
            <button
              onClick={handleShow}
              className="text-xl font-mono py-2 px-4 bg-yellow-400 rounded-md"
            >
              Load more...
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
