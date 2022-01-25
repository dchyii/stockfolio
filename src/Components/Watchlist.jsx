import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import ConfirmRemove from "./ConfirmRemove";
import SearchBar from "./SearchBar";
import WatchlistTable from "./WatchlistTable";

function Watchlist() {
  const [allData, setAllData] = useOutletContext();
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

  const showRemoveConfirmationScreen = (event) => {
    setConfirmRemove({
      ...confirmRemove,
      display: true,
      stock: watchlistStocks[event.target.id],
    });
  };

  const cancel = () => {
    setConfirmRemove({
      ...confirmRemove,
      display: false,
      stock: "",
    });
  };

  const removeFromWatchlist = (removedStock) => {
    setAllData({
      ...allData,
      watchlist: allData.watchlist.filter((stock) => {
        return stock.symbol !== removedStock;
      }),
    });
    setConfirmRemove({
      ...confirmRemove,
      display: false,
      stock: "",
    });
  };

  return (
    <div>
      <SearchBar />
      <WatchlistTable
        header={tableHeader}
        data={watchlistData}
        fnShowRemoveConfirmationScreen={showRemoveConfirmationScreen}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
      <ConfirmRemove
        display={confirmRemove.display}
        info={confirmRemove.stock}
        list={confirmRemove.list}
        s
        fnCancel={cancel}
        fnRemove={removeFromWatchlist}
      />
    </div>
  );
}

export default Watchlist;
