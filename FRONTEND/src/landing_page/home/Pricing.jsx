import React from 'react'

export default function Pricing() {
  return (
    <div className='container'>
      <div className="row mt-5 p-5">
        <div className="col-4">
          <h1 className='mb-3 '>Unbeatable pricing</h1>
          <p className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <div className="mt-3">
            <a href="" className="fs-5 text-decoration-none">See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-4 border">
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity delivery and <br />direct mutual funds</p>
            </div>
            <div className="col p-4 border">
              <h1 className='mb-3'>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
