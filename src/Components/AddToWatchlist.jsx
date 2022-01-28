function AddToWatchlist(props) {
  return (
    <div className="border-orange-400 border w-1/2 mx-auto mt-5 rounded-2xl shadow-lg bg-white p-3">
      <h2 className="font-extrabold text-orange-400 text-xl md:text-3xl pb-2">
        Add to Watchlist
      </h2>
      <span className="text-orange-400 font-bold">
        {props.info.name} ({props.info.symbol})
      </span>{" "}
      has been added to your Watchlist.
      <div className="buttons flex justify-around p-2">
        <button
          onClick={props.fnCancel}
          className="py-1 w-24 text-white bg-green-300 hover:bg-green-500 hover:font-extrabold  rounded-full"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AddToWatchlist;
