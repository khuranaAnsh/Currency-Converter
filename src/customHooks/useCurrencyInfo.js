// !Custom Hooks can also use built in hooks because at the end hooks are like functions so it can use built-in functions

// ! In this project we'll use API(Messenger)
// !API=> If two websites,servers,applications etc. or different programming languages want to talk to each other then two things are required: 1. Protocol 2. Data
// ! So API resolves major two main tasks first is communication and second is data
// ! And API provides documentation, which tells us how and what data to request
// ! So in API it's just that we have to follow protocol how to arrange or structure data and then whosever requests data , fulfill its request of data.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // we have used useState hook here because data which is coming from API should make changes in UI
  // so if we store data in some variable it does not modify UI.
  // So we have passed empty object in useState as a default so if data will not come from API it'll not throw error.
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo; //so we are returning whole method here
