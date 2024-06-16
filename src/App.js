import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [showNote, setShowNote] = useState(false);
  const changeShowOfNote = () => {
    setShowNote(!showNote);
  };
  return (
    <div>
      <div>{showNote && <Notes />}</div>
      <button onClick={changeShowOfNote}>Show/Disable Note</button>
    </div>
  );
}

export default App;
