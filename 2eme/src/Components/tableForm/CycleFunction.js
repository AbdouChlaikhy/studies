import React, { useState, useEffect } from "react";

function CycleFunction() {
  const [counter, setCounter] = useState(0);
  useEffect(console.log("component did mount"), []);
  useEffect(console.log("component did update"), [counter]);
  useEffect(console.log("component will unmount"), []);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        incrementer
      </button>
      <p>{this.state.counter}</p>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        decrementer
      </button>
    </div>
  );
}

export default CycleFunction;
