import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  let myObj = {
    name: "putku",
    age: 18,
  };

  let the_array = [1, 2, 3];

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-black text-white p-5 mb-4">Tailwind of Fotyy</h1>

      <Cards name="futyy" btnLetter = "click here 1"  para_text = "oooohohhoho 1" />

      <Cards name="buluu" btnLetter = "click here 2" para_text = "oooohohhoho 2" />
    </>
  );
}

export default App;
