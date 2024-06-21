import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceolder.typicode.com/todos/1")
      .then((response) => {
        console.log(response);
        //
        //
        //
        //
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Done");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p>Status: {loading ? "Loading..." : "Done"}</p>
      <h1>Hello World</h1>
      <p>{post?.title}</p>
    </div>
  );
}

export default App;
