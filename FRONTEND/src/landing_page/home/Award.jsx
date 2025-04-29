import React from "react";

export default function Award() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <div className="col-6 p-5">
            <img src="../assets/largestBroker.svg" />
          </div>
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 p-3">
              <ul className="p-3">
                <li className="mb-2">Futures and Options</li>
                <li className="mb-2">Commodity derivatives</li>
                <li className="mb-2">Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6 p-3">
              <ul>
                <li className="mb-2">Stocks & IPOs</li>
                <li className="mb-2">Direct mutual funds</li>
                <li className="mb-2">Bonds and Gov...</li>
              </ul>
            </div>
          </div>
          <img src="../assets\pressLogos.png" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}
