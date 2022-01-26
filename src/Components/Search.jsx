import SearchBar from "./SearchBar";
import { Outlet, useOutletContext } from "react-router-dom";

function Search() {
  const [allData, setAllData] = useOutletContext();

  return (
    <>
      <SearchBar />
      <Outlet context={[allData, setAllData]} />
    </>
  );
}

export default Search;
