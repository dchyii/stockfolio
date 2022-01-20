import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const searchRef = useRef();
  let navigate = useNavigate();

  const navToSearchResult = () => {
    navigate(`/search/${searchRef.current.value}`);
  };

  return (
    <div id="SearchBar" className="w-10/12 mx-auto py-2 ">
      <input
        type="text"
        placeholder="Enter Ticker Symbol"
        className="w-4/5 bg-gray-200 outline outline-1 outline-gray-400 focus:outline-gray-800 text-gray-800 px-2 rounded"
        ref={searchRef}
      />
      <button
        className="bg-gray-300 outline outline-1 outline-gray-400 text-gray-800 px-2 mx-2 rounded hover:outline-orange-800 hover:bg-orange-400 hover:text-slate-100"
        onClick={navToSearchResult}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
