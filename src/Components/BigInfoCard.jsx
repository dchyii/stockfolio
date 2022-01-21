function BigInfoCard(props) {
  const key = process.env.REACT_APP_APIKEY;

  const tickerDetails = props.data.tickerDetails;
  const tickerPrice = props.data.tickerPrice;
  const tickerNews = props.data.tickerNews;

  console.log("big card details:", props.data);

  return (
    <div
      id="BigInfoCard"
      className="outline outline-1 outline-orange-400 rounded-md h-fit p-3 bg-orange-50"
    >
      <img
        src={tickerDetails.branding.logo_url + `?apiKey=${key}`}
        alt="company logo"
        className="h-24 mx-auto my-3"
      />
      <div className="flex justify-between text-xl font-bold">
        <h2 className="text-orange-400">
          {tickerDetails.name} ({tickerDetails.ticker})
        </h2>
        <h2>${tickerPrice.c}</h2>
      </div>
      <p className="my-3 text-left">
        {tickerDetails.address.address1}
        <br />
        {tickerDetails.address.city}
        <br />
        {tickerDetails.address.state} {tickerDetails.address.postal_code}
        <br />
        <a
          href={tickerDetails.homepage_url}
          className="hover:text-blue-500 hover:underline"
        >
          {tickerDetails.homepage_url}
        </a>
      </p>
      <p className="my-3 text-left">Market Cap: {tickerDetails.market_cap}</p>

      <p className="my-3 text-justify">{tickerDetails.description}</p>
    </div>
  );
}

export default BigInfoCard;
