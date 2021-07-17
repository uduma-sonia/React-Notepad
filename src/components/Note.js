import React, { useState, useEffect } from "react";
import { db } from "../config/config";
import AddNote from "./AddNote";

import "../css/Style.css";

const Note = () => {
  const [note, setNote] = useState([]);

  const ref = db.collection("noteList");

  function getNotes() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];

      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setNote(items);
    });
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes-container">
      {/* SEARCH BAR */}
      <div className="search-container">
        <form className="search-form">
          <label>
            <i className="fas fa-search search-icon"></i>
          </label>
          <input
            className="search-field"
            type="text"
            placeholder="Search Notes..."
          />
        </form>
      </div>

      <AddNote />

      <div className="note-container">
        {/* NOTE LIST */}
        {note.map((notes) => (
          <div className="note-card">
            <h2 className="title">
              {" "}
              <i className="fas fa-circle"></i> {notes.Title}
            </h2>
            <hr />
            <p className="body">
              {notes.Body}{" "}
              <span className="del-btn">
                <i className="fas fa-trash-alt"></i>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
