//Ticker News
// https://api.polygon.io/v2/reference/news?ticker=BRK.B&{key}

const newsData = {
  results: [
    {
      id: "MYmUSy7huweyo2DSGxncTDc-orESqseqYH_j78C0S-o",
      publisher: {
        name: "MarketWatch",
        homepage_url: "https://www.marketwatch.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/marketwatch.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/marketwatch.ico",
      },
      title:
        "This is the window of time when value can outperform growth in the stock market",
      author: "MarketWatch",
      published_utc: "2022-01-18T16:16:00Z",
      article_url:
        "https://www.marketwatch.com/story/this-is-the-window-of-time-when-value-can-outperform-growth-in-the-stock-market-11642522585",
      tickers: [
        "SPYG",
        "SPYV",
        "SPY",
        "AAPL",
        "MSFT",
        "GOOGL",
        "GOOG",
        "AMZN",
        "TSLA",
        "BRK.B",
        "BBWI",
        "CZR",
        "TMUS",
        "CTLT",
        "PYPL",
        "BIO",
        "MTCH",
        "CRM",
        "NWSA",
        "ALK",
        "AES",
        "TDY",
        "PWR",
        "LH",
        "AIZ",
        "V",
        "NKE",
        "GM",
        "IQV",
        "SNPS",
      ],
      amp_url:
        "https://www.marketwatch.com/amp/story/this-is-the-window-of-time-when-value-can-outperform-growth-in-the-stock-market-11642522585",
      image_url: "https://images.mktw.net/im-469363/social",
      description:
        'Companies categorized as "value" are expected by analysts to increase earnings more quickly than their growth peers.',
    },
    {
      id: "yXmZxuPl49fUKyiHBW11rOQ1aTauMnl5r-2LJDPj8jc",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title: "Top 10 Lithium Stocks in LIT, the World's First Lithium ETF",
      author: "newsfeedback@fool.com (Beth McKenna)",
      published_utc: "2022-01-17T21:00:00Z",
      article_url:
        "https://www.fool.com/investing/2022/01/17/invest-in-lithium-stocks-2022/",
      tickers: ["TSLA", "BRK.A", "AAPL", "BRK.B", "ALB", "LIT"],
      image_url:
        "https://g.foolcdn.com/editorial/images/661340/best-lithium-stocks-chinese-lithium-stocks-alb-stock-lac-stock-lithium-americas-stock-livent-stock-best-lithium-stocks-2022-largest-lithium-producer-miner.jpg",
      description:
        "The Lithium & Battery Tech ETF's two largest holdings are miner Albemarle and Tesla, while a Warren Buffet-owned stock ranks No. 6.",
      keywords: ["investing"],
    },
    {
      id: "BCLSzslSSf5gW6h7CPECV_XyraltLpTP2knkvqAmMQs",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title:
        "“Squawk Box” Co-Anchor Becky Quick Talks About How She Got Where She Is",
      author: "newsfeedback@fool.com (Chris Hill)",
      published_utc: "2022-01-17T15:54:40Z",
      article_url:
        "https://www.fool.com/investing/2022/01/17/squawk-box-co-anchor-becky-quick-talks-about-how-s/",
      tickers: ["BRK.A", "AAPL", "BRK.B", "TWTR"],
      image_url:
        "https://g.foolcdn.com/editorial/images/660742/new-thumbs_mfm.png",
      description: '"The good thing is we just have fun on set..."',
      keywords: ["investing"],
    },
    {
      id: "MlVeLP0ms8XDoTC4obJU_lPFr5Kn0UjAg2W64DT1MsU",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title: "2 Top Bargain Stocks Ready for a Bull Run",
      author: "newsfeedback@fool.com (Rich Duprey)",
      published_utc: "2022-01-17T11:15:00Z",
      article_url:
        "https://www.fool.com/investing/2022/01/17/2-top-bargain-stocks-ready-for-a-bull-run/",
      tickers: ["BABA", "BRK.A", "BRK.B", "AMZN", "ARKK", "FSLY"],
      image_url:
        "https://g.foolcdn.com/editorial/images/661044/metaverse-virtual-reality-getty.jpeg",
      description:
        "These supercharged tech stocks can go against the grain and reward investors.",
      keywords: ["investing"],
    },
    {
      id: "YQ28q36MIJ1yiyez4SiPJJDZugHIZceuXLse0YbJOz8",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title: "How to Invest in Renewable Energy with Berkshire Hathaway",
      author: "newsfeedback@fool.com (Toby Bordelon and Lou Whiteman)",
      published_utc: "2022-01-16T16:00:00Z",
      article_url:
        "https://www.fool.com/investing/2022/01/16/how-to-invest-in-renewable-energy-with-berkshire-h/",
      tickers: ["BRK.B", "BRK.A"],
      image_url:
        "https://g.foolcdn.com/editorial/images/661489/wind-energy.jpg",
      description: "The company's long-term plan is paying off.",
      keywords: ["investing"],
    },
    {
      id: "Fu2LdF-upY4WPFY23Mp60AtGygJ_yltKsHxAGO91YFg",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title: "Investing in Energy? Berkshire is a Great Place to Start",
      author: "newsfeedback@fool.com (Toby Bordelon and Lou Whiteman)",
      published_utc: "2022-01-16T15:15:00Z",
      article_url:
        "https://www.fool.com/investing/2022/01/16/investing-in-energy-berkshire-is-a-great-place-to/",
      tickers: ["BRK.B", "BRK.A", "AAPL"],
      image_url: "https://g.foolcdn.com/editorial/images/661475/solar-wind.jpg",
      description: "It would be a solid piece of any portfolio.",
      keywords: ["investing"],
    },
    {
      id: "e1rFA3zjZy8-U95IelPhcKe2c3OlVBv4HBUmuzqH17A",
      publisher: {
        name: "The Motley Fool",
        homepage_url: "https://www.fool.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/themotleyfool.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/themotleyfool.ico",
      },
      title: "3 Top Unstoppable Warren Buffett-Type Stocks to Buy in 2022",
      author:
        "newsfeedback@fool.com (Daniel Foelber, Scott Levine, and Lee Samaha)",
      published_utc: "2022-01-16T11:00:00Z",
      article_url:
        "https://www.fool.com/investing/2022/01/16/3-top-unstoppable-warren-buffett-type-stocks-to-bu/",
      tickers: ["UPS", "BRK.A", "BRK.B", "WM", "AAPL", "KO", "APD"],
      image_url:
        "https://g.foolcdn.com/editorial/images/661434/gettyimages-1319766088.jpg",
      description:
        "These three dividend stocks are poised to thrive over the long term.",
      keywords: ["investing"],
    },
    {
      id: "CS0d6-EwuPI_tfO4cnXEo1qhAyEBgDzs6vN0F4AwVhA",
      publisher: {
        name: "Seeking Alpha",
        homepage_url: "https://seekingalpha.com/",
        logo_url:
          "https://s3.polygon.io/public/assets/news/logos/seekingalpha.svg",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/seekingalpha.ico",
      },
      title: "TINA Was Wrong, Cash Is Not Trash, And There Is An Alternative",
      author: "KCI Research Ltd.",
      published_utc: "2022-01-14T15:46:34Z",
      article_url:
        "https://seekingalpha.com/article/4479668-tina-was-wrong-cash-is-not-trash-and-there-is-an-alternative",
      tickers: [
        "AAPL",
        "AMZN",
        "AR",
        "ARKK",
        "BRK.A",
        "BRK.B",
        "CS",
        "CVE",
        "EQT",
        "FB",
        "GOOG",
        "GOOGL",
        "HCC",
        "JNJ",
        "JPM",
        "MORN",
        "MSFT",
        "NVDA",
        "OXY",
        "QQQ",
        "SPY",
        "TLT",
        "TSLA",
      ],
      amp_url:
        "https://seekingalpha.com/amp/article/4479668-tina-was-wrong-cash-is-not-trash-and-there-is-an-alternative",
      image_url:
        "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1279341565/medium_image_1279341565.jpg",
      description:
        "Despite high rates of inflation, recent CPI readings register a 7.0% inflation rate, many stock prices have deteriorated faster than cash prices. See more here.",
    },
    {
      id: "cOMU7Y4g3BxCrnmth5Qlbvo_ll_pp2JUccxAIheIZXQ",
      publisher: {
        name: "Zacks Investment Research",
        homepage_url: "https://www.zacks.com/",
        logo_url: "https://s3.polygon.io/public/assets/news/logos/zacks.png",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/zacks.ico",
      },
      title:
        "Berkshire Hathaway B (BRK.B) Gains As Market Dips: What You Should Know",
      author: "Zacks Equity Research",
      published_utc: "2022-01-13T22:45:21Z",
      article_url:
        "https://www.zacks.com/stock/news/1851819/berkshire-hathaway-b-brkb-gains-as-market-dips-what-you-should-know",
      tickers: ["BRK.B"],
      amp_url:
        "https://www.zacks.com/amp/stock/news/1851819/berkshire-hathaway-b-brkb-gains-as-market-dips-what-you-should-know",
      image_url:
        "https://staticx-tuner.zacks.com/images/default_article_images/default43.jpg",
      description:
        "Berkshire Hathaway B (BRK.B) closed the most recent trading day at $321.26, moving +0.27% from the previous trading session.",
    },
    {
      id: "YNyED-3sedaooehP5bP_dhyBKCzIhjUdUsMcATlu1-8",
      publisher: {
        name: "Zacks Investment Research",
        homepage_url: "https://www.zacks.com/",
        logo_url: "https://s3.polygon.io/public/assets/news/logos/zacks.png",
        favicon_url:
          "https://s3.polygon.io/public/assets/news/favicons/zacks.ico",
      },
      title:
        "Should You Invest in the Fidelity MSCI Financials Index ETF (FNCL)?",
      author: "Zacks Equity Research",
      published_utc: "2022-01-13T11:20:10Z",
      article_url:
        "https://www.zacks.com/stock/news/1851329/should-you-invest-in-the-fidelity-msci-financials-index-etf-fncl",
      tickers: ["FNCL", "BAC", "JPM", "BRK.B", "XLF", "VFH"],
      amp_url:
        "https://www.zacks.com/amp/stock/news/1851329/should-you-invest-in-the-fidelity-msci-financials-index-etf-fncl",
      image_url:
        "https://staticx-tuner.zacks.com/images/default_article_images/default13.jpg",
      description: "Sector ETF report for FNCL",
    },
  ],
  status: "OK",
  request_id: "dce0baedc85f2217f5e5ab2a5fc5b380",
  count: 10,
  next_url:
    "https://api.polygon.io/v2/reference/news?cursor=YXA9MjAyMi0wMS0xM1QxMSUzQTIwJTNBMTBaJmFzPVlOeUVELTNzZWRhb29laFA1YlBfZGh5QktDekloalVkVXNNY0FUbHUxLTgmb3JkZXI9ZGVzY2VuZGluZyZ0aWNrZXI9QlJLLkI",
};

export default newsData;
