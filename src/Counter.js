import React, { useState, useEffect } from "react";
import "./App.css";
import reset from "./reset.png";
import add from "./add.png";
import minus from "./minus.png";

const Counter = (props) => {
  let [count, setCount] = useState(0);

  const delta = props.delta;
  const maximum = props.maxNum;
  const getReset = props.getReset;
  const needToReset = props.needToReset;
  const setMaximumNumber = props.setMaximumNumber;

  useEffect(() => {
    if (needToReset) {
      setCount(0);
      getReset(false);
    }
  }, [needToReset, getReset]);

  function addOne() {
    // document.getElementById("mns-btn").disabled = false;
    if (maximum < count + delta) {
      document.getElementById("alert-dv").innerHTML =
        "You can't pass the maximum sum! Try again!";
      setCount(0);
    } else {
      document.getElementById("alert-dv").innerHTML = "";
      setCount(count + delta);
      setMaximumNumber(count + delta);
    }
  }
  function minusOne() {
    document.getElementById("alert-dv").innerHTML = "";

    if (count - delta < 0) {
      setCount(0);
      // document.getElementById("mns-btn").disabled = true;
    } else {
      setCount(count - delta);
    }
  }
  function resetCount() {
    document.getElementById("alert-dv").innerHTML = "";
    getReset(true);
  }

  return (
    <div>
      <p>The counter is at: </p>
      <h2>{count}</h2>

      <div id="btns">
        <button id="mns-btn" onClick={minusOne} title="Less one">
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
      <div id="alert-dv"></div>
    </div>
  );
};

export default Counter;
