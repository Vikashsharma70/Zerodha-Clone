import React from "react";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Charges</h1>
        <h3 className="text-muted mt-3"> List of all charges and taxes</h3>
      </div>

      <div className="row">
        <div className="col-4 p-5">
          <img
            src="../assets/pricing0.svg"
            alt="Hero Image"
            className="mb-5 "
          />
          <h2> Free equity delivery</h2>
          <p className="text-muted mt-3">
            {" "}
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="../assets/intradayTrades.svg"
            alt="Hero Image"
            className="mb-5 "
          />
          <h2> Intraday and F&O trades</h2>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across <br /> equity, currency,
            and commodity trades.Flat <br /> ₹20 on all option trades.{" "}
          </p>
        </div>
        <div className="col-4 p-5">
          <img
            src="../assets/pricing0.svg"
            alt="Hero Image"
            className="mb-5 "
          />
          <h2>Free direct MF </h2>
          <p className="text-muted mt-3">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
