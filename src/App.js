import "./App.css";
import AddToPortfolio from "./Components/AddToPortfolio";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import Watchlist from "./Components/Watchlist";

const key = process.env.REACT_APP_APIKEY;

function App() {
  return (
    <div className="App">
      <h1> Hello StockFolio</h1>
      <SearchBar />
      <SearchResults />
      <AddToPortfolio />
      <Watchlist />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
