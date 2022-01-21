import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import newsData from "../Data/newsData";
import searchResultData from "../Data/searchResultData";
import searchResultPrice from "../Data/searchResultPrice";
import BigInfoCard from "./BigInfoCard";
import NewsCard from "./NewsCard";

function SearchResult() {
  const KEY = process.env.REACT_APP_APIKEY;
  const { symbol } = useParams();
  const urlTickerDetails = `https://api.polygon.io/v3/reference/tickers/${symbol.toUpperCase()}?apiKey=${KEY}`;
  const urlTickerPrice = `https://api.polygon.io/v2/aggs/ticker/${symbol.toUpperCase()}/prev?adjusted=true&apiKey=${KEY}`;
  const urlTickerNews = `https://api.polygon.io/v2/reference/news?ticker=${symbol.toUpperCase()}&apiKey=${KEY}`;
  const [stock, setStock] = useState({
    tickerDetails: searchResultData.results,
    tickerPrice: searchResultPrice,
    tickerNews: newsData.results,
  });

  //! to uncomment in production
  const fetchTickerDetails = (stockInfo) => {
    console.log("fetching ticker details");
    fetch(urlTickerDetails)
      .then((response) => {
        console.log("processing details");
        return response.json();
      })
      .then((data) => {
        console.log("ticker details fetched");
        stockInfo.tickerDetails = data.results;
      });
  };

  const fetchTickerPrice = (stockInfo) => {
    console.log("fetching price");
    fetch(urlTickerPrice)
      .then((response) => {
        console.log("processing price");
        return response.json();
      })
      .then((data) => {
        console.log("ticker price fetched");
        stockInfo.tickerPrice = data;
      });
  };

  const fetchTickerNews = (stockInfo) => {
    console.log("fetching ticker news");
    fetch(urlTickerNews)
      .then((response) => {
        console.log("processing news");
        return response.json();
      })
      .then((data) => {
        console.log("ticker news fetched");
        stockInfo.tickerNews = data.results;
      });
  };

  const fetchAllTickerInfo = () => {
    const stockInfo = stock;
    fetchTickerDetails(stockInfo);
    fetchTickerPrice(stockInfo);
    fetchTickerNews(stockInfo);
    setStock(stockInfo);
  };

  return (
    <div
      id="SearchResult"
      className="w-10/12 mx-auto py-2 flex justify-around gap-5"
    >
      <button onClick={fetchAllTickerInfo}>fetch</button>
      {/* <div id="StockInfo" className="w-2/3">
        <BigInfoCard data={stock} />
      </div>
      <div id="news" className="w-1/3">
        <NewsCard />
      </div> */}
    </div>
  );
}

export default SearchResult;
