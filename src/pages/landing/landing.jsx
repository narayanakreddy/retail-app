import React, { useEffect } from "react";
import "./landing.css";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../../assests/images/logo/logo.svg";
import infoIcon from "../../assests/images/landing/info.svg";
import secureIcon from "../../assests/images/landing/secure.svg";
import cardIcon from "../../assests/images/landing/card.svg";
import mobileApp from "../../assests/images/landing/mobileApp.svg";
import sliderGroup from "../../assests/images/landing/slider_Group.svg";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="landing-section">
        <div className="landing-top-banner">
          <img height={50} src={LOGO} />
          <div>
            <Link to={"/"}>Exchane Rates</Link>
            <Link to={"/"}>Loan Eligibility</Link>
            <Link to={"/"}>Locate Us</Link>
          </div>
          <div>
            <Button
              onClick={() => navigate("/login")}
              size="large"
              type="default"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/signUp")}
              size="large"
              type="primary"
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className="landing-slider">
          <div className="slider-wrapper">
            <div className="row">
              <div className="col-6">
                <h1>Life Should Be Easy. </h1>
                <p>
                  Financial transactions remotely using a mobile device such a
                  smartphone or tablet.
                </p>
                <Button size="large"  onClick={() => navigate("/login")}>Get Started</Button>
              </div>
              <div className="col-6">
                <img height={460} src={sliderGroup} />
              </div>
            </div>
          </div>
        </div>
        <div className="landing-how-its-works">
          <h2>How it works</h2>
          <p>
            Mobile Banking differ from mobile payment, which involves the use of
            a mobile device
          </p>

          <div className="row">
            <div className="col-4">
              <img src={infoIcon} />
              <h4>Information</h4>
              <span>
                Mobile Banking differ from mobile payment, which involves the
                use of a mobile device
              </span>
            </div>

            <div className="col-4">
              <img src={secureIcon} />
              <h4>Data Secure</h4>
              <span>
                Mobile Banking differ from mobile payment, which involves the
                use of a mobile device
              </span>
            </div>

            <div className="col-4">
              <img src={cardIcon} />
              <h4>Add Cards</h4>
              <span>
                Mobile Banking differ from mobile payment, which involves the
                use of a mobile device
              </span>
            </div>
          </div>
        </div>

        <div className="landing-app-info">
          <div className="row">
            <div className="col-7" align="right">
              <img height={750} src={mobileApp} />
            </div>
            <div className="col-5">
              <h1>Download Mobile App</h1>
              <p>
                Download mobile banking app for IOS or Android. It help you
                banking quickly and more smartly.
              </p>
              <div className="auth-card"></div>
              <div className="auth-card"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-footer"></div>
    </>
  );
}
