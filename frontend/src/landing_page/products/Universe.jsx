import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-4 mb-4">The Zerodha Universe</h1>
        <p className="mb-5 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-4">
            Our asset management venture
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media/images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="https://zerodha.com/static/images/partners/tijori.svg"
            alt="smallcaseLogo"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-2">
            Investment research platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="sensibullLogo"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "50%" }}
          />
          <p className="text-small text-muted mt-2">
            Thematic investing platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted mt-2">
            Personalized advice on life
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
