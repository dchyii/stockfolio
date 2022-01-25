import { Link, useNavigate } from "react-router-dom";

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
      <tr key={row.symbol} rowid={row.symbol}>
        <td colSpan={2}>
          <Link to={`/search/${row.symbol}`}>
            {row.name} ({row.symbol})
          </Link>
        </td>
        <td>{row.open}</td>
        <td>{row.high}</td>
        <td>{row.low}</td>
        <td>{row.close}</td>
        <td>{row.volume}</td>
        <td>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </td>
        <td>
          <svg
            id={i}
            onClick={(event) => props.fnShowRemoveConfirmationScreen(event)}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mx-auto"
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
    <table className="w-4/5 mx-auto table-fixed border border-orange-400">
      <thead>
        <tr>
          {header}
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
}

export default WatchlistTable;
