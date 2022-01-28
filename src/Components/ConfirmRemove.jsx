function ConfirmRemove(props) {
  const removedStock = props.info.symbol;

  return (
    <div className="border-orange-400 border w-4/5 lg:w-1/2 mx-auto mt-5 rounded-2xl shadow-lg bg-white p-3">
      <h2 className="font-extrabold text-orange-400 text-xl md:text-3xl pb-2">
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
      <div className="w-10/12 md:w-1/2 mx-auto">
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
    </div>
  );
}

export default ConfirmRemove;
