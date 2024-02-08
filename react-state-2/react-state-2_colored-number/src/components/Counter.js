import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(number + 1);
  }
  function handleDecrement() {
    setNumber(number - 1);
  }
  console.log(number);
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={number} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}
