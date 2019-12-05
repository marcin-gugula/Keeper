import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateNote from "./CreateNote";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(newNote) {
    setAllNotes(prevItems => {
      return [...prevItems, newNote];
    });
  }

  function deleneNote(id) {
    setAllNotes(prevItems => {
      return prevItems.filter((allNotes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote add={addNote} />
      {allNotes.map((note, index) => (
        <Note
          id={index}
          key={index}
          title={note.title}
          content={note.content}
          delete={deleneNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
