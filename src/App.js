import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mobile from "./Compnents/MainDashboard/Mobile";
import News from "./Compnents/MainDashboard/News";
import Brands from "./Compnents/MainDashboard/Brands";
import Users from "./Compnents/MainDashboard/Users";
import HitsGraph from "./Compnents/MainDashboard/HitsGraph";
import MobileDetails from "./Compnents/MainDashboard/MobileDetails";
import Navbar from "./Compnents/Navbar";
import MainDashboard from "./Compnents/MainDashboard/MainDashboard";
import Sidebar from "./Compnents/Sidebar";
import About from "./Compnents/MainDashboard/About";
import Services from "./Compnents/MainDashboard/Services";
import FAQ from "./Compnents/MainDashboard/FAQ";
import Profile from "./Compnents/MainDashboard/Profile";
import MenuSideBar from "./Compnents/MainDashboard/MenuSideBar";
import Ads from "./Compnents/MainDashboard/Ads";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="flex bg-gray-100 w-full h-screen  ">
        {/* menu  sidebar  below md screen start*/}
        {sidebarOpen ? (
          <div className="fixed z-20 w-48 bg-white h-full md:block">
            <MenuSideBar setSidebarOpen={setSidebarOpen} />
          </div>
        ) : null}

        {/* menu  sidebar  below md screen ends*/}

        {/* main dashboard sidebar start */}
        <div
          className={`fixed w-64 bg-white h-full hidden md:block shadow-xl shadow-gray-500`}
        >
          <Sidebar />
        </div>

        <div
          className={`flex-1 flex flex-col transition-all duration-300  md:ml-64 px-8 `}
        >
          {/* main dashboard sidebar ends */}

          {/* navbar  starts */}
          <Navbar toggleSidebar={toggleSidebar} />
          {/* navbar  ends */}

          {/* main dashbaord section starts */}
          <div className=" mt-2  text-[13px] md:text-[1rem] mb-7 flex-1 overflow-auto bg-gray-100  flex justify-between md:w-[100%] ">
            <div
              className="border-2 py-3 border-fuchsia-950 
                w-full px-3 overflow-x-hidden"
            >
              <Routes>
                <Route path="/" element={<MainDashboard />} />
                <Route path="/mobile" element={<Mobile />} />
                <Route path="/news" element={<News />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/users" element={<Users />} />
                <Route path="/hitsgraph" element={<HitsGraph />} />
                <Route path="/mobiledetails" element={<MobileDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/users" element={<Users />} />
                <Route path="/ads" element={<Ads/>} />
              </Routes>
            </div>
            {/* main dashbaord section ends */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
