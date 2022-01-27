function NoResults() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-red-600 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-3xl font-extrabold text-red-600">Oops!</h2>
        <p>No results found. Did you enter the correct ticker symbol?</p>
      </div>
    </div>
  );
}

export default NoResults;
