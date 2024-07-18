import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../feature/noteSlice/noteSlice";

const Home = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");

  let dispatch = useDispatch();

  let handlClick = (e) => {
    e.preventDefault();
    if (title !== "" && description !== "") {
      let noteObject = {
        id: Date.now().toString(32),
        title,
        description,
        time: new Date().toString(),
      };
      dispatch(addNote(noteObject));
      setTitle("");
      setDescription("");
    }
  };
  return (
    <>
      <div className="container">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="w-1/4 shadow-md rounded-md p-6">
            <h1 className="text-3xl font-mono mb-4 text-center">
              Add your notes
            </h1>
            <form action="">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Name"
                type="text"
                className="w-full py-3 px-5 outline-none border rounded-md border-blue-500 "
              />
              <textarea
                value={description}
                maxLength={400}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full py-3 px-5 outline-none border rounded-md border-blue-500 resize-none my-3"
                placeholder="Type your note"
              ></textarea>
              <button
                onClick={handlClick}
                className="text-xl bg-orange-500 text-white px-6 py-2 rounded-md"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
