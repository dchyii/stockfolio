import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import dayjs from "dayjs";
import allPriceData from "../Data/allPriceData";
import watchlistStocks from "../Data/watchlistStocks";
import SearchBar from "./SearchBar";

const KEY = process.env.REACT_APP_APIKEY;

function Home() {
  const [allData, setAllData] = useState({
    date: dayjs(),
    prevClosePrice: ["test"],
    watchlist: watchlistStocks,
  });

  console.log("watchlist", allData.watchlist);

  useEffect(() => {
    let fetchDate = dayjs();

    const fetchPriceData = () => {
      if (fetchDate.get("day") === 0 || fetchDate.get("day") === 6) {
        console.log("dont fetch", fetchDate.format("YYYY-MM-DD"));
        fetchDate = fetchDate.subtract(1, "day");
        fetchPriceData();
      } else {
        //! vvv uncomment on production vvv !//
        // let formattedFetchDate = fetchDate.format("YYYY-MM-DD");
        // let urlPreviousDayClose = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${formattedFetchDate}?adjusted=true&apiKey=${KEY}`;
        // console.log("fetching price data", formattedFetchDate);
        // fetch(urlPreviousDayClose)
        //   .then((response) => {
        //     console.log("processing price data");
        //     return response.json();
        //   })
        //   .then((data) => {
        //     if (data.queryCount === 0) {
        //       console.log("zero data");
        //       fetchDate = fetchDate.subtract(1, "day");
        //       fetchPriceData();
        //     } else {
        //       console.log("price data fetched");
        //       setAllData({
        //          ...allData,
        //          date: fetchDate,
        //          preClosePrice: data.results
        //          });
        //     }
        // });
        //! ^^^ uncomment on production ^^^ !//
        //! vvv delete on production vvv !//
        console.log("simulated data");
        setAllData({
          ...allData,
          date: fetchDate,
          prevClosePrice: allPriceData,
        });
        //! ^^^ delete on production ^^^ !//
      }
    };

    fetchPriceData();
  }, []);

  return (
    <>
      <Outlet context={allData} />
    </>
  );
}

export default Home;
