import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes] = useState([]);



  useEffect(()=> {
    let myNotes = JSON.parse(localStorage.getItem("items"))
    setNotes(myNotes)
  }, [])

  function addNote(newNote) {
    let prev = JSON.parse(localStorage.getItem("items"))
    let itemsToSet = prev?.length ? [...prev, newNote] : [newNote];
    localStorage.setItem("items", JSON.stringify(itemsToSet))

    setNotes((prevNotes) => {
      return prevNotes ? [...prevNotes, newNote] : [newNote]
    });
  }

  function deleteNote(id) {
    let prev = JSON.parse(localStorage.getItem("items"))
    prev = prev.filter(prev => prev.id !== id)
    localStorage.setItem("items", JSON.stringify(prev))

    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return noteItem?.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem?.id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

