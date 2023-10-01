import { useEffect, useState } from "react";
import useCurrencyInfo from "../hooks/useCurrenncyInfo";
import CurrencyBox from "./CurrencyBox";

function CurrencyConvertor() {
  const [fromCurrency, setFromCurrenncy] = useState("usd");
  const [fromAmount, setFromAmount] = useState(0);
  const [toCurrency, setToCurrenncy] = useState("inr");
  const [toAmount, setToAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(fromCurrency)
  const options = Object.keys(currencyInfo)
  
  useEffect(()=>{
    setToAmount(() => {
      if(fromCurrency == toCurrency) return(fromAmount)
      else return(fromAmount*currencyInfo[toCurrency])
    })
  },[fromAmount,toCurrency,currencyInfo,fromCurrency])

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-screen text-gray-500 bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="flex flex-col gap-4 p-4 m-auto rounded-xl bg-opacity-50 bg-white">
        <CurrencyBox type="From" setCurrency={(val)=> setFromCurrenncy(val)} amount={fromAmount} setAmount={(val)=>setFromAmount(val)} options={options} selected="usd"/>
        <CurrencyBox type="To" setCurrency={(val)=> setToCurrenncy(val)} amount={toAmount} setAmount={(val)=>setToAmount(val)} options={options} selected="inr"/>
        <div className="">
          <p>Convert</p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConvertor;
