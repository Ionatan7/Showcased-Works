import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Note(props) {
  const [isEditing, setEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content,
  });

  function handleEditClick() {
    setEditing(true);
  }

  function handleSaveClick() {
    props.onEdit(props.id, editedNote);

    setEditing(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            name="title"
            onChange={handleChange}
            value={editedNote.title}
            placeholder="work name"
          />
          <textarea
            name="content"
            onChange={handleChange}
            value={editedNote.content}
            placeholder="work details"
            rows={3}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEditClick}>
            <EditIcon />
          </button>
          <button onClick={() => props.onDelete(props.id)}>
            <DeleteIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default Note;
