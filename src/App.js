import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    // do the job
  };

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
        onSubmit={onSubmit}
      >
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="age"
          type="number"
          value={age}
          onChange={(e) => {
            if (e.target.value > 100) {
              alert("Value can't be greater than 100 !");
            } else {
              setAge(e.target.value);
            }
          }}
          min={0}
          max={100}
        />
        <input type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
