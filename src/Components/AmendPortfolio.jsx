import { useRef } from "react";

function AmendPortfolio(props) {
  const purchaseUnitsRef = useRef();
  const purchasePriceRef = useRef();
  const purchaseDateRef = useRef();
  const dividendsRef = useRef();
  const dividendDateRef = useRef();

  const amendData = () => {
    const amendedData = {
      index: props.index,
      data: {
        name: props?.info?.name,
        symbol: props?.info?.symbol,
        purchaseUnits: parseFloat(purchaseUnitsRef?.current?.value),
        purchasePrice: parseFloat(purchasePriceRef?.current?.value),
        purchaseDate: purchaseDateRef?.current?.value,
        dividendsTillDate: parseFloat(dividendsRef?.current?.value),
        lastDividendUpdateDate: dividendDateRef?.current?.value,
      },
    };
    console.log("amended data", amendedData);
    props.fnAmend(amendedData);
  };

  return (
    <div
      style={{ display: props.display ? "" : "none" }}
      //   style={{ display: "" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h2>Amend Portfolio</h2>
      <form>
        <div className="block w-4/5 text-left mx-auto">
          Name: {props.info.name}
        </div>
        <div className="block w-4/5 text-left mx-auto">
          Symbol: {props.info.symbol}
        </div>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Units:{"  "}
          <input
            type="number"
            id="purchaseUnits"
            defaultValue={props.info.purchaseUnits}
            className="text-right pr-3 w-1/2"
            ref={purchaseUnitsRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Price:{"  "}
          <input
            type="number"
            id="purchasePrice"
            defaultValue={props.info.purchasePrice}
            className="text-right pr-3 w-1/2"
            ref={purchasePriceRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Date:{"  "}
          <input
            type="date"
            id="purchaseDate"
            defaultValue={props.info.purchaseDate}
            className="text-right pr-3 w-1/2"
            ref={purchaseDateRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Total Dividends:{"  "}
          <input
            type="number"
            id="price"
            defaultValue={props.info.dividendsTillDate}
            className="text-right pr-3 w-1/2"
            ref={dividendsRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Last Dividend Date:{"  "}
          <input
            type="date"
            id="lastDividendUpdateDate"
            defaultValue={props.info.lastDividendUpdateDate}
            className="text-right pr-3 w-1/2"
            ref={dividendDateRef}
          />
        </label>
      </form>
      <div id="buttons" className="flex justify-around">
        <button onClick={props.fnCancel}>Cancel</button>
        <button onClick={amendData} className="text-green-600">
          Update
        </button>
      </div>
    </div>
  );
}

export default AmendPortfolio;
