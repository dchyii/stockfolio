import { TailSpin } from "react-loader-spinner";

function LoadScreen() {
  return (
    <div className="w-full h-full grid place-content-center">
      <TailSpin ariaLabel="loading-indicator" color="orange" />
    </div>
  );
}

export default LoadScreen;
