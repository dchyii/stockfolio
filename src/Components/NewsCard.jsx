import { useNavigate } from "react-router-dom";

function NewsCard(props) {
  const tickerNews = props.data;
  let navigate = useNavigate();

  const navToSearchResult = (event) => {
    navigate(`/search/${event.target.innerText}`);
  };

  const relatedTickers = tickerNews.tickers.map((ticker) => {
    return (
      <button
        key={ticker}
        onClick={navToSearchResult}
        className="outline outline-1 m-1 p-1 text-xs"
      >
        {ticker}
      </button>
    );
  });

  return (
    <div className="outline outline-1 outline-orange-400 rounded-md p-2 my-2">
      <div className="newsCardImage">
        <img src={tickerNews.image_url} alt="News Article" />
      </div>
      <h2>
        <a href={tickerNews.article_url}>{tickerNews.title}</a>
      </h2>
      <p>Source: {tickerNews.publisher.name}</p>
      <p>Related stocks: </p>
      <div className="relatedTickers gap-2">{relatedTickers}</div>
    </div>
  );
}

export default NewsCard;
