import React from "react";
import profileImg from "../../../assets/Images/eaf2e3_bc005b0cde8242f5a41db915a96544a8mv2.webp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <img
          className="w-14 h-14 object-cover rounded-full border border-black"
          src={profileImg}
          alt=""
        />
        <div>
          <h4 className="text-xl">Mohammad nosrati</h4>
          <span className="text-sm">Front-end developer</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className=" w-96 relative flex items-center shadow-normal rounded-lg overflow-hidden">
          <input
            className="py-2 ps-2 outline-none w-[75%]"
            type="text"
            placeholder="Something ..."
          />
          <button className="bg-gray-500 text-white px-3 py-1 absolute right-1 rounded-lg">
            Search
          </button>
        </div>
        <button className="headerBtn">
          <NotificationsNoneOutlinedIcon />
        </button>
        <button className="headerBtn">
          <LightModeOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
