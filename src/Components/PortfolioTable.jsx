import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

function PortfolioTable(props) {
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
        key={i}
        className="even:bg-orange-50 odd:bg-slate-50 hover:bg-orange-200"
      >
        <td colSpan={2}>
          <Link to={`/search/${row.symbol}`}>
            {row.name} ({row.symbol})
          </Link>
        </td>
        <td>
          <NumberFormat
            value={row.purchaseUnits}
            thousandSeparator={true}
            prefix=""
            fixedDecimalScale={false}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={row.purchasePrice}
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
            value={row.dividendsTillDate}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td>
          <NumberFormat
            value={
              (row.close - row.purchasePrice + row.dividendsTillDate) *
                row.purchaseUnits || 0
            }
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </td>
        <td className="w-12">
          <svg
            id={i}
            onClick={(event) => props.fnShowAmendScreen(event)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 m-3 sm:h-5 sm:w-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              id={i}
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              id={i}
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
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
  );
}

export default PortfolioTable;
