import React from "react";
import ReactDOM from "react-dom";
import Album from "./Album";

function App() {
  return (
    <div className="App">
      <Album/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
