
import html from "./image/html.png"
import css from "./image/css.png"
import js from "./image/js.png"
import react from "./image/react.png"
import React from "react";

function App() {
  return (
    <div className="">
      <div>
        <h3 className="">Front End Technologies</h3>
      </div>
      <div>
        <img src={html} width="200" height="200" />
        <img src={css} width="200" height="200" />
        <img src={js} width="200" height="200" />
        <img src={react} width="200" height="200" />
      </div>
    </div>
  );
}

export default App;
