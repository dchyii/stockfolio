import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddToPortfolio from "./AddToPortfolio";
import ConfirmRemove from "./ConfirmRemove";
import SearchBar from "./SearchBar";
import WatchlistTable from "./WatchlistTable";

function Watchlist() {
  const [allData, setAllData] = useOutletContext();
  const [state, setState] = useState("displayWatchlist");

  const watchlistStocks = allData.watchlist;
  const prevClosePrices = allData.prevClosePrices;
  const date = allData.date;

  const [confirmRemove, setConfirmRemove] = useState({
    stock: "",
    list: "Watchlist",
  });

  const [addPortfolio, setAddPortfolio] = useState({
    stock: "",
    date: date,
  });

  const tableHeader = ["Name", "Open", "High", "Low", "Close", "Volume"];

  const watchlistData = watchlistStocks.map((item) => {
    const indexInPrevClosePrices = prevClosePrices?.findIndex((stock) => {
      return stock.T === item.symbol;
    });
    const prevClosePrice = prevClosePrices?.[indexInPrevClosePrices];
    return {
      ...item,
      open: prevClosePrice?.o,
      high: prevClosePrice?.h,
      low: prevClosePrice?.l,
      close: prevClosePrice?.c,
      volume: prevClosePrice?.v,
    };
  });

  console.log("watchlistData[1]", watchlistData[1]);

  const showAddToPortfolioScreen = (event) => {
    setAddPortfolio({
      ...addPortfolio,
      stock: watchlistData[event.target.id],
    });
    setState("addPortfolio");
  };

  const cancelAdd = () => {
    setAddPortfolio({
      ...addPortfolio,
      stock: "",
    });
    setState("displayWatchlist");
  };

  const addToPortfolio = (addStock) => {
    console.log("add to portfolio", addStock);
    setAllData({
      ...allData,
      portfolio: allData.portfolio.concat(addStock),
    });
    cancelAdd();
  };

  const showRemoveConfirmationScreen = (event) => {
    setConfirmRemove({
      ...confirmRemove,
      stock: watchlistStocks[event.target.id],
    });
    setState("removeConfirmation");
  };

  const cancelRemove = () => {
    setConfirmRemove({
      ...confirmRemove,
      stock: "",
    });
    setState("displayWatchlist");
  };

  const removeFromWatchlist = (removedStock) => {
    setAllData({
      ...allData,
      watchlist: allData.watchlist.filter((stock) => {
        return stock.symbol !== removedStock;
      }),
    });
    cancelRemove();
  };

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
  if (state === "removeConfirmation") {
    return (
      <ConfirmRemove
        info={confirmRemove.stock}
        list={confirmRemove.list}
        fnCancel={cancelRemove}
        fnRemove={removeFromWatchlist}
      />
    );
  }

  return (
    <div>
      <SearchBar />
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">
        Watchlist
      </h2>
      <WatchlistTable
        header={tableHeader}
        data={watchlistData}
        fnShowRemoveConfirmationScreen={showRemoveConfirmationScreen}
        fnShowAddToPortfolioScreen={showAddToPortfolioScreen}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
    </div>
  );
}

export default Watchlist;
