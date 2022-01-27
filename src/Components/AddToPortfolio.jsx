import { useRef } from "react";
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
    <div className="border-orange-400 border w-4/5 mx-auto mt-5 rounded-2xl shadow-lg bg-white">
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">
        Add to Portfolio
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
            <td className="w-1/2 text-right pr-3">Purchase Price ($): </td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="number"
                id="price"
                defaultValue={props.info.close}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchasePriceRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Purchase Units: </td>
            <td className="w-1/2 text-left pl-3">
              {" "}
              <input
                type="number"
                id="units"
                defaultValue={0}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchaseUnitsRef}
              />
            </td>
          </tr>
          <tr>
            <td className="w-1/2 text-right pr-3">Purchase Date</td>
            <td className="w-1/2 text-left pl-3">
              <input
                type="date"
                id="units"
                defaultValue={props.date.format("YYYY-MM-DD")}
                className="text-right pr-1 focus:outline-orange-400"
                ref={purchaseDateRef}
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
          onClick={submitNewStock}
          className="py-1 w-24 text-white bg-green-300 hover:bg-green-500 hover:font-extrabold  rounded-full"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToPortfolio;
