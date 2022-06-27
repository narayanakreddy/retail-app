import { Carousel, Col, Row } from "antd";

import React from "react";
import { Outlet } from "react-router";
import './auth.css'
import LOGO from "../../assests/images/logo/logo.svg";


export default function AuthWrapper() {
  return (
    <div className="auth-container">
      <div className="auth-render-section">
      <img height={45} src={LOGO} style={{marginBottom:20}} />
        <Outlet />
      </div>
    </div>
  );
}
