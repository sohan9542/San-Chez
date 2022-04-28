import React from "react";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";
const Trending = () => {
  return (
    <div className=" py-2 px-2 flex items-start lg:flex-col lg:h-full  overflow-x-scroll lg:overflow-x-hidden  lg:w-32 w-screen">
      <div className=" flex items-center gap-1 px-2 text-sr">
        <BiTrendingUp className=" text-tr w-5 h-5" />
        Trending
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #1
        <Link to="/launchpad/create" className=" text-tr text-sm">
          BESTAPY
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #2
        <Link to="/launchpad/create" className=" text-tr text-sm">
          RDfi
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #3
        <Link to="/launchpad/create" className=" text-tr text-sm">
          ALCA
        </Link>
      </div>
      <div className=" flex items-center gap-1  px-2 text-sr text-lg">
        #4
        <Link to="/launchpad/create" className=" text-tr text-sm">
          USB
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #5
        <Link to="/launchpad/create" className=" text-tr text-sm">
          GM{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #6
        <Link to="/launchpad/create" className=" text-tr text-sm">
          INFINITY{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #7
        <Link to="/launchpad/create" className=" text-tr text-sm">
          {" "}
          UWE{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #8
        <Link to="/launchpad/create" className=" text-tr text-sm">
          BONK{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #9
        <Link to="/launchpad/create" className=" text-tr text-sm">
          BONK{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #10
        <Link to="/launchpad/create" className=" text-tr text-sm">
          HBTT{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1  px-2 text-sr text-lg">
        #11
        <Link to="/launchpad/create" className=" text-tr text-sm">
          PNFT{" "}
        </Link>
      </div>
      <div className=" flex items-center gap-1 px-2 text-sr text-lg">
        #12
        <Link to="/launchpad/create" className=" text-tr text-sm">
          BMD{" "}
        </Link>
      </div>
    </div>
  );
};

export default Trending;
