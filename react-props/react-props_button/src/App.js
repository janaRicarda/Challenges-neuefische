import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="blue" disabled={false} text="Click me" />
      <Button color="hotpink" text="more Infos" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      disabled={disabled}
      style={{
        width: "100px",
        height: "50px",
        color: color,
      }}
    >
      {text}
    </button>
  );
}
