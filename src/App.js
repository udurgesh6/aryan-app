import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const onSubmit = () => {};
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        border: "2px solid red",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          border: "2px solid blue",
        }}
      >
        <input placeholder="email" type="text" />
        <input placeholder="password" type="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
