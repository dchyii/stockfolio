function AddToWatchlist(props) {
  console.log("inside", props.info);
  console.log("watchlist", props.watchlist);

  const index = props.watchlist.findIndex(
    (stock) => stock.symbol === props.info.symbol
  );

  console.log("index", index);

  let text = <p> </p>;

  if (index !== -1) {
    text = (
      <p>
        {props.info.name} ({props.info.symbol}) has been added to your Watchlist
        previously.
      </p>
    );
  } else {
    //   props.fnAdd();
    text = (
      <p>
        {props.info.name} ({props.info.symbol}) has been added to your
        Watchlist.
      </p>
    );
  }

  return (
    <div
      // style={{ display: props.display ? "" : "none" }}
      style={{ display: "" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h2>Add to Watchlist</h2>
      <p>Company (symbol) has been added to your watchlist.</p>
      {text}
      <div className="buttons flex justify-around">
        <button onClick={props.fnCancel} className="text-green-600">
          OK
        </button>
      </div>
    </div>
  );
}

export default AddToWatchlist;
