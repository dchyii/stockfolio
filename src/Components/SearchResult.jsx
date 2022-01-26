import { useEffect, useState, useReducer } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import newsData from "../Data/newsData";
import searchResultData from "../Data/searchResultData";
import searchResultPrice from "../Data/searchResultPrice";
import AddToPortfolio from "./AddToPortfolio";
import AddToWatchlist from "./AddToWatchlist";
import BigInfoCard from "./BigInfoCard";
import NewsCard from "./NewsCard";

function SearchResult() {
  const { symbol } = useParams();
  const [allData, setAllData] = useOutletContext();
  const prevClosePrices = allData.prevClosePrices;

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
  //! ^^^ uncomment on production ^^^ !//

  const [addPortfolio, setAddPortfolio] = useState({
    display: false,
    stock: {
      name: stock.tickerDetails.name,
      symbol: symbol,
      close: stock.tickerPrice?.c,
    },
    date: allData.date,
  });

  const [addWatchlist, setAddWatchlist] = useState({
    display: false,
    stock: {
      name: stock.tickerDetails.name,
      symbol: symbol,
    },
    index: allData.watchlist.findIndex(
      (watchlistItem) => watchlistItem.symbol === symbol
    ),
  });

  //! vvv uncomment on production vvv !//
  useEffect(() => {
    const KEY = process.env.REACT_APP_APIKEY;
    const urlTickerDetails = `https://api.polygon.io/v3/reference/tickers/${symbol.toUpperCase()}?apiKey=${KEY}`;
    // const urlTickerPrice = `https://api.polygon.io/v2/aggs/ticker/${symbol.toUpperCase()}/prev?adjusted=true&apiKey=${KEY}`;
    const urlTickerNews = `https://api.polygon.io/v2/reference/news?ticker=${symbol.toUpperCase()}&apiKey=${KEY}`;

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
          setAddWatchlist({
            ...addWatchlist,
            stock: {
              ...addWatchlist.stock,
              name: data.results.name,
            },
          });
          setAddPortfolio({
            ...addPortfolio,
            stock: {
              ...addPortfolio.stock,
              name: data.results.name,
            },
          });
        });
    };

    const fetchTickerPrice = () => {
      // console.log("fetching price");
      // fetch(urlTickerPrice)
      //   .then((response) => {
      //     console.log("processing price");
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log("ticker price fetched");
      //     const fetchedData = data.results[0];
      //     dispatch({ type: "UPDATE_TICKER_PRICE", fetchedData: fetchedData });
      //   });
      dispatch({
        type: "UPDATE_TICKER_PRICE",
        fetchedData:
          prevClosePrices[
            prevClosePrices.findIndex((stock) => stock.T === symbol)
          ],
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

    fetchTickerDetails();
    fetchTickerPrice();
    fetchTickerNews();
  }, [symbol, prevClosePrices]);
  //! ^^^ uncomment on production ^^^ !//

  let newsCards = "";
  if (stock.tickerNews.length === 0) {
    return (
      <div>
        <h2>No Related News</h2>
      </div>
    );
  } else {
    newsCards = stock.tickerNews.map((news) => {
      return <NewsCard data={news} key={news.id} />;
    });
  }

  const showAddToPortfolioScreen = () => {
    console.log("add to portfolio screen");
    setAddPortfolio({
      ...addPortfolio,
      display: true,
    });
  };

  const cancelAdd = () => {
    console.log("cancel add to portfolio");
    setAddPortfolio({
      ...addPortfolio,
      display: false,
    });
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
    setAddWatchlist({
      ...addWatchlist,
      display: true,
    });
    addToWatchlist(addWatchlist.stock);
  };

  const cancelWatch = () => {
    console.log("cancel watchlist");
    setAddWatchlist({
      ...addWatchlist,
      display: false,
    });
  };

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
      <AddToWatchlist
        display={addWatchlist.display}
        info={addWatchlist.stock}
        index={addWatchlist.index}
        fnCancel={cancelWatch}
      />
      <AddToPortfolio
        display={addPortfolio.display}
        info={addPortfolio.stock}
        date={addPortfolio.date}
        fnCancel={cancelAdd}
        fnAdd={addToPortfolio}
      />
    </>
  );
}

export default SearchResult;
