import React from 'react'

export default function LeftSection({
  imageURL,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
  
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt="product image" />
        </div>

        <div className="col-6 mt-5">
          <h1>{productName}</h1>
          <p>{productDiscription}</p>
          <div className='mt-3 '>
            <a href={tryDemo} className='text-decoration-none'>{tryDemo}</a>
            <a href={learnMore } className='text-decoration-none' style={{marginLeft:'50px'}}>{learnMore} </a>
          </div>

          <div className='mt-3 mt-4 '>
            <a href={playStore}>
              <img src="../assets/googlePlayBadge.svg" />
            </a>{" "}
            <a href={appStore}>
              <img src="../assets/appstoreBadge.svg" style={{marginLeft:'50px'}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
