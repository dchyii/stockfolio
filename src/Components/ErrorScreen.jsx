function ErrorScreen() {
  return (
    <div className="w-full h-full grid place-content-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-orange-400 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-3xl font-extrabold text-orange-400">Oops!</h2>
        <p>There is an error loading the data. Please try again after 1 min.</p>
      </div>
    </div>
  );
}

export default ErrorScreen;
