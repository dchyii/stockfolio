import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
              [Logo] <span className="text-orange-400 font-bold">Stock</span>
              Folio
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
