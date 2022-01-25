import portfolioStockData from "../Data/portfolioStockData";
import portfolioDividendData from "../Data/portfolioDividendData";
import SearchBar from "./SearchBar";
import { Outlet, useOutletContext } from "react-router-dom";
import PortfolioTable from "./PortfolioTable";

function Portfolio() {
  const allData = useOutletContext();

  const portfolioStocks = allData.portfolio;
  const prevClosePrices = allData.prevClosePrices;
  const date = allData.date;

  const tableHeader = [
    "Name",
    "Purchase Units",
    "Purchase Price",
    "Current Price",
    "Total Dividends",
    "Total P/L",
  ];

  const portfolioData = portfolioStocks.map((item) => {
    const indexInPrevClosePrices = prevClosePrices?.findIndex((stock) => {
      return stock.T === item.symbol;
    });
    const prevClosePrice = prevClosePrices?.[indexInPrevClosePrices];
    return {
      ...item,
      close: prevClosePrice?.c,
    };
  });

  console.log("pf", portfolioData);

  return (
    <div>
      <SearchBar />
      <PortfolioTable header={tableHeader} data={portfolioData} />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
    </div>
  );
}

export default Portfolio;
