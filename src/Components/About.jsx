function Contact() {
  return (
    <div className="pt-5 w-10/12 mx-auto">
      <h2 className="font-extrabold text-orange-400 text-3xl pb-2">About</h2>
      <p>
        StockFolio is a research and tracking application for your investment
        needs. The app allows you to search for any stocks listed in the US
        Stock Exchanges, research on their profile and related news, add them to
        your Watchlist to monitor the prices, and add to your portfolio to track
        your investment returns.
      </p>
      <br />
      <p>This site is created using ReactJS.</p>
      <h3 className="font-extrabold text-orange-400 text-xl p-3">Credits</h3>
      <table className="table-auto w-fit mx-auto">
        <tbody>
          <tr>
            <td className="w-1/2 pr-2 text-right">API</td>
            <td className="w-1/2 pl-2 text-left">
              <a
                href="https://polygon.io/"
                className="hover:text-blue-500 hover:underline"
              >
                polygon.io
              </a>
            </td>
          </tr>
          <tr>
            <td className="w-1/2 pr-2 text-right align-text-top">
              Libraries / Frameworks
            </td>
            <td className="w-1/2 pl-2 text-left">
              ReactJS <br />
              Tailwind CSS <br />
              dayjs <br />
              react-loader-spinner <br />
              react-number-format <br />
            </td>
          </tr>
        </tbody>
      </table>
      <h3 className="font-extrabold text-orange-400 text-xl p-3">Disclaimer</h3>
      <p>
        All information presented in this site are extracted from{" "}
        <a
          href="https://polygon.io/"
          className="hover:text-blue-500 hover:underline"
        >
          polygon.io
        </a>
        . StockFolio does not guarantee the accuracy of the data presented.
        Please do your due diligence and research before investing.
      </p>
      <br />
      <p>
        The API is limited to 5 calls per minute. If you encounter any errors,
        please wait for approximately 1 min before trying again. Some pages may
        make more than 1 API calls on load.
      </p>
      <br />
      <p>
        This is a pure font-end application. There is no backend integration.
        Hence, all data will be wiped upon refresh.
      </p>
    </div>
  );
}

export default Contact;
