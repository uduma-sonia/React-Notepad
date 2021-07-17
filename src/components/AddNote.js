import React, { useState } from "react";
import { db } from "../config/config";

const AddNote = () => {
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
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

  return (
    <div>
      <form autoComplete="off" onSubmit={addNote}>
        <label>TITLE:</label>
        <input
          type="text"
          required
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <br />

        <label>BODY:</label>
        <input
          type="text"
          required
          value={noteBody}
          onChange={(e) => setNoteBody(e.target.value)}
        />

        <button>ADD</button>
      </form>

      <p>{error}</p>
    </div>
  );
};

export default AddNote;
