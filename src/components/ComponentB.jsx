import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const ComponentB = () => {
  const { setTheme } = useThemeContext();
  return (
    <div>
      <h1>This is ComponentB</h1>
      <button onClick={() => setTheme("white")}>Light Theme</button>
      <button onClick={() => setTheme("black")}>Dark Theme</button>
    </div>
  );
};

export default ComponentB;
