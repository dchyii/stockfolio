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

function SearchResult() {
  const { symbolCaseInsensitive } = useParams();
  const symbol = symbolCaseInsensitive?.toUpperCase();
  const [allData, setAllData] = useOutletContext();
  const prevClosePrices = allData.prevClosePrices;
  const [state, setState] = useState("displayResults");
  // const [loadStatus, setLoadStatus] = useState({
  //   details: "loading",
  //   news: "loading",
  // });

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
          if (!response.ok) {
            return;
          }
          console.log("processing details");
          return response.json();
        })
        .then((data) => {
          console.log("ticker details fetched");
          const fetchedData = data.results;
          dispatch({ type: "UPDATE_TICKER_DETAILS", fetchedData: fetchedData });
          dispatchLoadStatus({ type: "DETAILS_LOADED" });
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
          if (!response.ok) {
            return;
          }
          console.log("processing news");
          return response.json();
        })
        .then((data) => {
          console.log("ticker news fetched");
          const fetchedData = data.results;
          dispatch({ type: "UPDATE_TICKER_NEWS", fetchedData: fetchedData });
          dispatchLoadStatus({ type: "NEWS_LOADED" });
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
    console.log("add to portfolio screen");
    setState("addPortfolio");
  };

  const cancelAdd = () => {
    console.log("cancel add to portfolio");
    setState("displayResults");
  };

  const addToPortfolio = (addStock) => {
    console.log("add to portfolio", addStock);
    setAllData({
      ...allData,
      portfolio: allData.portfolio.concat(addStock),
    });
    cancelAdd();
  };

  const addToWatchlist = (addWatch) => {
    console.log("add to watchlist", addWatch);
    if (
      allData.watchlist.findIndex(
        (watchlistItem) => watchlistItem.symbol === addWatch.symbol
      ) === -1
    ) {
      console.log("here");
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
    console.log("cancel watchlist");
    setState("displayResults");
  };

  //! vvvvvvvvv render screens vvvvvvvvvvvvvv !//

  if (Object.values(loadStatus).includes("loading")) {
    return <LoadScreen />;
  }

  if (Object.values(loadStatus).includes("error")) {
    return <ErrorScreen />;
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
  console.log("ticker news", stock?.tickerNews);
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
    <>
      <div
        id="SearchResult"
        className="w-10/12 mx-auto py-2 flex justify-around gap-5"
      >
        <div id="StockInfo" className="w-2/3">
          <BigInfoCard data={stock} key={stock.tickerDetails.ticker} />
        </div>
        <div className="w-1/3 h-screen">
          <div>
            <button onClick={showAddToWatchlistScreen}>Add to Watchlist</button>
            <button onClick={showAddToPortfolioScreen}>Add to Portfolio</button>
          </div>
          <h2>Related News</h2>
          <div id="news" className="p-3 h-screen overflow-scroll">
            {newsCards}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
