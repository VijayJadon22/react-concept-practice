import React from "react";
import DebouncedSearchBar from "./components/DebouncedSearchBar";
import ThrottledButton from "./components/ThrottledButton";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { useThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme } = useThemeContext();
  return (
    <div>
      {/* <DebouncedSearchBar /> */}
      {/* <ThrottledButton /> */}
      <ComponentA />
      <div>Theme is: {theme}</div>
      <ComponentB />
    </div>
  );
}
