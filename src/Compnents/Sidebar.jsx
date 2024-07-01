import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";

const routes = [
  { path: "/", label: "Dashboard", icon: MdDashboard },
  { path: "/mobile", label: "Mobiles", icon: FaMobileScreenButton },
  { path: "/brands", label: "Brands", icon: IoMdPricetag },
  { path: "/news", label: "News", icon: GiNewspaper },
  { path: "/users", label: "User's", icon: FaUsers },
  { path: "/ads", label: "Ads", icon: MdAdsClick },
];
const Sidebar = () => {
  return (
    <div>
      <div className="logoName">
        <Link to="/" className=" ">
          Mobile<span className="font-normal">Mate</span>
        </Link>
      </div>
      <div className="btnsContainer">
        {routes.map((route) => (
          <Link to={route.path} className=" sideBarbutton">
            {React.createElement(route.icon, { size: 25 })}

            <span>{route.label}</span>
          </Link>
        ))}
      </div>
      {/* <div className="btnsContainer">
        <button className="sideBarbutton">
          <Link to="/" className="sideBarLinks">
            <MdDashboard size={25} /> <span>Dashboard</span>
          </Link>
        </button>
        <button className="sideBarbutton">
          <Link to="/mobile" className="sideBarLinks">
            <FaMobileScreenButton size={25} /> <span>Mobile</span>
          </Link>
        </button>
        <button className="sideBarbutton">
          <Link to="/brands" className="sideBarLinks">
            <IoMdPricetag size={25} /> <span>Brands</span>
          </Link>
        </button>
        <button className="sideBarbutton">
          <Link to="/news" className="sideBarLinks">
            <GiNewspaper size={25} /> <span>News</span>
          </Link>
        </button>
        <button className="sideBarbutton">
          <Link to="/users" className="sideBarLinks">
            <FaUsers size={25} /> <span>User's</span>
          </Link>
        </button>
        <button className="sideBarbutton ">
          <Link to="/ads" className="sideBarLinks">
            <MdAdsClick size={25} /> <span>Ad's</span>
          </Link>
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
