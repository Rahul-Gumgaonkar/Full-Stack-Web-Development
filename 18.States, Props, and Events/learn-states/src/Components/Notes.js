import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setnotes] = useState([]);
  const [currentNote, setcurrentNote] = useState("");
  function changeCurrentNote(event) {
    setcurrentNote(event.target.value);
  }
  function addNote(event) {
    const newNotesArray = [...notes, currentNote];
    setnotes(newNotesArray);
  }
  const ulStyle = {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "20px",
  };
  return (
    <>
      <input onChange={changeCurrentNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {notes.map((notes, index) => {
          return (
            <li key={index}>
              <SingleNote notes={notes} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Notes;
