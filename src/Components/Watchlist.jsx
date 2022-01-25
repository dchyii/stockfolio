import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ConfirmRemove from "./ConfirmRemove";
import SearchBar from "./SearchBar";
import WatchlistTable from "./WatchlistTable";

function Watchlist() {
  const allData = useOutletContext();
  const [confirmRemove, setConfirmRemove] = useState({
    display: false,
    stock: "",
    list: "Watchlist",
  });

  const watchlistStocks = allData.watchlist;
  const prevClosePrices = allData.prevClosePrices;
  const date = allData.date;

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

  const removeFromWatchlist = (event) => {
    console.log("remove from watchlist", event.target.id);
    setConfirmRemove({
      ...confirmRemove,
      display: true,
      stock: watchlistStocks[event.target.id],
    });
  };

  return (
    <div>
      <SearchBar />
      <WatchlistTable
        header={tableHeader}
        data={watchlistData}
        fnRemoveFromWatchlist={removeFromWatchlist}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
      <ConfirmRemove
        display={confirmRemove.display}
        info={confirmRemove.stock}
        list={confirmRemove.list}
      />
    </div>
  );
}

export default Watchlist;
