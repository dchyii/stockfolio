# StockFolio

[SEI34 Project 2] StockFolio is a one-stop dashboard that allows users to track their portfolio, and research and track any US-Listed stocks.

## Description

StockFolio is a React application. Users will search for any particular stocks to do their research, and add the stock to their watchlist or add it to their portfolio. However, as this is a front-end application, the information will not be stored in a database (to be improved in future iterations).

### TechStack

- React
- Fetch for API
- HTML5
- CSS framework (TBC)

### Wireframes

- Template
  ![Template](/misc/wireframes/template.png)

- Homepage
  ![Home Page](/misc/wireframes/HomePage.png)

- Search Results
  ![Search Result](/misc/wireframes/SearchResults.png)

- Add to Portfolio component
  ![Add To Portfolio](/misc/wireframes/Add.png)

- Watch List
  ![Watch List](/misc/wireframes/WatchList.png)

- Portfolio
  ![Portfolio](/misc/wireframes/Portfolio.png)

- Contact
  ![Contact](/misc/wireframes/Contact.png)

### User Stories

**Home Page**

1. The user should be able to search for any stocks by their tikcer symbol.
2. Upon search, the user should be directed to the Search Results page.

**Search Results**

1. The user should see the name, symbol, previous close price and description of the company that he/she has searched for.
2. The user should see a list of news related to the company.
3. The user should be able to add the company to his/her wish list.
4. The user should be able to add the company to his/her portfolio via the "Add to portfolio" component.

**Add to Portfolio**

1. The user should be able to enter the number of units, the purchase price and purchase date for the stock.
2. The user should be able to click on the Add button to add the information into his/her portfolio.
3. The user should be able to cancel the transaction or close the component.

**Watch List**

1. The user should be able to see the information of the stocks in his/her watchlist.
2. The user should be able to remove a stock from his/her watchlist.
3. The user should be able to search for a new stock from the watchlist page.

**Portfolio**

1. The user should be able to see a summary of all the stocks in his/her portfolio..
2. The user should be able to see detailed information of a stock in his/her portfolio after clicking on it.
3. The user should be able to search for a new stock from the portfolio page.

---

## Planning and Development Process

## Data structure

---

**App**

Data:

1. watchlist: [symbol1, symbol2, symbol3]
2. portfolio: {
   symbol1: {
   symbol: "",
   name: "",
   buyDate: "",
   buyPrice: 0,
   buyUnits: 0,
   }
   }

---

**Home Page**

URL: /

Components: NA

1. SearchBar

---

**Search Results**

URL: /search/:symbol

Components:

1. SearchBar
2. BigInfoCard
3. NewsCard
4. AddStock (hidden)

Props

1. Name
2. Symbol

---

**Add to Portfolio**

URL: NA

Components: NA

---

**Watch List**

URL: /watchlist/:symbol

Components:

1. SearchBar
2. DetailedStock

---

**Portfolio**

URL: /portfolio/:symbol

Components:

1. SearchBar
2. SummaryStock
3. SmallInfoCard

Props

1. Name
2. Symbol
3. Other stock info

---

**Contact**

URL: /contact

---

### Problem-Solving Strategy

-

### Unsolved problems

-

## APIs Used

- 

## Acknowledgments

---

## References
