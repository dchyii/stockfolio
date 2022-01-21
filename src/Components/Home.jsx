import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

const KEY = process.env.REACT_APP_APIKEY;
const urlPreviousDayClose = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2022-01-20?adjusted=true&apiKey=${KEY}`;

function Home() {
  const [priceData, setPriceData] = useState(["test"]);

  const fetchPriceData = () => {
    console.log("fetching price data");
    // fetch(urlPreviousDayClose)
    //   .then((response) => {
    //     console.log("processing price data");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("price data fetched");
    //     setPriceData(data.results);
    //   });
  };

  useEffect(() => {
    fetchPriceData();
  }, []);

  return (
    <>
      <Outlet context={priceData} />
    </>
  );
}

export default Home;
