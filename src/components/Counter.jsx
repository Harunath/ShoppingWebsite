import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  const decrement = () => {
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <div className="flex items-center w-fit p-2 space-x-2 rounded-xl bg-zinc-500">
      <button
        className="px-2 py-2 rounded-xl border-2 border-gray-700 hover:border-gray-500 text-gray-950 hover:text-gray-700 bg-slate-500 hover:bg-slate-300 transition duration-200"
        onClick={increment}
      >
        Increment
      </button>
      <div className="">
        <p>{counter}</p>
      </div>
      <button
        className="px-2 py-2 rounded-xl border-2 border-gray-700 hover:border-gray-500 text-gray-950 hover:text-gray-700 bg-slate-500 hover:bg-slate-300 transition duration-200"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
