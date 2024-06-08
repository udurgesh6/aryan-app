const Notes = ({ notes, myName }) => {
  const calculatesStringLength = () => {
    let totalLength = 0;
    notes.forEach((note) => {
      totalLength += note.length;
    });
    console.log(totalLength);
  };
  calculatesStringLength();
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Notes from {myName}:</h1>
      {notes.map((note, noteIndex) => (
        <div key={noteIndex}>
          <p>{note.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
