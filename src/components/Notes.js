import { useEffect, useState } from "react";

const Notes = () => {
  const [showNoteHeader, setShowNoteHeader] = useState(true);
  const [showNoteDesc, setShowNoteDesc] = useState(true);

  // Case 1: This useffect hook will run on the first mount and on each and every state updates
  // useEffect(() => {
  //   console.log("I am getting mounted!");
  // });

  // Case2:  This useffect hook will run on the first mount but not on any state updates
  // useEffect(() => {
  //   console.log("I am getting mounted!");
  // }, []);

  // Case 3: This useffect hook will run on the first mount but on only on state updates which are inside the dependency array
  // useEffect(() => {
  //   console.log("I am getting mounted!");
  // }, [showNoteDesc]);

  useEffect(() => {
    console.log("I am getting mounted!");
    return () => {
      console.log("I am getting unmounted!");
    };
  }, []);

  // useEffect(() => {
  //   first
  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div style={{ border: "1px solid red" }}>
      {showNoteHeader && <h1>NOte</h1>}
      {showNoteDesc && <p>I am note component</p>}
      <button onClick={() => setShowNoteHeader(!showNoteHeader)}>
        Show/Disable Header
      </button>
      <button onClick={() => setShowNoteDesc(!showNoteDesc)}>
        Show/Disable Desc
      </button>
    </div>
  );
};

export default Notes;
