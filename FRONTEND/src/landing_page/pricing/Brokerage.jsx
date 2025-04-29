import React from "react";

export default function Brokerage() {
  return (
    <div className="container p-5">
      <div className="row mb-3">
        <h2>Charges for account opening</h2>
      </div>
      <div className="row border border-secondary">
        <div className="col-10">
          <p>Type of account</p>
        </div>
        <div className="col-2">
          <p>Charges</p>
        </div>
      </div>


      <div className="row border border-dark">
        <div className="col-10">
          <p>Online account</p>
          <p>Offline account</p>
          <p>NRI account (offline only)</p>
          <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
        </div>
        <div className="col-2 mt-1">
        <div style={{backgroundColor:"rgb(80, 200, 120)", width:"3rem"}}>
             <p className='text-center '>Free</p>
          </div>
          <div style={{backgroundColor:"rgb(80, 200, 120)", width:"3rem"}}>
             <p className='text-center '>Free</p>
          </div>
          <p>	₹ 500</p>
          <p>	₹ 500</p>
        </div>
      </div>
    </div>
  );
}
