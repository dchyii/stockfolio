import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h1>
        {" "}
        <Link to="/">Hello StockFolio</Link>
      </h1>
      <nav>
        <Link to="watchlist"> Watchlist </Link>
        <Link to="portfolio"> Portfolio </Link>
        <Link to="contact"> Contact </Link>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default NavBar;
