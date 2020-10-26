import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

function CounterHooks({ intialCount }) {
  const [count, setState] = useState(intialCount);
  const style = useContext(ThemeContext);
  function changeCounter(amount) {
    setState((prev) => prev + amount);
  }

  return (
    <div>
      <button style={style} onClick={() => changeCounter(-1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => changeCounter(1)}>
        +
      </button>
    </div>
  );
}

export default CounterHooks;
