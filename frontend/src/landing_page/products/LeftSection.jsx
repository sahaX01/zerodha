import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5">
          <img src={imageURL} alt="image" className='p-1'/>
        </div>
        <div className="col p-5 mt-5">
          <h1 className='fs-4'>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          <div className='mt-5'>
            <a href={googlePlay}>
              {" "}
              <img
                src="media/images/googlePlayBadge.svg"
                alt="googlePlayBadge"
              />{" "}
            </a>
            <a href={appStore} style={{marginLeft:"50px"}}>
              {" "}
              <img
                src="media/images/appstoreBadge.svg"
                alt="appstoreBadge"
              />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
