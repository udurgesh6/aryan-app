import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [myName, setMyName] = useState("Aryan");

  const notes = [
    { name: "helloWorld", key: "sgdhwegdw" },
    { name: "Dishes" },
    { name: "AryanWorld" },
  ];

  const changeName = () => {
    if (myName === "Aryan") {
      setMyName("Shubham");
    } else {
      setMyName("Aryan");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{myName}</h1>
        <button onClick={changeName}>Change Name</button>
        <Notes notes={notes} myName={myName} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
