import { useState } from "react";
import HomeChild1 from "./HomeChild1";
import { HomeContext } from "../context/HomeContext";

const Home = () => {
  const [name, setName] = useState("Durgesh");
  const fn = () => {};
  return (
    <HomeContext.Provider value={{ name: name, setName: setName }}>
      <div className="border-2 border-amber-900 p-6">
        <p>I am a Home Component</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <HomeChild1 />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
