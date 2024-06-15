import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [updatingNote, setUpdatingNote] = useState(false);

  const [note, setNote] = useState({
    name: "",
    createdBy: "",
    description: "",
    education: [],
    previousJob: {
      companYName: "",
      salary: "",
      years: "",
    },
  });

  const onCreate = (e) => {
    e.preventDefault();
    const totalNotes = notes.length;
    setNotes([
      ...notes,
      {
        ...note,
        createdAt: new Date().toDateString(),
        index: totalNotes,
      },
    ]);
    setNote({
      name: "",
      createdBy: "",
      description: "",
    });
  };

  const changeTHisNote = (note) => {
    setUpdatingNote(true);
    setNote(note);
  };

  const updateNote = (e) => {
    e.preventDefault();
    const tempNotes = [...notes];
    tempNotes[note.index] = note;
    setNotes(tempNotes);
    setNote({
      name: "",
      createdBy: "",
      description: "",
    });
    setUpdatingNote(false);
  };

  const deleteNote = (ind) => {
    const tempNotes = [...notes];
    tempNotes.splice(ind, 1);
    setNotes(tempNotes);
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <h1>MODE: {updatingNote ? "UPDATE" : "CREATE"}</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          border: "2px solid blue",
        }}
        onSubmit={updatingNote ? updateNote : onCreate}
      >
        <input
          type="text"
          value={note.name}
          onChange={(e) => setNote({ ...note, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="description"
          value={note.description}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
          placeholder="Description"
        />
        <input
          type="type"
          value={note.createdBy}
          onChange={(e) => setNote({ ...note, createdBy: e.target.value })}
          placeholder="Created By"
        />
        <button type="submit">{updatingNote ? "Update" : "Create"}</button>
      </form>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>My Notes:</h2>
        {notes.map((note, noteIndex) => (
          <div
            style={{ display: "flex", flexDirection: "column", width: "300px" }}
            key={note.createdAt + noteIndex}
          >
            <p>Title: {note.name}</p>
            <p>Created At: {note.createdAt}</p>
            <p>Created By: {note.createdBy}</p>
            <p>Description: {note.description}</p>
            <button onClick={() => changeTHisNote(note)}>Edit</button>
            <button onClick={() => deleteNote(note.index)}>Delete Note</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
