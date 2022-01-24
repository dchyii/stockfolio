// import watchlistData from "../Data/watchlistData";
// import watchlistStocks from "../Data/watchlistStocks";
import dayjs from "dayjs";
import { useOutletContext } from "react-router-dom";
import SearchBar from "./SearchBar";

function Watchlist() {
  // console.log("watchlist stock", watchlistStocks);
  // console.log("watchlist", watchlistData);
  const priceData = useOutletContext();
  console.log(priceData);
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default Watchlist;
