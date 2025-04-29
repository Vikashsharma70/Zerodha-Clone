import React from "react";

export default function Team() {
  return (
    <div className="container mb-5">
      <div className="row p-5 ">
        <h1 className="fs-1 text-center">People</h1>
      </div>

      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-5 text-center">
          <img
            src="../assets/nithinKamath.jpg"
            alt="Hero Image"
            className="rounded-circle"
            style={{ width: "60%" }}
          />
          <div className="text-center">
            <p className="fs-4">Nithin Kamath</p>
            <p className="fs-6">Founder, CEO</p>
          </div>
        </div>
        <div className="col-7 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none">
              HomePage
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              {" "}
              Trading QnA
            </a>
            /{" "}
            <a href="" className="text-decoration-none">
              {" "}
              Trading QnA
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
