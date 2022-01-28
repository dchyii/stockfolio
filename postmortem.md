## Approach and Process

1. What in my process and approach to this project would I do differently next time?

- Plan the project in even greater details. While there are some form of planning upfront before embarking on the project, there are still a lot of missing gaps during the development process which were not thought through - e.g. what happens if a user wants to remove a stock from his/her portfolio.

2. What in my process and approach to this project went well that I would repeat next time?

- Breaking down the app into small parts, developing the application page by page.
- Started off with a bit of CSS so that there is some basic form of visualisation of how the final product will be during the development.

## Code and Code Design

1. What in my code and program design in the project would I do differently next time?

- I might want to try breaking up the useEffect in the search results. The useEffect now is affected by 3 variables, which will cause a lot of unnecessary re-rendering of the component.

```
useEffect(() => {
    const KEY = process.env.REACT_APP_APIKEY;
    const urlTickerDetails = `https://api.polygon.io/v3/reference/tickers/${symbol}?apiKey=${KEY}`;
    const urlTickerNews = `https://api.polygon.io/v2/reference/news?ticker=${symbol}&apiKey=${KEY}`;

    const fetchTickerDetails = () => {
      dispatchLoadStatus({ type: "DETAILS_LOADING" });
      console.log("fetching ticker details");
      fetch(urlTickerDetails)
        .then((response) => {
          console.log("processing details");
          return response.json();
        })
        .then((data) => {
          console.log("ticker details fetched");
          if (data.status === "ERROR") {
            dispatchLoadStatus({ type: "DETAILS_ERROR" });
          }
          if (data.status === "NOT_FOUND") {
            dispatchLoadStatus({ type: "DETAILS_NOT_FOUND" });
          }
          if (data.status === "OK") {
            const fetchedData = data.results;
            dispatch({
              type: "UPDATE_TICKER_DETAILS",
              fetchedData: fetchedData,
            });
            dispatchLoadStatus({ type: "DETAILS_LOADED" });
          }
        })
        .catch((error) => {
          dispatchLoadStatus({ type: "DETAILS_ERROR" });
          console.error("error", error);
        });
    };

    const fetchTickerPrice = () => {
      dispatch({
        type: "UPDATE_TICKER_PRICE",
        fetchedData:
          prevClosePrices[
            prevClosePrices.findIndex((stock) => stock.T === symbol)
          ],
      });
    };

    const fetchTickerNews = () => {
      dispatchLoadStatus({ type: "NEWS_LOADING" });
      console.log("fetching ticker news");
      fetch(urlTickerNews)
        .then((response) => {
          console.log("processing news");
          return response.json();
        })
        .then((data) => {
          console.log("ticker news fetched");
          if (data.status === "ERROR") {
            dispatchLoadStatus({ type: "NEWS_ERROR" });
          }
          if (data.status === "OK") {
            const fetchedData = data.results;
            dispatch({ type: "UPDATE_TICKER_NEWS", fetchedData: fetchedData });
            dispatchLoadStatus({ type: "NEWS_LOADED" });
          }
        })
        .catch((error) => {
          dispatchLoadStatus({ type: "NEWS_ERROR" });
          console.error("error", error);
        });
    };

    fetchTickerDetails();
    fetchTickerPrice();
    fetchTickerNews();
  }, [symbol, prevClosePrices]);
```

2. What in my code and program design in the project went well? Is there anything I would do the same next time?

- Creating components that can really be used across different aspects of the application - e.g. confirm removal of stock from watchlist is reused to confirm removal of stock from portfolio.

```
    <div className="border-orange-400 border w-1/2 mx-auto mt-5 rounded-2xl shadow-lg bg-white p-3">
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">
        Confirmation
      </h2>
      <div className="p-2">
        <p>
          You are about to remove{" "}
          <span className="text-orange-400 font-bold">
            {props.info.name} ({props.info.symbol})
          </span>{" "}
          from your {props.list}.
        </p>
        <p>Do you wish to proceed?</p>
      </div>
      <div className="buttons flex justify-around p-2">
        <button
          onClick={props.fnCancel}
          className="py-1 w-24 text-white bg-gray-300 hover:bg-gray-500 rounded-full"
        >
          Cancel
        </button>
        <button
          onClick={() => props.fnRemove(removedStock)}
          className="py-1 w-24 text-white bg-red-500 hover:bg-orange-500 hover:font-extrabold  rounded-full"
        >
          Proceed
        </button>
      </div>
    </div>
```

- Enjoyed styling the app through Tailwind CSS. Managed to achieve 90% of the effects that I envisage the app to be.

## SEI Post Mortem

1. What habits did I use during this unit that helped me?

- Thinking about reusability when creating components.
- Learning to google specifically for the help I needed.

2. What habits did I have during this unit that I can improve on?

- Planning was adequate.

3. How is the overall level of the course during this unit? (instruction, course materials, etc.)

- Overall I feel a sense of accomplishment to create a functional application after spending only 1 week plus on React.
