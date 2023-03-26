import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper_backend } from "../../../declarations/dkeeper_backend/index";

const App = () => {

  //User notes
  const [notes, setNotes] = useState([]);

  //Function to add a note
  const addNote = async (newNote) => {

    //Create note on ICP backend
    dkeeper_backend.createNote(newNote.title, newNote.content);

    //Update notes state with new note
    setNotes(prevNotes => {
      return [newNote, ...prevNotes];
    });

  }

  //Function to delete a note
  const deleteNote = async (id) => {

    //Remove note on ICP backend
    dkeeper_backend.removeNote(id);

    //Remove deleted note from state
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    });

  }

  //Function to fetch user notes
  const fetchData = async () => {

    //Retrieve notes from dkeeper backend
    const notesArray = await dkeeper_backend.readNotes();

    //Update notes state
    setNotes(notesArray);

  }

  //componentDidMount
  useEffect(() => {

    //Fetch notes
    fetchData();

  }, [])

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
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
