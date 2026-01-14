import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import { siteData } from "../data/siteData";
import ScrollToHash from "./ScrollToHash";

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#f2f1ee] text-gray-900 font-sans">
      <ScrollToHash />
      <Header brand={siteData.brand} />
      <Outlet />
      <Footer data={siteData} />
    </div>
  );
}
