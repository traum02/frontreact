import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightcoral",
          height: "100px",
          lineHeight: "100px",
        }}
      >
        <b>{count}</b>
      </div>
      <button
        style={{ backgroundColor: "lightblue", width: "50px", height: "30px" }}
        onClick={() => setCount(count + 1)}
      >
        +one
      </button>
      <button
        style={{ backgroundColor: "lightgreen", width: "50px", height: "30px" }}
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
      <br></br>
      <button
        style={{ backgroundColor: "red", width: "50px", height: "30px" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
