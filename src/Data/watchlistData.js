// Ticker Details v3
// https://api.polygon.io/v3/reference/tickers/BRK.B?apiKey={key}

const watchlistData = {
  "BRK.B": {
    ticker: "BRK.B",
    queryCount: 1,
    resultsCount: 1,
    adjusted: true,
    results: [
      {
        T: "BRK.B",
        v: 5769286,
        vw: 320.3267,
        o: 322.22,
        c: 320.29,
        h: 323.29,
        l: 318.07,
        t: 1642539600000,
        n: 83556,
      },
    ],
    status: "OK",
    request_id: "4acea0459dd60f81aa90f7ce68a9bc7a",
    count: 1,
  },
  AAPL: {
    ticker: "AAPL",
    queryCount: 1,
    resultsCount: 1,
    adjusted: true,
    results: [
      {
        T: "AAPL",
        v: 91063979,
        vw: 170.5404,
        o: 171.51,
        c: 169.8,
        h: 172.54,
        l: 169.405,
        t: 1642539600000,
        n: 780899,
      },
    ],
    status: "OK",
    request_id: "8fe7399f45d46905636c41c8ef699934",
    count: 1,
  },
};

export default watchlistData;
