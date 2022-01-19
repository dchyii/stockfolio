import watchlistData from "../Data/watchlistData";
import watchlistStocks from "../Data/watchlistStocks";
import SearchBar from "./SearchBar";

function Watchlist() {
  console.log("watchlist stock", watchlistStocks);
  console.log("watchlist", watchlistData);
  return (
    <>
      <h2>Hello Watchlist</h2>
      <SearchBar />
    </>
  );
}

export default Watchlist;
