import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import "./layout.css";
import TopBanner from "./topBanner";

export default function Layout() {
  return (
    <div className="app-container">
      <div className="top-banner">
        <TopBanner />
      </div>
      <div className="render-section">
        <div className="left-section">
          <NavBar />
        </div>
        <div className="right-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
