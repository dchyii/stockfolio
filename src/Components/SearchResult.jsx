import newsData from "../Data/newsData";
import searchResultData from "../Data/searchResultData";
import BigInfoCard from "./BigInfoCard";
import NewsCard from "./NewsCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SearchResult() {
  const key = process.env.REACT_APP_APIKEY;
  const { symbol } = useParams();
  const url = `https://api.polygon.io/v3/reference/tickers/${symbol.toUpperCase()}?apiKey=${key}`;
  const [stock, setStock] = useState(searchResultData.results);

  //! to uncomment in production
  // const fetchStockInfo = () => {
  //   console.log("fetching", url);
  //   fetch(url)
  //     .then((response) => {
  //       console.log("processing");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("api fetched");
  //       setStock(data.results);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // };

  // useEffect(fetchStockInfo, [url]);

  return (
    <div
      id="SearchResult"
      className="w-10/12 mx-auto py-2 flex justify-around gap-5"
    >
      <div id="StockInfo" className="w-2/3">
        <BigInfoCard data={stock} />
      </div>
      <div id="news" className="w-1/3">
        <NewsCard />
      </div>
    </div>
  );
}

export default SearchResult;
