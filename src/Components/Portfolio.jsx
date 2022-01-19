import portfolioStockData from "../Data/portfolioStockData";
import portfolioDividendData from "../Data/portfolioDividendData";
import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";

function Portfolio() {
  console.log("stock data", portfolioStockData);
  console.log("dividend data", portfolioDividendData);
  return (
    <>
      <h2>Hello Portfolio</h2>
      <SearchBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Portfolio;
