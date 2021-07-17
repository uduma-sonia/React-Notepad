import React, { useState, useEffect } from "react";
import { db } from "../config/config";

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
            <i class="fas fa-search search-icon"></i>
          </label>
          <input
            className="search-field"
            type="text"
            placeholder="Search Notes..."
          />
        </form>
      </div>

      {/* NOTE LIST */}
      {note.map((notes) => (
        <div className="note-card">
          <h2>{notes.Title}</h2>
          <p>{notes.Body}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
