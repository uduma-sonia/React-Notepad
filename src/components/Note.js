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
      <div className="nav">
        <div>
          <h3>Good Morning</h3>
        </div>

        <div>
          <h3>Welcome</h3>
        </div>
      </div>

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

      {/* NEW NOTE */}
      <div className="new-note">
        <p>
          <span>
            <i class="fas fa-plus-square"></i>
          </span>
          Add New Note
        </p>
      </div>

      <div className="note-container">
        {/* NOTE LIST */}
        {note.map((notes) => (
          <div className="note-card">
            <h2 className="title">
              {" "}
              <i class="fas fa-circle"></i> {notes.Title}
            </h2>
            <hr />
            <p className="body">
              {notes.Body}{" "}
              <span className="del-btn">
                <i class="fas fa-trash-alt"></i>
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
