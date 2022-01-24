import { useOutletContext } from "react-router-dom";
import SearchBar from "./SearchBar";
import Table from "./Table";

function Watchlist() {
  const allData = useOutletContext();

  const watchlistStocks = allData.watchlist;
  const prevClosePrices = allData.prevClosePrices?.data;
  const date = allData.prevClosePrices.date;

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

  const tableHeader = ["Name", "Open", "High", "Low", "Close", "Volume"];

  return (
    <div>
      <SearchBar />
      <Table header={tableHeader} data={watchlistData} />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
    </div>
  );
}

export default Watchlist;
