import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div id="NavBarBackground" className="bg-gray-800">
        <nav
          id="NavBar"
          className="w-10/12 h-9 mx-auto px-5 text-slate-100 text-xl flex justify-between items-center"
        >
          <div id="logo">
            <Link to="/">
              [Logo] <span className="text-orange-400 font-bold">Stock</span>
              Folio
            </Link>
          </div>
          <div id="links" className="w-1/3 flex justify-between">
            <Link to="watchlist"> Watchlist </Link>
            <Link to="portfolio"> Portfolio </Link>
            <Link to="contact"> Contact </Link>
          </div>
        </nav>
      </div>
      <div className="w-10/12 h-screen mx-auto bg-slate-50">
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
