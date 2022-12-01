import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [delta, setDelta] = useState(1);
  const [maxNumber, setMaxNumber] = useState(10);
  const [reset, setRset] = useState(false);
  const [maxNumberEnter, setMaxNumberEnter] = useState(0);

  function handlerDelta(e) {
    setDelta(Number(e.target.value));
  }
  function handlerMaxNumber(e) {
    setMaxNumber(Number(e.target.value));
  }

  function getReset(data) {
    console.log(data);
    setRset(data);
  }

  function setMaximumNumber(val) {
    if (val > maxNumberEnter) {
      setMaxNumberEnter(val);
    }
  }

  return (
    <div className="App">
      <label>Maximum Number To Count: </label>
      <input type="number" value={maxNumber} onChange={handlerMaxNumber} />
      <br />

      <label>Your Number: </label>
      <input type="number" value={delta} onChange={handlerDelta} />
      <div id="stck">
        <p classname="txt1">Maximum Number Added:</p>
        <p classname="txt1" id="dv">
          {maxNumberEnter}
        </p>
      </div>
      <Counter
        delta={delta}
        maxNum={maxNumber}
        getReset={getReset}
        needToReset={reset}
        setMaximumNumber={setMaximumNumber}
      />
      <Counter
        delta={delta}
        maxNum={maxNumber}
        getReset={getReset}
        needToReset={reset}
        setMaximumNumber={setMaximumNumber}
      />
    </div>
  );
}

export default App;
