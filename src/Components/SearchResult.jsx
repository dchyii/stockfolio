import { useEffect, useState, useReducer } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import newsData from "../Data/newsData";
import searchResultData from "../Data/searchResultData";
import searchResultPrice from "../Data/searchResultPrice";
import AddToPortfolio from "./AddToPortfolio";
import AddToWatchlist from "./AddToWatchlist";
import BigInfoCard from "./BigInfoCard";
import ErrorScreen from "./ErrorScreen";
import LoadScreen from "./LoadScreen";
import NewsCard from "./NewsCard";
import NoResults from "./NoResults";

function SearchResult() {
  const { symbolCaseInsensitive } = useParams();
  const symbol = symbolCaseInsensitive?.toUpperCase();
  const [allData, setAllData] = useOutletContext();
  const prevClosePrices = allData.prevClosePrices;
  const [state, setState] = useState("displayResults");

  //! vvv remove on production vvv !//
  // const stock = {
  //   tickerDetails: searchResultData.results,
  //   tickerPrice:
  //     prevClosePrices[prevClosePrices.findIndex((stock) => stock.T === symbol)],
  //   tickerNews: newsData.results,
  // };
  // console.log("stock", stock);
  //! ^^^ remove on production ^^^ !//

  //! vvv uncomment on production vvv !//
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
    tickerDetails: {
      name: "",
      ticker: symbol,
    },
    tickerPrice:
      prevClosePrices[prevClosePrices.findIndex((stock) => stock.T === symbol)],
    tickerNews: [],
  });

  const loadStatusReducer = (loadStatus, action) => {
    switch (action.type) {
      case "DETAILS_LOADING":
        return { ...loadStatus, details: "loading" };
      case "NEWS_LOADING":
        return { ...loadStatus, news: "loading" };
      case "DETAILS_LOADED":
        return { ...loadStatus, details: "loaded" };
      case "NEWS_LOADED":
        return { ...loadStatus, news: "loaded" };
      case "DETAILS_ERROR":
        return { ...loadStatus, details: "error" };
      case "NEWS_ERROR":
        return { ...loadStatus, news: "error" };
      case "DETAILS_NOT_FOUND":
        return { ...loadStatus, details: "notFound" };
      default:
        return loadStatus;
    }
  };

  const [loadStatus, dispatchLoadStatus] = useReducer(loadStatusReducer, {
    details: "error",
    news: "error",
  });
  //! ^^^ uncomment on production ^^^ !//

  const addPortfolio = {
    stock: {
      name: stock?.tickerDetails?.name,
      symbol: symbol,
      close: stock?.tickerPrice?.c,
    },
    date: allData.date,
  };

  const addWatchlist = {
    stock: {
      name: stock?.tickerDetails?.name,
      symbol: symbol,
    },
    index: allData.watchlist.findIndex(
      (watchlistItem) => watchlistItem.symbol === symbol
    ),
  };

  //! vvv uncomment on production vvv !//
  useEffect(() => {
    const KEY = process.env.REACT_APP_APIKEY;
    const urlTickerDetails = `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${KEY}`;
    const urlTickerNews = `https://api.polygon.io/v2/reference/news?ticker=${symbol}&apiKey=${KEY}`;

    const fetchTickerDetails = () => {
      dispatchLoadStatus({ type: "DETAILS_LOADING" });
      console.log("fetching ticker details");
      fetch(urlTickerDetails)
        .then((response) => {
          console.log("processing details");
          return response.json();
        })
        .then((data) => {
          console.log("ticker details fetched");
          if (data.status === "ERROR") {
            dispatchLoadStatus({ type: "DETAILS_ERROR" });
          }
          if (data.status === "NOT_FOUND") {
            dispatchLoadStatus({ type: "DETAILS_NOT_FOUND" });
          }
          if (data.status === "OK") {
            const fetchedData = data.results;
            dispatch({
              type: "UPDATE_TICKER_DETAILS",
              fetchedData: fetchedData,
            });
            dispatchLoadStatus({ type: "DETAILS_LOADED" });
          }
        })
        .catch((error) => {
          dispatchLoadStatus({ type: "DETAILS_ERROR" });
          console.error("error", error);
        });
    };

    const fetchTickerPrice = () => {
      dispatch({
        type: "UPDATE_TICKER_PRICE",
        fetchedData:
          prevClosePrices[
            prevClosePrices.findIndex((stock) => stock.T === symbol)
          ],
      });
    };

    const fetchTickerNews = () => {
      dispatchLoadStatus({ type: "NEWS_LOADING" });
      console.log("fetching ticker news");
      fetch(urlTickerNews)
        .then((response) => {
          console.log("processing news");
          return response.json();
        })
        .then((data) => {
          console.log("ticker news fetched");
          if (data.status === "ERROR") {
            dispatchLoadStatus({ type: "NEWS_ERROR" });
          }
          if (data.status === "OK") {
            const fetchedData = data.results;
            dispatch({ type: "UPDATE_TICKER_NEWS", fetchedData: fetchedData });
            dispatchLoadStatus({ type: "NEWS_LOADED" });
          }
        })
        .catch((error) => {
          dispatchLoadStatus({ type: "NEWS_ERROR" });
          console.error("error", error);
        });
    };

    fetchTickerDetails();
    fetchTickerPrice();
    fetchTickerNews();
  }, [symbol, prevClosePrices]);
  //! ^^^ uncomment on production ^^^ !//

  const showAddToPortfolioScreen = () => {
    setState("addPortfolio");
  };

  const cancelAdd = () => {
    setState("displayResults");
  };

  const addToPortfolio = (addStock) => {
    setAllData({
      ...allData,
      portfolio: allData.portfolio.concat(addStock),
    });
    cancelAdd();
  };

  const addToWatchlist = (addWatch) => {
    if (
      allData.watchlist.findIndex(
        (watchlistItem) => watchlistItem.symbol === addWatch.symbol
      ) === -1
    ) {
      setAllData({
        ...allData,
        watchlist: allData.watchlist.concat(addWatch),
      });
    }
  };

  const showAddToWatchlistScreen = () => {
    setState("addWatchlist");
    addToWatchlist(addWatchlist.stock);
  };

  const cancelWatch = () => {
    setState("displayResults");
  };

  //! vvvvvvvvv render screens vvvvvvvvvvvvvv !//

  if (Object.values(loadStatus).includes("loading")) {
    return <LoadScreen />;
  }

  if (Object.values(loadStatus).includes("error")) {
    return <ErrorScreen />;
  }

  if (Object.values(loadStatus).includes("notFound")) {
    return <NoResults />;
  }

  if (state === "addWatchlist") {
    return (
      <AddToWatchlist
        display={addWatchlist.display}
        info={addWatchlist.stock}
        index={addWatchlist.index}
        fnCancel={cancelWatch}
      />
    );
  }

  if (state === "addPortfolio") {
    return (
      <AddToPortfolio
        display={addPortfolio.display}
        info={addPortfolio.stock}
        date={addPortfolio.date}
        fnCancel={cancelAdd}
        fnAdd={addToPortfolio}
      />
    );
  }

  let newsCards = "";
  if (stock?.tickerNews.length > 0) {
    newsCards = stock.tickerNews.map((news) => {
      return <NewsCard data={news} key={news.id} />;
    });
  } else {
    return (
      <div>
        <h2>No Related News</h2>
      </div>
    );
  }

  return (
    <div
      id="SearchResult"
      className="w-10/12 mx-auto py-2 justify-around flex h-full"
    >
      <div className="w-8/12">
        <div id="StockInfo" className="p-2 h-5/6">
          <BigInfoCard data={stock} key={stock.tickerDetails.ticker} />
        </div>
        <div className="pb-3">
          <button
            onClick={showAddToWatchlistScreen}
            className="py-1 m-2 w-48 text-center text-slate-700 bg-slate-100 border-2 border-slate-300 hover:bg-orange-400 hover:font-extrabold hover:text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-2 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            Add to Watchlist
          </button>
          <button
            onClick={showAddToPortfolioScreen}
            className="py-1 m-2 w-48 text-center text-slate-700 bg-slate-100 border-2 border-slate-300 hover:bg-orange-400 hover:font-extrabold hover:text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Add to Portfolio
          </button>
        </div>
      </div>
      <div className="w-4/12">
        <h2 className="font-extrabold text-orange-400 text-xl p-1">
          Related News
        </h2>
        <div id="news" className="p-2 h-5/6 overflow-scroll">
          {newsCards}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
