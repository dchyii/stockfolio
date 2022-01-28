import "./App.css";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SearchBar from "./Components/SearchBar";
import SearchResult from "./Components/SearchResult";
import Watchlist from "./Components/Watchlist";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="appContent w-full md:w-10/12 h-screen mx-auto bg-slate-50 overflow-hidden pt-9 text-sm md:text-base">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<SearchBar />} />
            <Route path="search" element={<Search />}>
              <Route path=":symbolCaseInsensitive" element={<SearchResult />} />
            </Route>
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
