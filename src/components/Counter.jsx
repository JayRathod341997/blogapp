import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <p>The current value is {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
