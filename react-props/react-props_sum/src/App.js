import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={2} valueB={4} />
      <Sum valueA={5} valueB={7} />
      <Sum valueA={20} valueB={59} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
