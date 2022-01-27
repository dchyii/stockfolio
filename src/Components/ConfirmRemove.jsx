function ConfirmRemove(props) {
  const removedStock = props.info.symbol;

  return (
    <div
      // style={{ display: props.display ? "" : "none" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h2>Confirmation</h2>
      <p>
        You are about to remove {props.info.name} ({props.info.symbol}) from
        your {props.list}.
      </p>
      <p>Do you wish to proceed?</p>
      <div className="buttons flex justify-around">
        <button onClick={props.fnCancel}>Cancel</button>
        <button
          onClick={() => props.fnRemove(removedStock)}
          className="text-red-600"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

export default ConfirmRemove;
