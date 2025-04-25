import React, { useState, useEffect } from "react";

function Cycle() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("component did mount",counter);
  }, []);
  useEffect(() => {
    console.log("component did update");
  }, [counter]);
  useEffect(() => {
    return () => {
      console.log("component will update");
    };
  }, [counter]);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        incrementer
      </button>
      <p>{counter}</p>
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

export default Cycle;
