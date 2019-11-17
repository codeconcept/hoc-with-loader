import React from "react";
import "./App.css";
import Message from "./Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="" fromAPI="true" />
      </header>
    </div>
  );
}

export default App;
