import React, { useState, useEffect } from "react";
import { db } from "../config/config";

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
    <div>
      {note.map((notes) => (
        <div>
          {notes.Body}||| {notes.Title}
        </div>
      ))}
    </div>
  );
};

export default Note;
