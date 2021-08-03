import React, { useState, useEffect } from "react";
import { db } from "../config/config";
import AddNote from "./AddNote";

import "../css/Style.css";

const Note = () => {
  const [note, setNote] = useState([]);
  const [allNotes, setAllNotes] = useState([]);

  const ref = db.collection("noteList");

  //GET NOTES FROM FIRESTORE
  function getNotes() {
    ref.onSnapshot((querySnapshot) => {
      //STORE ITEMS GOTTEN FROM DATABASE IN AN ARRAY
      const allItems = [];

      querySnapshot.forEach((doc) => {
        allItems.push(doc);
      });

      setNote(allItems);
      setAllNotes(allItems);
    });
  }

  //SEARCH FUNCTION
  const handleSearch = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    const input = e.target.value;
    const filtered = allNotes.filter((Fnote) => {
      return Fnote.data().Title.toLowerCase().includes(input.toLowerCase());
    });
    setNote(filtered);
  };

  //DELETE NOTE
  const deleteNote = async (id) => {
    db.collection("noteList").doc(id).delete();
  };

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
            onChange={handleSearch}
            placeholder="Search Notes..."
          />
        </form>
      </div>

      <AddNote />

      <div className="note-container">
        {note.length === 0 && <div className="pre-loader">LOADING...</div>}
        {/* NOTE LIST */}
        {note.map((notes) => (
          <div className="note-card" data-id={notes.id} key={notes.id}>
            <h2 className="title">
              {" "}
              <i className="fas fa-circle"></i> {notes.data().Title}
            </h2>
            <hr />
            <p className="body">
              {notes.data().Body}
              <span className="del-btn" onClick={() => deleteNote(notes.id)}>
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
