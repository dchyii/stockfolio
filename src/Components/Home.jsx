import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import dayjs from "dayjs";
import watchlistStocks from "../Data/watchlistStocks";
import portfolioStocks from "../Data/portfolioStocks";
import LoadScreen from "./LoadScreen";
import ErrorScreen from "./ErrorScreen";

const KEY = process.env.REACT_APP_APIKEY;

function Home() {
  const [allData, setAllData] = useState({
    date: dayjs(),
    prevClosePrices: [],
    watchlist: watchlistStocks,
    portfolio: portfolioStocks,
  });

  const [loadStatus, setLoadStatus] = useState("loading");

  // console.log("allData", allData);

  let fetchDate = dayjs();
  // console.log("dayjs", fetchDate.get("day"));

  const fetchPriceData = () => {
    setLoadStatus("loading");
    if (fetchDate.get("day") === 0 || fetchDate.get("day") === 6) {
      console.log("dont fetch", fetchDate.format("YYYY-MM-DD"));
      fetchDate = fetchDate.subtract(1, "day");
      fetchPriceData();
    } else {
      //! vvv uncomment on production vvv !//
      let formattedFetchDate = fetchDate
        .subtract(1, "day")
        .format("YYYY-MM-DD");
      let urlPreviousDayClose = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${formattedFetchDate}?adjusted=true&apiKey=${KEY}`;
      console.log("fetching price data", formattedFetchDate);
      fetch(urlPreviousDayClose)
        .then((response) => {
          if (!response.ok) {
            return;
          }
          console.log("processing price data");
          return response.json();
        })
        .then((data) => {
          if (data.queryCount === 0) {
            console.log("zero data");
            fetchDate = fetchDate.subtract(1, "day");
            fetchPriceData();
          } else {
            console.log("price data fetched");
            setAllData({
              ...allData,
              date: fetchDate,
              prevClosePrices: data.results,
            });
            setLoadStatus("loaded");
          }
        })
        .catch((error) => {
          setLoadStatus("error");
          console.error("error", error);
        });
      //! ^^^ uncomment on production ^^^ !//
      //! vvv delete on production vvv !//
      // console.log("simulated data");
      // setAllData({
      //   ...allData,
      //   date: fetchDate,
      //   prevClosePrices: allPriceData,
      // });
      //! ^^^ delete on production ^^^ !//
    }
  };

  useEffect(fetchPriceData, []);

  if (loadStatus === "loading") {
    return (
      <div className="h-full w-full">
        <LoadScreen />
      </div>
    );
  }

  if (loadStatus === "error") {
    return (
      <div className="h-full w-full">
        <ErrorScreen />
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-scroll">
      <Outlet context={[allData, setAllData]} />
    </div>
  );
}

export default Home;
