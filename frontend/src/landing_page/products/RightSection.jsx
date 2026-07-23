import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5" style={{marginTop:"400px"}}>
          <h1 className="fs-4">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>learMore<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="image"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
