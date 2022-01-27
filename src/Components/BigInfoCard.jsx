import NumberFormat from "react-number-format";

function BigInfoCard(props) {
  const key = process.env.REACT_APP_APIKEY;

  const tickerDetails = props.data.tickerDetails;
  const tickerPrice = props.data.tickerPrice;

  return (
    <div
      id="BigInfoCard"
      className="border border-orange-400 rounded-2xl shadow-xl h-full p-3 bg-orange-50 overflow-scroll"
    >
      <img
        src={tickerDetails?.branding?.logo_url + `?apiKey=${key}`}
        alt="company logo"
        className="h-24 mx-auto my-3"
      />
      <div className="flex justify-between text-xl font-bold">
        <h2 className="text-orange-400">
          {tickerDetails?.name} ({tickerDetails?.ticker})
        </h2>
        <h2>
          <NumberFormat
            value={tickerPrice?.c}
            thousandSeparator={true}
            prefix="$"
            fixedDecimalScale={true}
            decimalScale={2}
            displayType="text"
          />
        </h2>
      </div>
      <p className="my-3 text-left">
        {tickerDetails?.address?.address1}
        <br />
        {tickerDetails?.address?.city}
        <br />
        {tickerDetails?.address?.state} {tickerDetails?.address?.postal_code}
        <br />
        <a
          href={tickerDetails?.homepage_url}
          className="hover:text-blue-500 hover:underline"
        >
          {tickerDetails?.homepage_url}
        </a>
      </p>
      <p className="my-3 text-left">
        Market Cap:{" "}
        <NumberFormat
          value={tickerDetails?.market_cap}
          thousandSeparator={true}
          prefix="$"
          fixedDecimalScale={true}
          decimalScale={2}
          displayType="text"
        />
      </p>

      <p className="my-3 text-justify">{tickerDetails?.description}</p>
    </div>
  );
}

export default BigInfoCard;
