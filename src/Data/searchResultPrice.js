//Search Result Previous Close
//https://api.polygon.io/v2/aggs/ticker/BRK.B/prev?adjusted=true&apiKey={KEY}

const searchResultPrice = {
  ticker: "BRK.B",
  queryCount: 1,
  resultsCount: 1,
  adjusted: true,
  results: [
    {
      T: "BRK.B",
      v: 4409316,
      vw: 313.4501,
      o: 315.58,
      c: 311.01,
      h: 317.18,
      l: 310.68,
      t: 1642712400000,
      n: 71403,
    },
  ],
  status: "OK",
  request_id: "244699c7c66b34d3de6c7d85a3728876",
  count: 1,
};

export default searchResultPrice;
