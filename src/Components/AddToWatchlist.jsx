function AddToWatchlist(props) {
  // console.log("inside", props.info);

  // let text = <p></p>;

  // if (props.index !== -1) {
  //   text = (
  //     <p>
  //       {props.info.name} ({props.info.symbol}) has been added to your Watchlist
  //       previously.
  //     </p>
  //   );
  // } else {
  //   text = (
  //     <p>
  //       {props.info.name} ({props.info.symbol}) has been added to your
  //       Watchlist.
  //     </p>
  //   );
  // }

  return (
    <div
      // style={{ display: props.display ? "" : "none" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h2>Add to Watchlist</h2>
      {/* {text} */}
      {props.info.name} ({props.info.symbol}) has been added to your Watchlist.
      <div className="buttons flex justify-around">
        <button onClick={props.fnCancel} className="text-green-600">
          OK
        </button>
      </div>
    </div>
  );
}

export default AddToWatchlist;
