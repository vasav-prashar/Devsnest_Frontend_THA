import React from "react";
import ReactDOM from "react-dom";
import Button from "./App.jsx";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));