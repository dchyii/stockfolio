// import watchlistData from "../Data/watchlistData";
// import watchlistStocks from "../Data/watchlistStocks";
import { useOutletContext } from "react-router-dom";
import SearchBar from "./SearchBar";

function Watchlist() {
  // console.log("watchlist stock", watchlistStocks);
  // console.log("watchlist", watchlistData);
  const priceData = useOutletContext();
  console.log(priceData);
  return (
    <>
      <h2>Hello Watchlist</h2>
      <SearchBar />
    </>
  );
}

export default Watchlist;
