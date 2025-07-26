import React from "react";

function debounced(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay * 1000);
  };
}

export default function DebouncedSearchBar() {
  const searchFunction = (e) => {
    const query = e.target.value;
    console.log(query);

    fetch(`https://example.com/query=${query}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>This is HomePage</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={debounced(searchFunction, 2)}
        // onChange={searchFunction}
      />
    </div>
  );
}
