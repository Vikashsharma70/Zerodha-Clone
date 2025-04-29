import React from "react";

export default function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h4 className="mt-5 mb-5 p-5">
          Want to know more about our technology stack? Check out the{" "}
          <a href="" className="text-decoration-none">
            Zerodha.tech{" "}
          </a>
          Zerodha.tech blog.
        </h4>

        <h1 className="p-5">The Zerodha Universe</h1>
        <h5>
          Extend your trading and investment experience even further with our
          partner platforms
        </h5>

        <div className="col-4 p-5">
          <img src="../assets/company.png" alt="" />
        </div>


      </div>
      
     <h1 className="text-center">
     <button className='p-2 btn btn-primary fs-5 mb-5 text-center' style={{width:'20%',margin:'0 auto'}} >Sign up for free</button>

     </h1>
    </div>
  );
}
