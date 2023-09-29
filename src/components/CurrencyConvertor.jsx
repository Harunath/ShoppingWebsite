import { useState } from "react";
import useCurrencyInfo from "../assets/hooks/useCurrenncyInfo";

function CurrencyConvertor() {
  const [from, setFrom] = useState(0);
  const [fromCurrency, setFromCurrenncy] = useState("usd");
  const [to, setTo] = useState(0);
  const [toCurrency, setToCurrenncy] = useState("inr");
  console.log(useCurrencyInfo("usd"));
  const setToAmout = () => {
    setTo(() => from);
  };
  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen text-gray-500 bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="flex flex-col gap-4 p-4 m-auto rounded-xl bg-opacity-50 bg-white">
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-gray-200">
          <div className="flex justify-between px-4">
            <p>From</p>
            <p>Currency type</p>
          </div>
          <div className="flex justify-between gap-2 px-2">
            <input
              className="w-1/2 px-2 rounded-xl outline-none bg-blue-200"
              type="number"
              name="from"
              min={0}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <div className="flex justify-end w-1/2 rounded-xl">
              <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                name="currency"
              >
                <option value="inr">inr</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-gray-200">
          <div className="flex justify-between px-4">
            <p>To</p>
            <p>Currency type</p>
          </div>
          <div className="flex justify-between gap-2 px-2">
            <input
              className="w-1/2 px-2 rounded-xl outline-none bg-blue-200"
              type="number"
              name="from"
              min={0}
              value={to}
              onChange={(e) => setFrom(e.target.value)}
            />
            <div className="flex justify-end w-1/2 rounded-xl">
              <select
                className=" w-1/2 px-2 rounded-xl outline-none"
                name="currency"
              >
                <option value="inr">inr</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <p>Convert</p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
