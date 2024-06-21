import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceolder.typicode.com/todos/1"
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    callApi();
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
