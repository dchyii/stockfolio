import { useState } from "react";
import SearchBar from "./SearchBar";
import { Outlet, useOutletContext } from "react-router-dom";
import PortfolioTable from "./PortfolioTable";
import ConfirmRemove from "./ConfirmRemove";
import AmendPortfolio from "./AmendPortfolio";

function Portfolio() {
  const [allData, setAllData] = useOutletContext();
  const [state, setState] = useState("displayPortfolio");

  const [confirmRemove, setConfirmRemove] = useState({
    stock: "",
    list: "Portfolio",
  });
  const [amend, setAmend] = useState({
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
      stock: portfolioData[event.target.id],
    });
    setState("removeConfirmation");
  };

  const cancel = () => {
    setConfirmRemove({
      ...confirmRemove,
      stock: "",
    });
    setState("displayPortfolio");
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
      stock: "",
    });
    setState("displayPortfolio");
  };

  const showAmendScreen = (event) => {
    setAmend({
      ...amend,
      stock: portfolioData[event.target.id],
      index: event.target.id,
    });
    setState("amendPortfolio");
  };

  const cancelAmend = () => {
    setAmend({
      ...amend,
      stock: "",
      index: -1,
    });
    setState("displayPortfolio");
  };

  const amendPortfolio = (amendedData) => {
    const updatedPortfolio = allData.portfolio;
    updatedPortfolio[amendedData.index] = amendedData.data;

    setAllData({
      ...allData,
      portfolio: updatedPortfolio,
    });
    cancelAmend();
  };

  if (state === "removeConfirmation") {
    return (
      <ConfirmRemove
        display={confirmRemove.display}
        info={confirmRemove.stock}
        list={confirmRemove.list}
        fnCancel={cancel}
        fnRemove={removeFromPortfolio}
      />
    );
  }

  if (state === "amendPortfolio") {
    return (
      <AmendPortfolio
        display={amend.display}
        info={amend.stock}
        index={amend.index}
        fnCancel={cancelAmend}
        fnAmend={amendPortfolio}
      />
    );
  }

  return (
    <div>
      <SearchBar />
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">
        Portfolio
      </h2>
      <PortfolioTable
        header={tableHeader}
        data={portfolioData}
        fnShowRemoveConfirmationScreen={showRemoveConfirmationScreen}
        fnShowAmendScreen={showAmendScreen}
      />
      <p>Prices updated on {date?.format("DD MMM YYYY")}</p>
    </div>
  );
}

export default Portfolio;
