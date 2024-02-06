import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //let count = 0;
  const [count, setCount] = useState(0);

  function handleMinusButton() {
    setCount(count - 1);
  }

  function handlePlusButton() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          /*onClick={() => {
            setCount(count - 1);
          }}*/
          onClick={handleMinusButton}
        >
          -
        </button>
        <button
          type="button"
          /* onClick={() => {
            console.log("🤔");
          }} */
          onClick={handlePlusButton}
        >
          +
        </button>
      </div>
    </div>
  );
}
