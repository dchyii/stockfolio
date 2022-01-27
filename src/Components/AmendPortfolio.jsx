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
    <div className="border-orange-400 border w-4/5 mx-auto mt-5 rounded-2xl shadow-lg bg-white">
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">
        Amend Portfolio
      </h2>
      <table className="mx-auto w-full table-auto">
        <tbody>
          <tr>
            <td className="w-1/2 text-right pr-3">Name: </td>
            <td className="w-1/2 text-left pl-3">{props.info.name}</td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Symbol: </td>
            <td className="w-1/2 text-left pl-3">{props.info.symbol}</td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Purchase Units: </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="number"
                id="purchaseUnits"
                defaultValue={props.info.purchaseUnits}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchaseUnitsRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Purchase Price ($): </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="number"
                id="purchasePrice"
                defaultValue={props.info.purchasePrice}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchasePriceRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Purchase Date: </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="date"
                id="purchaseDate"
                defaultValue={props.info.purchaseDate}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchaseDateRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Total Dividends ($): </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="number"
                id="price"
                defaultValue={props.info.dividendsTillDate}
                className="text-right pr-1 focus:outline-orange-400"
                ref={dividendsRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Last Dividend Date: </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="date"
                id="lastDividendUpdateDate"
                defaultValue={props.info.lastDividendUpdateDate}
                className="text-right pr-1 focus:outline-orange-400"
                ref={dividendDateRef}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div id="buttons" className="flex justify-around p-3">
        <button
          onClick={props.fnCancel}
          className="py-1 w-24 text-white bg-gray-300 hover:bg-gray-500 rounded-full"
        >
          Cancel
        </button>
        <button
          onClick={amendData}
          className="py-1 w-24 text-white bg-green-300 hover:bg-green-500 hover:font-extrabold  rounded-full"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default AmendPortfolio;
