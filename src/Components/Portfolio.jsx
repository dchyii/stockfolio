import portfolioStockData from "../Data/portfolioStockData";
import portfolioDividendData from "../Data/portfolioDividendData";
import SearchBar from "./SearchBar";

function Portfolio() {
  console.log("stock data", portfolioStockData);
  console.log("dividend data", portfolioDividendData);
  return (
    <>
      <h2>Hello Portfolio</h2>
      <SearchBar />
    </>
  );
}

export default Portfolio;
