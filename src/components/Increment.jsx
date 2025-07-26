import React from "react";
import { useDispatch } from "react-redux";
import { increment, multiply } from "../store/counterSlice";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is Increment Page</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(multiply(4))}>Multiply</button>
    </div>
  );
};

export default Increment;
