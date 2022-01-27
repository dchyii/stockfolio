import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div id="NavBarBackground" className="bg-gray-800 fixed w-full top-0">
        <nav
          id="NavBar"
          className="w-10/12 h-9 mx-auto px-5 text-slate-100 flex justify-between items-center"
        >
          <div id="logo" className="text-xl">
            <Link to="/">
              <span className="text-orange-400 font-bold">Stock</span>
              Folio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mb-2 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </Link>
          </div>
          <div id="links" className="w-1/3 text-base flex justify-between">
            <Link to="watchlist"> Watchlist </Link>
            <Link to="portfolio"> Portfolio </Link>
            <Link to="about"> About </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
