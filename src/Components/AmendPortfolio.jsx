import { useRef } from "react";
import NumberFormat from "react-number-format";

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
    <div className="border-orange-400 border w-4/5 mx-auto">
      <h2>Amend Portfolio</h2>
      <table className="mx-auto w-full table-auto">
        <tbody>
          <tr>
            <td>Name: </td>
            <td>{props.info.name}</td>
          </tr>
          <tr>
            <td>Symbol: </td>
            <td>{props.info.symbol}</td>
          </tr>
          <tr>
            <td>Purchase Units: </td>
            <td>
              <input
                type="number"
                id="purchaseUnits"
                defaultValue={props.info.purchaseUnits}
                className="text-right pr-3 w-1/2"
                ref={purchaseUnitsRef}
              />
            </td>
          </tr>
          <tr>
            <td>Purchase Price ($): </td>
            <td>
              <input
                type="number"
                id="purchasePrice"
                defaultValue={props.info.purchasePrice}
                className="text-right pr-3 w-1/2"
                ref={purchasePriceRef}
              />
            </td>
          </tr>
          <tr>
            <td>Purchase Date: </td>
            <td>
              <input
                type="date"
                id="purchaseDate"
                defaultValue={props.info.purchaseDate}
                className="text-right pr-3 w-1/2"
                ref={purchaseDateRef}
              />
            </td>
          </tr>
          <tr>
            <td>Total Dividends ($): </td>
            <td>
              <input
                type="number"
                id="price"
                defaultValue={props.info.dividendsTillDate}
                className="text-right pr-3 w-1/2"
                ref={dividendsRef}
              />
            </td>
          </tr>
          <tr>
            <td>Last Dividend Date: </td>
            <td>
              <input
                type="date"
                id="lastDividendUpdateDate"
                defaultValue={props.info.lastDividendUpdateDate}
                className="text-right pr-3 w-1/2"
                ref={dividendDateRef}
              />
            </td>
          </tr>
        </tbody>
      </table>
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
