import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const KEY = process.env.REACT_APP_APIKEY;
const urlPreviousDayClose = `https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2022-01-20?adjusted=true&apiKey=${KEY}`;

function NavBar() {
  const [priceData, setPriceData] = useState(["test"]);

  const fetchPriceData = () => {
    console.log("fetching price data");
    // fetch(urlPreviousDayClose)
    //   .then((response) => {
    //     console.log("processing price data");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("price data fetched");
    //     setPriceData(data.results);
    //   });
  };

  useEffect(() => {
    fetchPriceData();
  }, []);

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
            <Link to="contact"> Contact </Link>
          </div>
        </nav>
      </div>
      <div className="w-10/12 h-screen mx-auto bg-slate-50 overflow-scroll mt-9">
        <Outlet context={priceData} />
      </div>
    </>
  );
}

export default NavBar;
