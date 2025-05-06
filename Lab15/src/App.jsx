import React, { useEffect, useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (paused) return;

      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  function restart() {
    setPaused((prev) => !prev);
  }



  const getColor = () => {
    if (count > 0) return "green";  
    if (count < 0) return "red";   
    return "black";                
  };




  return (
    <div className="buttons">
      <div className="buttons">
      <h1 style={{ color: getColor() }}>{count}</h1>
      <div className="btn">
        <button className="dec_btn" onClick={decrement}>-1</button>
        <button className="res_btn" onClick={reset}>Reset</button>
        <button className="inc_btn" onClick={increment}>+1</button>
        <button className="count_btn" onClick={restart}>Start Auto-Count</button>
        </div>
      </div>
    </div>
  );
};
