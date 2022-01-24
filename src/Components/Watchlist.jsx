// import watchlistData from "../Data/watchlistData";
// import watchlistStocks from "../Data/watchlistStocks";
import dayjs from "dayjs";
import { useOutletContext } from "react-router-dom";
import SearchBar from "./SearchBar";
import Table from "./Table";

function Watchlist() {
  const priceData = useOutletContext().prevClosePrice;
  console.log(priceData);
  const date = useOutletContext().date;
  console.log(date);

  return (
    <div>
      <SearchBar />
      <Table />
    </div>
  );
}

export default Watchlist;
