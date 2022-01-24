import { Link, useNavigate } from "react-router-dom";

function Table(props) {
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

  const data = props.data.map((row) => {
    return (
      <tr key={row.symbol}>
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
        <td>Buy</td>
        <td>Remove</td>
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

export default Table;
