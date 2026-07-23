import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="text-white">
          Track Tickets
        </a>
      </div>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input type="text" placeholder="Eg. how do i active F&O," /> <br/>
          <a href="" class="supportlink">Track account opening</a>
          <a href="" class="supportlink">Track segment activation</a>
          <a href="" class="supportlink">Intraday margin</a>
          <a href="" class="supportlink">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest IntraDay leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
