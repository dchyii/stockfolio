function ConfirmRemove(props) {
  console.log(props.info);
  console.log(props.list);

  return (
    <div
      style={{ display: props.display ? "" : "none" }}
      className="border-orange-400 border w-1/2 mx-auto"
    >
      <h1>Confirmation</h1>
      <p>
        You are about to remove {props.info.name} ({props.info.symbol}) from
        your {props.list}.
      </p>
      <br />
      <p>Do you wish to proceed?</p>
      <br />
      <div id="buttons" className="flex justify-around">
        <button>Cancel</button>
        <button className="text-red-600">Proceed</button>
      </div>
    </div>
  );
}

export default ConfirmRemove;
