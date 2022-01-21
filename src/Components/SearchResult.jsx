import { data } from "autoprefixer";
import { useEffect, useState, useReducer } from "react";
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

  const fnReducer = (stock, action) => {
    switch (action.type) {
      case "UPDATE_TICKER_DETAILS":
        return { ...stock, tickerDetails: action.fetchedData };
      case "UPDATE_TICKER_PRICE":
        return { ...stock, tickerPrice: action.fetchedData };
      case "UPDATE_TICKER_NEWS":
        return { ...stock, tickerNews: action.fetchedData };
      default:
        return stock;
    }
  };

  const [stock, dispatch] = useReducer(fnReducer, {
    tickerDetails: searchResultData.results,
    tickerPrice: searchResultPrice,
    tickerNews: newsData.results,
  });

  //! to uncomment in production
  const fetchTickerDetails = () => {
    console.log("fetching ticker details");
    fetch(urlTickerDetails)
      .then((response) => {
        console.log("processing details");
        return response.json();
      })
      .then((data) => {
        console.log("ticker details fetched");
        const fetchedData = data.results;
        dispatch({ type: "UPDATE_TICKER_DETAILS", fetchedData: fetchedData });
      });
  };

  const fetchTickerPrice = () => {
    console.log("fetching price");
    fetch(urlTickerPrice)
      .then((response) => {
        console.log("processing price");
        return response.json();
      })
      .then((data) => {
        console.log("ticker price fetched");
        const fetchedData = data;
        dispatch({ type: "UPDATE_TICKER_PRICE", fetchedData: fetchedData });
      });
  };

  const fetchTickerNews = () => {
    console.log("fetching ticker news");
    fetch(urlTickerNews)
      .then((response) => {
        console.log("processing news");
        return response.json();
      })
      .then((data) => {
        console.log("ticker news fetched");
        const fetchedData = data.results;
        dispatch({ type: "UPDATE_TICKER_NEWS", fetchedData: fetchedData });
      });
  };

  const fetchAllTickerInfo = () => {
    fetchTickerDetails();
    fetchTickerPrice();
    fetchTickerNews();
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
