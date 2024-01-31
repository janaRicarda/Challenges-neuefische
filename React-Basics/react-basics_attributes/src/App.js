import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Das ist eine Überschrift</h2>
      <label htmlFor="input">Hier den Namen eingeben</label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite"
      >
        Wikipedia
      </a>
    </article>
  );
}
