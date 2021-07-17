import React, { useState, useEffect } from "react";
import { db } from "../config/config";

const AddNote = () => {
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  //ADD NOTE TO DATABASE
  const addNote = (e) => {
    e.preventDefault();
    db.collection("noteList")
      .add({
        Body: noteBody,
        Title: noteTitle,
      })
      .then(() => {
        setNoteBody("");
        setNoteTitle("");
      })
      .catch((err) => setError(err.message));
  };

  //SHOW MODAL
  const showModal = () => {
    setShow(true);
  };

  //HIDE MODAL
  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="addnote-container">
      <div className="new-note">
        <p onClick={showModal}>
          <span>
            <i className="fas fa-plus-square"></i>
          </span>
          Add New Note
        </p>
      </div>

      <form
        className={show ? "add-container showC" : "add-container hideC"}
        autoComplete="off"
        onSubmit={addNote}
      >
        <input
          name="title"
          className="title-field"
          type="text"
          required
          placeholder="title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <textarea
          name="text"
          className="text-field"
          type="text"
          // rows="5"
          // cols="50"
          required
          placeholder="Write New Note..."
          value={noteBody}
          onChange={(e) => setNoteBody(e.target.value)}
        ></textarea>

        <button type="submit" id="add-btn" onClick={hideModal}>
          ADD
        </button>
      </form>

      <p>{error}</p>
    </div>
  );
};

export default AddNote;
