import { useRef, useState } from "react";
import dayjs from "dayjs";

function AddToPortfolio(props) {
  const purchasePriceRef = useRef();
  const purchaseUnitsRef = useRef();
  const purchaseDateRef = useRef();

  const submitNewStock = () => {
    const newStock = {
      name: props?.info?.name,
      symbol: props?.info?.symbol,
      purchasePrice: parseFloat(purchasePriceRef?.current?.value),
      purchaseUnits: parseFloat(purchaseUnitsRef?.current?.value),
      dividendsTillDate: 0,
      lastDividendUpdateDate: purchaseDateRef?.current?.value,
      purchaseDate: purchaseDateRef?.current?.value,
    };
    props.fnAdd(newStock);
  };

  return (
    <div
      style={{ display: props.display ? "" : "none" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h2>Add to Portfolio</h2>
      <form>
        <div className="block w-4/5 text-left mx-auto">
          Name: {props.info.name}
        </div>
        <div className="block w-4/5 text-left mx-auto">
          Symbol: {props.info.symbol}
        </div>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Price:{"  "}
          <input
            type="number"
            id="price"
            defaultValue={props.info.close}
            className="text-right pr-3 w-1/2"
            ref={purchasePriceRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Units:{"  "}
          <input
            type="number"
            id="units"
            defaultValue={0}
            className="text-right pr-3 w-1/2"
            ref={purchaseUnitsRef}
          />
        </label>
        <label className="block w-4/5 text-left mx-auto">
          Purchase Date:{"  "}
          <input
            type="date"
            id="units"
            defaultValue={props.date.format("YYYY-MM-DD")}
            className="text-right pr-3 w-1/2"
            ref={purchaseDateRef}
          />
        </label>
      </form>
      <div id="buttons" className="flex justify-around">
        <button onClick={props.fnCancel}>Cancel</button>
        <button className="text-green-600" onClick={submitNewStock}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToPortfolio;
