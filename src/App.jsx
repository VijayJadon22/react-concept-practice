import React from "react";
import DebouncedSearchBar from "./components/DebouncedSearchBar";
import ThrottledButton from "./components/ThrottledButton";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { useThemeContext } from "./context/ThemeContext";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import { useSelector } from "react-redux";

export default function App() {
  const { theme } = useThemeContext();
  const { value: count } = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div>
      {/* <DebouncedSearchBar /> */}
      {/* <ThrottledButton /> */}

      {/*  */}

      {/* <ComponentA />
      <div>Theme is: {theme}</div>
      <ComponentB /> */}

      {/*  */}

      <Increment />
      <h1>Count is: {count}</h1>
      <Decrement />
    </div>
  );
}
