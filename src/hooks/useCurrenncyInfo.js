import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(()=>{
    console.log("hook call")
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    ).then((response) => {
      console.log(response.headers)
      return(response.json())
    }).then((response)=>{
      console.log(response[`${currency}`])
      setData(response[`${currency}`])
    })
  },[currency])
  return data;
}
