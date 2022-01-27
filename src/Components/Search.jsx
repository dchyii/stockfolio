import SearchBar from "./SearchBar";
import { Outlet, useOutletContext } from "react-router-dom";

function Search() {
  const [allData, setAllData] = useOutletContext();

  return (
    <div>
      <SearchBar />
      <div className="h-screen -mt-32 pt-32">
        <Outlet context={[allData, setAllData]} />
      </div>
    </div>
  );
}

export default Search;
