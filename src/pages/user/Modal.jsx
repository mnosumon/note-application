import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateValue } from "../../feature/noteSlice/noteSlice";

const Modal = ({
  setPopUpShow,
  editableDescription,
  editableTitle,
  editableId,
  setEditableDescripton,
  setEditableTitle,
}) => {
  let dispatch = useDispatch();

  let handleUpdateValue = (e) => {
    e.preventDefault();
    let editableValue = {
      id: editableId,
      title: editableTitle,
      description: editableDescription,
      time: new Date().toString(),
    };
    dispatch(updateValue(editableValue));

    // dispatch(
    //   updateValue({
    //     id: editableId,
    //     title: editableTitle,
    //     description: editableDescription,
    //     time: new Date().toString(),
    //   })
    // );

    setPopUpShow(false);
  };
  return (
    <>
      <div className="w-1/3 rounded-md p-8 absolute top-[20%] left-1/2 -translate-x-1/2 bg-amber-500">
        <div
          onClick={() => setPopUpShow(false)}
          className="h-5 w-5 bg-slate-700 absolute top-1 right-1 cursor-pointer"
        ></div>
        <form action="">
          <div className="w-full mx-auto text-center">
            <input
              value={editableTitle}
              onChange={(e) => setEditableTitle(e.target.value)}
              placeholder="Name"
              type="text"
              className="w-full py-3 px-5 outline-none border rounded-md border-blue-500 "
            />
            <textarea
              value={editableDescription}
              onChange={(e) => setEditableDescripton(e.target.value)}
              maxLength={400}
              rows={4}
              className="w-full py-3 px-5 outline-none border rounded-md border-blue-500 resize-none my-3"
              placeholder="Type your note"
            />
            <button
              onClick={handleUpdateValue}
              className="text-xl font-sans bg-black text-white py-2 px-8 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
