import "./App.css";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";
import SmallInfoCard from "./Components/SmallInfoCard";
import Watchlist from "./Components/Watchlist";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

const key = process.env.REACT_APP_APIKEY;

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="appContent w-10/12 h-screen mx-auto bg-slate-50 overflow-scroll pt-9">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<SearchBar />} />
            <Route path="search" element={<Search />}>
              <Route path=":symbolCaseInsensitive" element={<SearchResult />} />
            </Route>
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
