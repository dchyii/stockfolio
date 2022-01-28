import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const iconX = "M6 18L18 6M6 6l12 12";
  const iconHamburger = "M4 6h16M4 12h16M4 18h16";

  return (
    <>
      <div
        id="NavBarBackground"
        className="bg-gray-800 fixed w-full top-0 z-30"
      >
        <nav
          id="NavBar"
          className="w-full md:w-10/12 h-9 mx-auto px-5 text-slate-100 flex justify-between items-center"
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
          <div id="links" className="w-1/2 xl:w-1/3 text-base">
            <div className=" w-full hidden md:flex justify-between">
              <div className="w-1/3 inline-block">
                <Link to="watchlist">
                  <p className="hover:text-orange-400 hover:font-extrabold">
                    Watchlist
                  </p>
                </Link>
              </div>
              <div className="w-1/3 inline-block">
                <Link to="portfolio">
                  <p className="hover:text-orange-400 hover:font-extrabold">
                    Portfolio
                  </p>
                </Link>
              </div>
              <div className="w-1/3 inline-block">
                <Link to="about">
                  <p className="hover:text-orange-400 hover:font-extrabold">
                    About
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full text-base block md:hidden">
              <button
                className="w-full"
                onClick={() => setHamburgerMenu(!hamburgerMenu)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={hamburgerMenu ? iconX : iconHamburger}
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`bg-gray-800 fixed w-full top-9 z-30 ${
          hamburgerMenu ? "" : "hidden"
        }`}
      >
        <div className=" w-full block justify-between">
          <div className="w-full block text-right pr-5 text-white">
            <Link to="watchlist" onClick={() => setHamburgerMenu(false)}>
              <p className="hover:text-orange-400 hover:font-extrabold">
                Watchlist
              </p>
            </Link>
          </div>
          <div className="w-full block text-right pr-5 text-white">
            <Link to="portfolio" onClick={() => setHamburgerMenu(false)}>
              <p className="hover:text-orange-400 hover:font-extrabold">
                Portfolio
              </p>
            </Link>
          </div>
          <div className="w-full block text-right pr-5 text-white">
            <Link to="about" onClick={() => setHamburgerMenu(false)}>
              <p className="hover:text-orange-400 hover:font-extrabold">
                About
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
