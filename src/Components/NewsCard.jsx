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
        className="border border-orange-400 m-1 p-1 text-xs"
      >
        {ticker}
      </button>
    );
  });

  return (
    <div className="border border-orange-400 rounded-2xl p-2 my-2 shadow-lg">
      <div>
        <img
          src={tickerNews.image_url}
          alt="News Article"
          className="rounded-lg"
        />
      </div>
      <h2>
        <a
          className="hover:text-blue-500 hover:underline"
          href={tickerNews.article_url}
        >
          {tickerNews.title}
        </a>
      </h2>
      <p className="text-xs py-2">
        Source: <br /> {tickerNews.publisher.name}
      </p>
      <p className="text-xs">Related stocks: </p>
      <div className="relatedTickers gap-2">{relatedTickers}</div>
    </div>
  );
}

export default NewsCard;
