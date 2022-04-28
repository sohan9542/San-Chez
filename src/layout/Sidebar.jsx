import React, { useState } from "react";
import { GiQueenCrown } from "react-icons/gi";
import { MdChromeReaderMode } from "react-icons/md";

import { RiArrowDownSLine } from "react-icons/ri";
import { BsFillFileEarmarkRichtextFill,BsTelegram } from "react-icons/bs";
import { SiSemanticuireact } from "react-icons/si";
import {

  IoIosArrowUp,
} from "react-icons/io";
import { GiFruitTree,GiAbstract036 } from "react-icons/gi";
import { AiOutlineDropbox,AiTwotoneAlert ,AiOutlineFileProtect,AiFillTwitterCircle} from "react-icons/ai";

import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const [loaunchpad, setLoaunchpad] = useState(false);
  const [pinkpad, setPinkpad] = useState(false);
  const [dxllock, setDxllock] = useState(false)
  const [dxldrop, setDxldrop] = useState(false)
  return (
    <div className="fixed w-52 top-20  shadow-lg z-50 bg-pr min-h-screen">
      <div className="w-full  flex py-4 flex-col items-center gap-1">
  
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setLoaunchpad(!loaunchpad)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <MdChromeReaderMode /> Trade
            </div>
            {!loaunchpad ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {loaunchpad && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/"
              >
               Simple Mode
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/classic-mode"
              >
                Classic Mode
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/limit-order"
              >
                Limit order
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/p2p-deal"
              >
                {" "}
                P2P Deal
              </NavLink>
            </div>
          </div>
        )}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setPinkpad(!pinkpad)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <GiFruitTree /> DAO
            </div>
            {!pinkpad ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {pinkpad && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/stacking"
              >
                Stacking
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/liquidy-protocol"
              >
                Liquidy Protocol
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/agg-protocol"
              >
                Aggregation protocol
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/forum"
              >
                Forum
              </NavLink>
            </div>
          </div>
        )}

        {/* DxL lock */}
        <div className="w-full  flex items-center justify-center">
          <div
            onClick={() => setDxllock(!dxllock)}
            className="py-2 cursor-pointer flex items-center justify-between px-2 text-white hover:text-tr w-full"
          >
            <div className="flex items-center gap-2">
              <GiAbstract036 /> Earn
            </div>
            {!dxllock ? (
              <IoIosArrowUp />
            ) : (
              <RiArrowDownSLine className="h-5 w-5" />
            )}
          </div>
        </div>
        {dxllock && (
          <div className="w-full flex items-center flex-col text-sm">
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/stratigies"
              >
                Stratigies
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/pools"
              >
                Pools
              </NavLink>
            </div>
            <div className="w-full pl-1 flex items-center justify-center">
              <NavLink
                exact
                activeClassName="hvr tc w-full"
                className="py-2 flex items-center gap-2 pl-7 text-white hover:text-sr w-full"
                to="/earnings"
              >
                Earnings
              </NavLink>
            </div>
          </div>
        )}



 
      </div>
    
    </div>
  );
};

export default Sidebar;
