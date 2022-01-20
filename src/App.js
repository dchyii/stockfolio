import "./App.css";
import Contact from "./Components/Contact";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import SmallInfoCard from "./Components/SmallInfoCard";
import Watchlist from "./Components/Watchlist";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

const key = process.env.REACT_APP_APIKEY;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />}>
            <Route path=":symbol" element={<SearchResults />} />
          </Route>
          <Route path="watchlist" element={<Watchlist />} />
          <Route path="portfolio" element={<Portfolio />}>
            <Route path=":symbol" element={<SmallInfoCard />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
