import "./App.css";
import AddToPortfolio from "./Components/AddToPortfolio";
import BigInfoCard from "./Components/BigInfoCard";
import Contact from "./Components/Contact";
import NewsCard from "./Components/NewsCard";
import Portfolio from "./Components/Portfolio";
import SearchBar from "./Components/SearchBar";
import SearchResults from "./Components/SearchResults";
import SmallInfoCard from "./Components/SmallInfoCard";
import Watchlist from "./Components/Watchlist";

const key = process.env.REACT_APP_APIKEY;

function App() {
  return (
    <div className="App">
      <h1> Hello StockFolio</h1>
      <SearchBar />
      <SearchResults />
      <BigInfoCard />
      <NewsCard />
      <AddToPortfolio />
      <Watchlist />
      <Portfolio />
      <SmallInfoCard />
      <Contact />
    </div>
  );
}

export default App;
