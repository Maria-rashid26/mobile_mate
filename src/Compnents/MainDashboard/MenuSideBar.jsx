import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaMobileScreenButton } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { GiNewspaper } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { FaQuestionCircle } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";

const MenuSideBar = ({ setSidebarOpen }) => {
  const handleRemoveMenu = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="px-4">
      <button
        onClick={handleRemoveMenu}
        className="text-[16px]  font-semibold ml-32 mt-2 rounded-md hover:bg-gray-100  w-[30px] text-blue-900 duration-300"
      >
        x
      </button>

      <div  className="border-b text-blue-900 py-3 ">
        <Link to="/" className="font-bold text-[18px] px-4 ">
          Mobile<span className="font-normal">Mate</span>
        </Link>
      </div>
      <div  className="space-y-1 py-4 text-gray-500 text-[12px] ">
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/" className="flex items-center space-x-3">
            <MdDashboard size={15} /> <span>Dashboard</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/mobile" className="flex items-center space-x-3">
            <FaMobileScreenButton size={15} /> <span>Mobile</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/brands" className="flex items-center space-x-3">
            <IoMdPricetag size={15} /> <span>Brands</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/news" className="flex items-center space-x-3">
            <GiNewspaper size={15} /> <span>News</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/users" className="flex items-center space-x-3">
            <FaUsers size={15} /> <span>User's</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/about" className="flex items-center space-x-3">
            <FaCircleInfo size={15} /> <span>About</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/services" className="flex items-center space-x-3">
            <GrServices size={15} /> <span>Services</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/faq" className="flex items-center space-x-3">
            <FaQuestionCircle size={15} /> <span>FAQ's</span>
          </Link>
        </button>
        <button onClick={handleRemoveMenu} className="MenuSideBarbtn">
          <Link to="/ads" className="sideBarLinks">
          <MdAdsClick size={15} /> <span>Ad's</span>
          </Link>
        </button>
       
      </div>
    </div>
  );
};

export default MenuSideBar;
