function BigInfoCard(props) {
  const key = process.env.REACT_APP_APIKEY;

  return (
    <div
      id="BigInfoCard"
      className="outline outline-1 outline-orange-400 rounded-md h-fit p-3 bg-orange-50"
    >
      <img
        src={props.data.branding.logo_url + `?apiKey=${key}`}
        alt="company logo"
        className="h-24 mx-auto my-3"
      />
      <div className="flex justify-between text-xl font-bold">
        <h2 className="text-orange-400">
          {props.data.name} ({props.data.ticker})
        </h2>
        <h2>$XX</h2>
      </div>
      <p className="my-3 text-left">
        {props.data.address.address1}
        <br />
        {props.data.address.city}
        <br />
        {props.data.address.state} {props.data.address.postal_code}
        <br />
        <a
          href={props.data.homepage_url}
          className="hover:text-blue-500 hover:underline"
        >
          {props.data.homepage_url}
        </a>
      </p>
      <p className="my-3 text-left">Market Cap: {props.data.market_cap}</p>

      <p className="my-3 text-justify">{props.data.description}</p>
    </div>
  );
}

export default BigInfoCard;
