import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CommentIcon from "@mui/icons-material/Comment";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-gray-500 text-white h-[100vh] p-3 flex-[1] sticky left-0 top-0">
      <h1 className="text-2xl border-b pb-2 mb-5">Welcome To Dashboard</h1>
      <ul className="sideBar">
        <li>
          <Link to={"/"} className="sideBarItems" href="">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/products"} className="sideBarItems" href="">
            <ProductionQuantityLimitsIcon />
            Products
          </Link>
        </li>
        <li>
          <Link to={"/comments"} className="sideBarItems" href="">
            <CommentIcon />
            Comments
          </Link>
        </li>
        <li>
          <Link to={"/users"} className="sideBarItems" href="">
            <GroupOutlinedIcon />
            Users
          </Link>
        </li>
        <li>
          <Link to={"/orders"} className="sideBarItems" href="">
            <WorkOutlineIcon />
            Orders
          </Link>
        </li>
        <li>
          <Link to={"/disCounts"} className="sideBarItems" href="">
            <DiscountOutlinedIcon />
            DisCounts
          </Link>
        </li>
      </ul>
    </div>
  );
}
