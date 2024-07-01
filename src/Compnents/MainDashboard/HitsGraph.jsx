import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const pdata = [
  {
    Hits: 3,
    Month: "Jan",
  },
  {
    Hits: 8,
    Month: "Feb",
  },
  {
    Hits: 22,
    Month: "Mar",
  },
  {
    Hits: 83,
    Month: "Apr",
  },
  {
    Hits: 12,
    Month: "May",
  },
  {
    Hits: 84,
    Month: "Jun",
  },
  {
    Hits: 84,
    Month: "Jul",
  },
  {
    Hits: 72,
    Month: "Aug",
  },
  {
    Hits: 23,
    Month: "Sep",
  },
  {
    Hits: 43,
    Month: "Oct",
  },
  {
    Hits: 313,
    Month: "Nov",
  },
  {
    Hits: 43,
    Month: "Dec",
  },
];
const HitsGraph = () => {
  return (

      <div className="bg-white rounded-x border p-5 space-x-1 rounded-xl shadow">
        {/* left section for details */}
        <div className="flex space-x-4 h-10 ">
          <p className="  flex bg-gray-100/60 items-center rounded-md px-2 text-blue-400 space-x-1">
            <span>
              <MdOutlineCalendarMonth />
            </span>
            <span> This month</span>
          </p>
          <div className="bg-gray-100/60 items-center flex spa md:px-2 rounded-lg ">
            <p className="  md:text-[20px] text-gray-700 font-bold md:font-semibold">329</p>
            <p className="text-gray-500  md:font-medium md:text-sm ">Total hits</p>
          </div>
        </div>

        {/* right section for graph */}
        <div className=" mt">
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={pdata}>
              <XAxis dataKey="Month" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="Hits" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
  );
};

export default HitsGraph;
