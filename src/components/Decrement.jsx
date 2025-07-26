import React from "react";
import { useDispatch } from "react-redux";
import { decrement, reset } from "../store/counterSlice";

const Decrement = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is Decrement Page</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Decrement;
