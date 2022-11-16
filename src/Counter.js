import React, { useState } from "react";
import "./App.css";
import reset from "./reset.png";
import add from "./add.png";
import minus from "./minus.png";

const Counter = () => {
  let [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }
  function minusOne() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount((count = 0));
  }
  return (
    <div>
      <h1>Counter App</h1>
      <p>The counter is at: </p>
      <h2>{count}</h2>
      <div id="btns">
        <button onClick={minusOne} title="Less one">
          <img id="minus-btn" src={minus} alt="add button" />
        </button>
        <button onClick={resetCount} title="Reset counter">
          <img id="reset-btn" src={reset} alt="reset button" />
        </button>
        <button onClick={addOne} title="Add one">
          {" "}
          <img id="adding-btn" src={add} alt="add button" />
        </button>
      </div>
    </div>
  );
};

export default Counter;
