import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import Info from "./Info";
import ArrayFunc from "./ArrayFunc";
import "bootstrap/dist/css/bootstrap.css";
import SimpleMenu from "./SimpleMenu";

function App() {
  return (
    <div className="App">
      <SimpleMenu></SimpleMenu>
      <Counter></Counter>
      <Info></Info>
      <ArrayFunc />
    </div>
  );
}

export default App;
