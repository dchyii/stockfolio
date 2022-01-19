import newsData from "../Data/newsData";
import searchResultData from "../Data/searchResultData";
import SearchBar from "./SearchBar";

function SearchResults() {
  console.log("search results", searchResultData);
  console.log("news data", newsData.results[0]);
  return (
    <>
      <h2>Hello Search Results</h2>
      <SearchBar />
    </>
  );
}

export default SearchResults;
