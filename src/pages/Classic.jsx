import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AiOutlineBuild } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
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
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const Classic = () => {
  const [ibound, setIbound] = useState(1);
  const [searh, setSearh] = useState(false);
  return (
    <div className=" min-h-screen px-4">
      <div className=" flex items-center justify-center  flex-col mt-4">
        <h3 className=" text-white">THE MOST EFFICIENT DEFI AGGREGATOR</h3>
        <p className=" text-sm text-center text-sr w-2/3">
          Access the deepest liquidity, lowest slippage and best exchange rates
          across Ethereum, BNB Chain, Polygon, Avalanche, Gnosis Chain, Fantom,
          Optimistic Ethereum (OΞ) and Arbitrum.
        </p>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-6 items-start mt-20 gap-5">
        <div className="lg:col-span-4 w-11/12 h-96">
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center gap-2 mb-3">
              <img
                className=" w-8 h-8"
                src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
                alt=""
              />
              <h5 className=" text-white">ETH/DAI</h5>
            </div>
            <div className="flex items-center gap-3">
              <div className=" flex items-center bg-nr rounded-md">
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  5M
                </p>
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  1M
                </p>
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  1H
                </p>
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  4H
                </p>
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  1D
                </p>
              </div>
              <div className=" flex items-center bg-nr rounded-md">
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  <AiOutlineBuild className=" w-5 h-5" />
                </p>
                <p className=" px-3 text-white text-sm py-1 cursor-pointer hover:bg-gray-600">
                  <VscGraphLine className=" w-5 h-5" />
                </p>
              </div>
            </div>
          </div>
          <div className=" py-3">
            <h1 className=" text-xl text-white ">
              2 938.264474 <span>+0.86%</span>
            </h1>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#C62A2E"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#1CDCDC"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className=" w-full flex items-center flex-col justify-center lg:col-span-2">
          {searh === false && (
            <>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(to right,#3F358E,#683188,#714B7D)",
                }}
                className=" w-full rounded-3xl p-3"
              >
                <div className=" w-full flex items-center justify-between">
                  <div className=" flex items-center gap-2">
                    <Link
                      to="/"
                      className=" font-semibold text-white cursor-pointer"
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
                      className=" font-semibold text-tr hover:text-white cursor-pointer"
                    >
                      P2P
                    </Link>
                  </div>
                  <div className=" flex items-center gap-2">
                    <AiOutlineReload className=" text-tr w-5 h-5 cursor-pointer hover:text-white" />
                    <GoSettings className=" text-tr w-5 h-5 cursor-pointer transform rotate-90 hover:text-white" />
                  </div>
                </div>
                <div className=" rounded-md px-3 py-1 bg-pr mt-2 relative">
                  <p className=" text-xs text-tr">You Pay</p>
                  <div className=" my-2 w-full flex items-center justify-between">
                    <h1
                      onClick={() => setSearh(true)}
                      className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1"
                    >
                      <img
                        className=" w-8 h-8 rounded-fu8"
                        src="https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
                        alt=""
                      />
                      WETH <MdKeyboardArrowDown />
                    </h1>
                    <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                      534434.26
                    </h1>
                  </div>
                  <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
                    <p>Wrapped Ether</p>
                    <p>~$898,930,930</p>
                  </div>
                </div>

                <div className=" rounded-md px-3 py-1 bg-pr mt-2 relative">
                  <p className=" text-xs text-tr">You Buy</p>
                  <div className=" my-2 w-full flex items-center justify-between">
                    <h1
                      onClick={() => setSearh(true)}
                      className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1"
                    >
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
                <div className=" rounded-md px-3 py-1 bg-pr mt-2 relative">
                  <p className=" text-xs text-tr">
                    WETH per DAI <span className=" text-red-400">(-100%)</span>
                  </p>

                  <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
                    <p className=" p-1 rounded-md bg-br cursor-pointer">-1%</p>
                    <p className="    text-lg text-white">35.50255</p>
                    <p className=" p-1 rounded-md bg-br cursor-pointer">-1%</p>
                  </div>
                </div>
                <div className=" w-full flex items-center justify-between pt-3 text-xs text-sr">
                  <p>1 WETH price</p>
                  <p className=" text-white">
             
                    <span className=" text-sr">~$2,942</span> 2946.2432 DAI
                  </p>
                </div>
                <div className=" w-full flex items-center justify-between pt-1 text-xs text-sr">
                  <p>1 DAI price
</p>
                  <p className=" text-white">
             
                    <span className=" text-sr">~$0.9999 </span> 0.000339 WETH
                  </p>  

                </div>
                <div className=" w-full flex items-center justify-between pt-1 text-xs text-sr">
                  <p>1 WETH price</p>
                  <p className=" text-white">
             
                    <span className=" text-sr">~$2,942</span> 2946.2432 DAI
                  </p>
                </div>
                <div className=" w-full flex items-center justify-between pt-1 text-xs text-sr">
                  <p>1 DAI price
</p>
                  <p className=" text-white">
             
                    <span className=" text-sr">~$0.9999 </span> 0.000339 WETH
                  </p>  

                </div>
                <button className="  bg-pr  w-full rounded-md flex items-center justify-center py-3 text-white font-medium mt-3">
                  Connect Wallet
                </button>
              </div>
            </>
          )}
          {searh && (
            <>
              <div className=" bg-nr w-full rounded-3xl p-3">
                <div className="flex items-center justify-between text-white">
                  <RiArrowLeftSLine
                    onClick={() => setSearh(false)}
                    className=" w-5 h-5 cursor-pointer"
                  />
                  <h5>Select a token</h5>
                  <div></div>
                </div>
                <div className=" bg-pr  rounded-md flex items-center gap-3 pl-3 mt-2">
                  <GoSearch className=" w-5 h-5 text-tr" />
                  <input
                    type="text"
                    placeholder="Search By name or paste address"
                    className=" text-sm border-none text-white w-full outline-none border-2 border-pr py-3 bg-transparent"
                  />
                </div>
                <div className=" flex flex-col w-full mt-2 gap-2">
                  {currency.map((item, ind) => (
                    <div
                      key={ind}
                      className=" hover:bg-pr flex items-center justify-between px-2 rounded-md py-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <img src={item.avatar} className=" w-10 h-10" alt="" />
                        <div>
                          <p className=" text-sm text-white">{item.name}</p>
                          <p className=" text-xs text-tr">ETH</p>
                        </div>
                      </div>
                      <Pin />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classic;
