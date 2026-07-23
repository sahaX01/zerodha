import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-3">
        <h1 className="fs-4">Zerodha Products</h1>
        <h4 className="text-muted mt-3 fs-6">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="fs-8 mt-2 mb-5">
          Check out our{" "}
          <a href="">
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
