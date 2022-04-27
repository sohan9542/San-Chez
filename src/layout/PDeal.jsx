import React, { useState } from "react";
import {
  AiOutlineReload,
  AiFillPushpin,
  AiOutlinePushpin,
} from "react-icons/ai";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSettings, GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

const currency = [
  {
    id: 1,
    name: "Etherium",
    avatar: "https://app.1inch.io/assets/images/network-logos/ethereum.svg",
  },
  {
    id: 2,
    name: "BNB Chain",
    avatar:
      "https://app.1inch.io/assets/images/network-logos/binance-light_2.svg",
  },
  {
    id: 3,
    name: "Polygon",
    avatar: "https://app.1inch.io/assets/images/network-logos/polygon.svg",
  },
  {
    id: 4,
    name: "Optimizm",
    avatar: "https://app.1inch.io/assets/images/network-logos/optimism.svg",
  },
];
const Pin = () => {
  const [pin, setPin] = useState(false);
  return (
    <div className=" flex items-center gap-2">
      <h5 className=" text-white font-bold">0</h5>
      {pin === false ? (
        <AiOutlinePushpin onClick={() => setPin(true)} className="text-tr" />
      ) : (
        <AiFillPushpin onClick={() => setPin(false)} className="text-tr" />
      )}
    </div>
  );
};
const Pdeals = () => {
  const [active, setActive] = useState(true);
  const [ibound, setIbound] = useState(1);
  const [searh, setSearh] = useState(false);
  return (
    <div className=" min-h-screen w-full flex items-center flex-col justify-center">
      {searh === false && (
        <>
          <div className=" bg-sr w-1/3 rounded-3xl p-3">
              <div className=" w-full flex items-center justify-between">
                <div className=" flex items-center gap-2">
       
                  <Link
                    to="/"
                    className=" font-semibold text-tr hover:text-white cursor-pointer"
                  >
                    Swap
                  </Link>
                  <Link
                    to="/limit-order"
                    className=" font-semibold text-tr hover:text-white cursor-pointer"
                  >
                    Limit
                  </Link>
                  <Link
                    to="/p2p-deal"
                    className=" font-semibold text-white cursor-pointer"
                  >
                    P2P
                  </Link>
              
                </div>
                <div className=" flex items-center gap-2">
                  <AiOutlineReload className=" text-tr w-5 h-5 cursor-pointer hover:text-white" />
                  <GoSettings className=" text-tr w-5 h-5 cursor-pointer transform rotate-90 hover:text-white" />
                </div>
              </div>
              <div className=" rounded-md px-3 py-1 bg-sr mt-2 relative">
                <p className=" text-xs text-tr">You Pay</p>
                <div className=" my-2 w-full flex items-center justify-between">
                  <h1  onClick={() => setSearh(true)} className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                    <img
                      className=" w-8 h-8 rounded-fu8"
                      src="https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                      alt=""
                    />
                    WETH <MdKeyboardArrowDown />
                  </h1>
                  <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                    53443432432.26
                  </h1>
                </div>
                <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
                  <p>Wrapped Ether</p>
                  <p>~$898,930,930</p>
                </div>
              </div>
              <div className=" flex items-center justify-center w-full -m-2">
                <BsArrowDownCircleFill className=" w-5 h-5 text-tr cursor-pointer" />
              </div>
              <div className=" rounded-md px-3 py-1 bg-sr mt-2 relative">
                <p className=" text-xs text-tr">You Buy</p>
                <div className=" my-2 w-full flex items-center justify-between">
                  <h1  onClick={() => setSearh(true)} className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                    <img
                      className=" w-8 h-8 rounded-fu8"
                      src="https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
                      alt=""
                    />
                    DAI <MdKeyboardArrowDown />
                  </h1>
                  <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                    2888.710453
                  </h1>
                </div>
                <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
                  <p>Dai Stablecoin</p>
                  <p>~$2,887</p>
                </div>
              </div>
              <div className=" rounded-md px-3 py-1 bg-sr mt-2 relative">
                <p className=" text-xs text-tr">
                  WETH per DAI <span className=" text-red-400">(-100%)</span>
                </p>

                <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
                  <p className=" p-1 rounded-md bg-br cursor-pointer">-1%</p>
                  <p className="    text-lg text-white">35.50255</p>
                  <p className=" p-1 rounded-md bg-br cursor-pointer">-1%</p>
                </div>
              </div>
              <button className="  bg-blue-400  w-full rounded-md flex items-center justify-center py-3 text-white font-medium mt-3">
                Connect Wallet
              </button>
            </div>
          <div className=" w-1/3 mt-2 px-3">
            <div className=" flex items-center justify-between text-xs text-tr mb-1">
              <p>1 ETH price</p>
              <p>55.834983(~$19.75)</p>
            </div>
            <div className=" flex items-center justify-between text-xs text-tr mb-1">
              <p>1 ETH price</p>
              <p>55.834983(~$19.75)</p>
            </div>
            <div className=" flex items-center justify-between text-xs text-tr mt-3 ">
              <p>Minimum received</p>
              <p>55.834983(~$19.75)</p>
            </div>
            <div className=" flex items-center justify-between text-xs text-tr mb-1">
              <p>Route</p>
              <p>55.834983(~$19.75)</p>
            </div>
          </div>
          <div
              className=" w-1/3 mt-2 px-3 py-2 rounded-3xl"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className=" w-full flex items-center gap-3 pb-1 "
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              >
                <h5
                  onClick={() => setIbound(1)}
                  className={
                    ibound === 1
                      ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer"
                      : " py-1   text-white text-sm cursor-pointer"
                  }
                >
                  Outbound
                </h5>
                <h5
                  onClick={() => setIbound(2)}
                  className={
                    ibound === 2
                      ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer"
                      : " py-1   text-white text-sm cursor-pointer"
                  }
                >
                  Inbound
                </h5>
                <h5
                  onClick={() => setIbound(3)}
                  className={
                    ibound === 3
                      ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer"
                      : " py-1   text-white text-sm cursor-pointer"
                  }
                >
                  History
                </h5>
              </div>
              <div className=" w-full mt-1 p-4 flex items-center justify-center">
                <img
                  src="https://app.1inch.io/assets/images/simple/empty-list-x2.png"
                  style={{ objectFit: "contain", width: "50%", height: "50%" }}
                  alt=""
                />
              </div>
            </div>
        </>
      )}
      {searh && (
        <>
          <div className=" bg-sr w-1/3 rounded-3xl p-3">
            <div className="flex items-center justify-between text-white">
              <RiArrowLeftSLine
                onClick={() => setSearh(false)}
                className=" w-5 h-5 cursor-pointer"
              />
              <h5>Select a token</h5>
              <div></div>
            </div>
            <div className=" bg-sr  rounded-md flex items-center gap-3 px-3 mt-2">
              <GoSearch className=" w-5 h-5 text-tr" />{" "}
              <input
                type="text"
                placeholder="Search By name or paste address"
                className=" text-sm border-none text-white outline-none py-3 bg-transparent"
              />
            </div>
            <div className=" flex flex-col w-full mt-2 gap-2">
              {
                currency.map((item,ind)=>(
                  <div key={ind} className=" hover:bg-sr flex items-center justify-between px-2 rounded-md py-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <img src={item.avatar} className=" w-10 h-10" alt="" />
                  <div>
                    <p className=" text-sm text-white">{item.name}</p>
                    <p className=" text-xs text-tr">ETH</p>
                  </div>
                </div>
                <Pin />
              </div>
                ))
              }
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pdeals;
