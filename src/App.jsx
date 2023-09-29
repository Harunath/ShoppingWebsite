import { useState } from "react";
import Counter from "./components/Counter";
import UseProps from "./components/UseProps";
import GeneratePassword from "./components/GeneratePassword";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  const [bg, setBg] = useState("bg-green-500");
  const arr = [
    "bg-yellow-500",
    "bg-purple-500",
    "bg-blue-500",
    "bg-gray-500",
    "bg-green-500",
  ];
  return (
    <div className="w-screen h-screen text-white bg-black">
      <p className="p-2">#Counter is using useState hook</p>
      <Counter />
      <p className="p-2">#Props</p>
      <UseProps
        text="This is props text"
        font="font-bold"
        color="text-gray-500"
      />
      <p className="p-2">*Change the color</p>
      <div className={`flex flex-col justify-end h-[200px] ${bg} rounded-xl`}>
        <div className="flex p-4 rounded-xl bg-neutral-700">
          {arr.map((el) => {
            const background = () => {
              setBg(el);
            };
            return (
              <div
                key={el}
                className={`w-full h-5 rounded-full border border-black ${el}`}
                onClick={background}
              ></div>
            );
          }, [])}
        </div>
      </div>
      <GeneratePassword />
      <p>*Currency convertor</p>
      <CurrencyConvertor />
    </div>
  );
}

export default App;
