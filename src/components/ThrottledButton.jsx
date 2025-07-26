import React from "react";

const throttled = (func, delay) => {
    let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall > delay) {
      func(...args);
      lastCall = now;
    }
  };
};

const ThrottledButton = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      <h1>This is Throttled Button Page</h1>
      <button onClick={throttled(handleClick, 3000)}>Click Me</button>
    </div>
  );
};

export default ThrottledButton;
