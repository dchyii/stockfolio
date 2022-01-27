import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const searchRef = useRef();
  let navigate = useNavigate();

  const navToSearchResult = () => {
    navigate(`/search/${searchRef.current.value}`);
  };

  return (
    <div id="SearchBar" className="w-10/12 mx-auto py-5">
      <div className="w-full mx-auto relative">
        <input
          type="text"
          placeholder="Search Ticker Symbol"
          className="w-full border-2 px-3 border-gray-300 focus:outline-orange-400 bg-white h-10 rounded-lg focus:shadow-lg"
          ref={searchRef}
        />
        <button
          className="absolute right-0 top-0 mt-2 mr-3"
          onClick={navToSearchResult}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-slate-700 hover:text-orange-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
