import React from "react";
import baby from "../images/baby.png";
import { AiFillLock } from "react-icons/ai";
import Countdown from "react-countdown";
const Cart = () => {
  return (
    <div style={{ background: "#172A4B" }} className=" rounded-3xl p-3">
      <div className=" flex items-center w-full justify-between">
        <img src={baby} className=" h-12 rounded-full" alt="" />
        <div className=" flex items-center gap-2">
          <button className=" bg-tr text-white py-1 text-xs px-2 rounded-sm">
            Audit
          </button>
          <button className=" bg-white text-yellow-600 flex items-center gap-1 font-light text-xs rounded-sm px-2 py-1">
            <AiFillLock /> <p>Upcoming</p>
          </button>
        </div>
      </div>
      <h4 className=" text-white py-2">SOLDAO</h4>
      <p className=" text-white pb-2">1 BNB = 1,055,099.648300117 SOLDAO</p>
      <p className=" text-white">Soft/Hard Cap:</p>
      <h4 className=" text-tr pt-1">100 BNB - 200 BNB</h4>
      <p className=" text-white">Progress (0.00%)</p>
      <div className=" bg-pr w-full h-2 rounded-xl my-2"></div>
      <div className=" flex items-center justify-between text-sr text-xs">
        <p>0 BNB</p>
        <p>200 BNB</p>
      </div>
      <div className=" flex items-center justify-between text-sr text-sm pt-1">
        <p className=" font-semibold">Liquidity %:</p>
        <p>70%</p>
      </div>
      <div className=" flex items-center justify-between text-sr text-sm pt-1">
        <p className=" font-semibold">Lockup Time:</p>
        <p>3650 days</p>
      </div>
      <div className=" flex items-center justify-between  pt-3">
        <div className=" text-white">
          <p className=" text-xs text-tr">Sale Starts In:</p>
          <Countdown date={Date.now() + 100000000} />
        </div>
        <div className=" text-white">
          <button className=" bg-pr text-white py-2 px-3 rounded-md flex items-center gap-1">
            View Pool
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
