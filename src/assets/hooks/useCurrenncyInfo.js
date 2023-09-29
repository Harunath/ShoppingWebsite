import { useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  ).then((response) => {
    console.log(response.json());
  });
  return data;
}
