//dividends v3
// https://api.polygon.io/v3/reference/dividends?ticker=AAPL&sort=ex_dividend_date&apiKey={key}

const dividendData = {
  results: [
    {
      cash_amount: 0.22,
      declaration_date: "2021-10-28",
      dividend_type: "CD",
      ex_dividend_date: "2021-11-05",
      frequency: 4,
      pay_date: "2021-11-11",
      record_date: "2021-11-08",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.22,
      declaration_date: "2021-07-27",
      dividend_type: "CD",
      ex_dividend_date: "2021-08-06",
      frequency: 4,
      pay_date: "2021-08-12",
      record_date: "2021-08-09",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.22,
      declaration_date: "2021-04-28",
      dividend_type: "CD",
      ex_dividend_date: "2021-05-07",
      frequency: 4,
      pay_date: "2021-05-13",
      record_date: "2021-05-10",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.205,
      declaration_date: "2021-01-27",
      dividend_type: "CD",
      ex_dividend_date: "2021-02-05",
      frequency: 4,
      pay_date: "2021-02-11",
      record_date: "2021-02-08",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.205,
      declaration_date: "2020-10-29",
      dividend_type: "CD",
      ex_dividend_date: "2020-11-06",
      frequency: 4,
      pay_date: "2020-11-12",
      record_date: "2020-11-09",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.205,
      declaration_date: "2020-07-30",
      dividend_type: "CD",
      ex_dividend_date: "2020-08-07",
      frequency: 4,
      pay_date: "2020-08-13",
      record_date: "2020-08-10",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.205,
      declaration_date: "2020-04-30",
      dividend_type: "CD",
      ex_dividend_date: "2020-05-08",
      frequency: 4,
      pay_date: "2020-05-14",
      record_date: "2020-05-11",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.1925,
      declaration_date: "2020-01-28",
      dividend_type: "CD",
      ex_dividend_date: "2020-02-07",
      frequency: 4,
      pay_date: "2020-02-13",
      record_date: "2020-02-10",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.1925,
      declaration_date: "2019-10-30",
      dividend_type: "CD",
      ex_dividend_date: "2019-11-07",
      frequency: 4,
      pay_date: "2019-11-14",
      record_date: "2019-11-11",
      ticker: "AAPL",
    },
    {
      cash_amount: 0.1925,
      declaration_date: "2019-07-30",
      dividend_type: "CD",
      ex_dividend_date: "2019-08-09",
      frequency: 4,
      pay_date: "2019-08-15",
      record_date: "2019-08-12",
      ticker: "AAPL",
    },
  ],
  status: "OK",
  request_id: "f8f2596de8db744836e09ca30feb8763",
  next_url:
    "https://api.polygon.io/v3/reference/dividends?cursor=YXA9NjU2NzQmYXM9JmxpbWl0PTEwJm9yZGVyPWRlc2Mmc29ydD1leF9kaXZpZGVuZF9kYXRlJnRpY2tlcj1BQVBM",
};

export default dividendData;