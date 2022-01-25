import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import AddToPortfolio from "./AddToPortfolio";
import ConfirmRemove from "./ConfirmRemove";
import SearchBar from "./SearchBar";
import WatchlistTable from "./WatchlistTable";

function Watchlist() {
  const [allData, setAllData] = useOutletContext();

  console.log("all data", allData);

  const watchlistStocks = allData.watchlist;
  const prevClosePrices = allData.prevClosePrices;
  const date = allData.date;

  const [confirmRemove, setConfirmRemove] = useState({
    display: false,
    stock: "",
    list: "Watchlist",
  });
  const [addPortfolio, setAddPortfolio] = useState({
    display: false,
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

  const showAddToPortfolioScreen = (event) => {
    setAddPortfolio({
      ...addPortfolio,
      display: true,
      stock: watchlistData[event.target.id],
    });
  };

  const cancelAdd = () => {
    setAddPortfolio({
      ...addPortfolio,
      display: false,
      stock: "",
    });
  };

  const addToPortfolio = (addStock) => {
    console.log("add to portfolio", addStock);
    setAllData({
      ...allData,
      portfolio: allData.portfolio.concat(addStock),
    });
    setAddPortfolio({
      ...addPortfolio,
      display: false,
      stock: "",
    });
  };

  const showRemoveConfirmationScreen = (event) => {
    setConfirmRemove({
      ...confirmRemove,
      display: true,
      stock: watchlistStocks[event.target.id],
    });
  };

  const cancelRemove = () => {
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
        fnShowAddToPortfolioScreen={showAddToPortfolioScreen}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
      <AddToPortfolio
        display={addPortfolio.display}
        info={addPortfolio.stock}
        date={addPortfolio.date}
        fnCancel={cancelAdd}
        fnAdd={addToPortfolio}
      />
      <ConfirmRemove
        display={confirmRemove.display}
        info={confirmRemove.stock}
        list={confirmRemove.list}
        fnCancel={cancelRemove}
        fnRemove={removeFromWatchlist}
      />
    </div>
  );
}

export default Watchlist;
