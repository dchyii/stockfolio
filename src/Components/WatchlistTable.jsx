import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

function WatchlistTable(props) {
  const header = props.header.map((col, i) => {
    if (i === 0) {
      return (
        <th colSpan={2} key={col}>
          {col}
        </th>
      );
    }
    return <th key={col}>{col}</th>;
  });

  const data = props.data.map((row, i) => {
    return (
      <tr
        key={row.symbol}
        rowid={row.symbol}
        className="even:bg-orange-50 odd:bg-slate-50 hover:bg-orange-200"
      >
        <td colSpan={2}>
          <Link to={`/search/${row.symbol}`}>
            {row.name} ({row.symbol})
          </Link>
        </td>
        <td>
          <NumberFormat
            value={row.open}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={row.high}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={row.low}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={row.close}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={row.volume}
            thousandSeparator={true}
            prefix=""
            fixedDecimalScale={true}
            decimalScale={0}
            displayType="text"
          />
        </td>
        <td className="w-12">
          <svg
            id={i}
            onClick={(event) => props.fnShowAddToPortfolioScreen(event)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 m-3 sm:h-5 sm:w-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              id={i}
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </td>
        <td className="w-12">
          <svg
            id={i}
            onClick={(event) => props.fnShowRemoveConfirmationScreen(event)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 m-3 sm:h-5 sm:w-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              id={i}
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        </td>
      </tr>
    );
  });

  return (
    <div className="w-full overflow-scroll">
      <table className="w-10/12 mx-auto table-auto border border-orange-400 border-collapse text-xs md:text-sm lg:text-base">
        <thead>
          <tr className=" border-b-2 border-orange-400">
            {header}
            <th> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{data}</tbody>
      </table>
    </div>
  );
}

export default WatchlistTable;
