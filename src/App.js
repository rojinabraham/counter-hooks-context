import Count from "./Count";
import CounterHooks from "./Counter-Hooks";
import React, { useState } from "react";
export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState("red");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Class Counter
      <Count intialCount={0} />
      Hooks Counter
      <CounterHooks intialCount={0} />
      <button
        onClick={() => {
          setTheme((prev) => {
            return prev === "red" ? "blue" : "red";
          });
        }}
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
