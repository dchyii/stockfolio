import { useState } from "react";
import SearchBar from "./SearchBar";
import { Outlet, useOutletContext } from "react-router-dom";
import PortfolioTable from "./PortfolioTable";
import ConfirmRemove from "./ConfirmRemove";
import AmendPortfolio from "./AmendPortfolio";

function Portfolio() {
  const [allData, setAllData] = useOutletContext();
  const [confirmRemove, setConfirmRemove] = useState({
    display: false,
    stock: "",
    list: "Portfolio",
  });
  const [amend, setAmend] = useState({
    display: false,
    stock: "",
    index: -1,
  });

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

  const showRemoveConfirmationScreen = (event) => {
    setConfirmRemove({
      ...confirmRemove,
      display: true,
      stock: portfolioData[event.target.id],
    });
  };

  const cancel = () => {
    setConfirmRemove({
      ...confirmRemove,
      display: false,
      stock: "",
    });
  };

  const removeFromPortfolio = (removedStock) => {
    setAllData({
      ...allData,
      portfolio: allData.portfolio.filter((stock) => {
        return stock.symbol !== removedStock;
      }),
    });
    setConfirmRemove({
      ...confirmRemove,
      display: false,
      stock: "",
    });
  };

  const showAmendScreen = (event) => {
    setAmend({
      ...amend,
      display: true,
      stock: portfolioData[event.target.id],
      index: event.target.id,
    });
  };

  const cancelAmend = () => {
    setAmend({
      ...amend,
      display: false,
      stock: "",
      index: -1,
    });
  };

  const amendPortfolio = (amendedData) => {
    const updatedPortfolio = allData.portfolio;
    updatedPortfolio[amendedData.index] = amendedData.data;

    console.log("updated portfolio", updatedPortfolio);
    setAllData({
      ...allData,
      portfolio: updatedPortfolio,
    });
    cancelAmend();
  };

  return (
    <div>
      <SearchBar />
      <PortfolioTable
        header={tableHeader}
        data={portfolioData}
        fnShowRemoveConfirmationScreen={showRemoveConfirmationScreen}
        fnShowAmendScreen={showAmendScreen}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
      <ConfirmRemove
        display={confirmRemove.display}
        info={confirmRemove.stock}
        list={confirmRemove.list}
        fnCancel={cancel}
        fnRemove={removeFromPortfolio}
      />
      <AmendPortfolio
        display={amend.display}
        info={amend.stock}
        index={amend.index}
        fnCancel={cancelAmend}
        fnAmend={amendPortfolio}
      />
    </div>
  );
}

export default Portfolio;
