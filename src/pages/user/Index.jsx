import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { noteDelete } from "../../feature/noteSlice/noteSlice";
import Modal from "./Modal";
// import { format, formatDistance, formatRelative, subDays } from "date-fns";
import moment from "moment";

const User = () => {
  let [noteShow, setNoteShow] = useState(6);
  let [popUpShow, setPopUpShow] = useState(false);
  let [editableId, setEditableId] = useState();
  let [editableTitle, setEditableTitle] = useState();
  let [editableDescription, setEditableDescripton] = useState();

  // let notes = useSelector((state) => state.noteBook.noteItem);
  // or Nicher khetre initailState and distructure name same howa lagbe
  // let { noteItem } = useSelector((state) => state.noteBook);
  let { noteItem } = useSelector((state) => state.noteBook);

  let handleShow = () => {
    // setNoteShow(noteShow + 3);
    setNoteShow((prev) => prev + 3);
  };

  let dispatch = useDispatch();
  let handleNoteDelete = (id) => {
    dispatch(noteDelete(id));
  };

  let handleNoteUpdate = (note) => {
    setPopUpShow(true);
    setEditableId(note.id);
    setEditableTitle(note.title);
    setEditableDescripton(note.description);
  };
  return (
    <>
      <div className="container relative ">
        {popUpShow && (
          <Modal
            setPopUpShow={setPopUpShow}
            editableId={editableId}
            editableTitle={editableTitle}
            editableDescription={editableDescription}
            setEditableDescripton={setEditableDescripton}
            setEditableTitle={setEditableTitle}
          />
        )}

        <div className="grid grid-cols-3 gap-4 mt-2">
          {noteItem?.slice(0, noteShow).map((note) => (
            <div
              key={note.id}
              className="border border-blue-400 rounded-md p-3"
            >
              <h2 className="text-4xl font-mono font-bold">{note.title}</h2>
              <p className="font-serif leading-6 my-4">{note.description}</p>
              <span>
                {/* {formatDistance(note.time, new Date(), {
                  addSuffix: true,
                })} */}
                {moment(note.time).fromNow()}
              </span>
              <div className="flex items-center justify-end gap-4">
                <button
                  onClick={() => handleNoteDelete(note.id)}
                  className="text-xl font-sans py-2 px-4 bg-red-800 text-white rounded-md"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleNoteUpdate(note)}
                  className="text-xl font-sans py-2 px-4 bg-orange-500 text-white rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
        {noteItem.length > noteShow && (
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
