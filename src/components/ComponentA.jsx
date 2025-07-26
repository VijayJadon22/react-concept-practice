import React from "react";
import { useThemeContext } from "../context/ThemeContext";

const ComponentA = () => {
  const { setTheme } = useThemeContext();
  return (
    <div>
      <h1>This is ComponentA</h1>
      <button onClick={() => setTheme("red")}>Red Theme</button>
      <button onClick={() => setTheme("yellow")}>Yellow Theme</button>
    </div>
  );
};

export default ComponentA;
