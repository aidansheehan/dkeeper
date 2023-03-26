import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = (props) => {

  //Expanded state
  const [isExpanded, setExpanded] = useState(false);

  //Note state
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //Function to handle input change event
  const handleChange = (event) => {

    //Destructure event
    const { name, value } = event.target;

    //Update note state
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  //Function to handle submit note
  const submitNote = (event) => {

    //Call onAdd function with new note
    props.onAdd(note);
  }

  //Function to expand input
  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
