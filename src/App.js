import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [delta, setDelta] = useState(1);
  function handlerDelta(e) {
    // console.log(setDelta(Number(e.target.value)));
    setDelta(Number(e.target.value));
  }
  const [maxNumber, setMaxNumber] = useState(10);
  function handlerMaxNumber(e) {
    setMaxNumber(Number(e.target.value));
  }
  return (
    <div className="App">
      <label>Maximum Number: </label>
      <input type="number" value={maxNumber} onChange={handlerMaxNumber} />
      <br />
      <label>Your Number: </label>
      <input type="number" value={delta} onChange={handlerDelta} />
      <Counter delta={delta} maxNum={maxNumber} />
      {/* <Counter delta={delta} /> */}
    </div>
  );
}

export default App;
