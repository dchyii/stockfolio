import SearchBar from "./SearchBar";
import { Outlet } from "react-router-dom";

function Search() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default Search;
