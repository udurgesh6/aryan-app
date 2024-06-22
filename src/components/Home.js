import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const toProducts = () => {
    try {
      // api call
      navigate("/products");
    } catch (err) {
      console.log(err);
      navigate("/error");
    }
  };
  return (
    <div>
      <h1 className="font-bold text-3xl">This is my home component</h1>
      <button onClick={toProducts}>Navigate to Products</button>
    </div>
  );
};

export default Home;
