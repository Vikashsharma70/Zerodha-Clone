import React from "react";

export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href=""> Track Ticket</a>
      </div>

      <div className="row p-5 ">
        <div className="col-6 ">
          <h4 className='text-start'>Search for an answer or browse help topics to create a ticket</h4>
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Eg. how do I activate F&0"  aria-describedby="button-addon2"/>
  <button class="btn btn-outline-primary" type="button" id="button-addon2">Button</button>
</div>

          {/* Eg. how do I activate F&0 */}
          <br />

          
          <a className='text-white' href="">Track account opening</a> <br />
          <a className='text-white' href="">Track segment activation</a> <br />
          <a className='text-white' href="">Intraday margins</a> <br />
          <a className='text-white' href="">Kite user manual</a>
        </div>
        <div className="col-6 ">
          <h4>Featured</h4>
          <a className='text-white' href="">Current Takeovers and Delisting January 2024</a><br />
          <a className='text-white' href="">Latest Intraday leverages MIS & CO</a>
        </div>
      </div>

      {/* <div className="row">
        <div className="col-6">
          <h4 className="text-start ">
            Search for an answer or browse help topics to create  a ticket
          </h4>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control mt-3"
              
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary mt-3"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>
        </div> */}
      {/* <div className="col-6">
          <h3>Featured</h3>
        </div> */}
      {/* </div> */}
    </section>
  );
}
