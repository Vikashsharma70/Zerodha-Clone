import React from 'react'

export default function RightSection({
  imageURL,
  productName,
  productDiscription,
  learnMore,
  
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        

        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div className='mt-3 '>
            <a href={learnMore} className='text-decoration-none'>{learnMore} <i class="fa-solid fa-arrow-right-long"></i></a>
          </div>
          
        </div>


        <div className="col-6 p-3">
          <img src={imageURL} alt="product image" />
        </div>
      </div>
    </div>
  );
}
