import React, { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
const SimpleTrade = () => {
  const [active, setActive] = useState(true);
const [ibound, setIbound] = useState(1)
  return (
    <div className=" min-h-screen w-full flex items-center flex-col justify-center">
      {active ? (
        <div className=" bg-sr w-1/3 rounded-3xl p-3">
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <p
                onClick={() => setActive(true)}
                className={
                  active
                    ? " font-semibold text-white cursor-pointer"
                    : " font-semibold text-tr hover:text-white cursor-pointer"
                }
              >
                Swap
              </p>
              <Link
                to="/limit-order"
                className=" font-semibold text-tr hover:text-white cursor-pointer"
              >
                Limit
              </Link>
              <p
                onClick={() => setActive(false)}
                className={
                  active === false
                    ? " font-semibold text-white cursor-pointer"
                    : " font-semibold text-tr hover:text-white cursor-pointer"
                }
              >
                P2P
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <AiOutlineReload className=" text-tr w-5 h-5 cursor-pointer hover:text-white" />
              <GoSettings className=" text-tr w-5 h-5 cursor-pointer transform rotate-90 hover:text-white" />
            </div>
          </div>
          <div className=" rounded-md p-3 bg-sr mt-2 relative">
            <p className=" text-xs text-tr">You Sell</p>
            <div className=" my-2 w-full flex items-center justify-between">
              <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                <img
                  className=" w-8 h-8 rounded-fu8"
                  src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
                  alt=""
                />
                ETH <MdKeyboardArrowDown />
              </h1>
              <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                133782.263693
              </h1>
            </div>
            <div className=" my-2 w-full flex items-center justify-between text-xs text-tr">
              <p>Ethereum</p>
              <p>~$386,594,621</p>
            </div>
          </div>
          <div className=" flex items-center justify-center w-full -m-2">
            <BsArrowDownCircleFill className=" w-5 h-5 text-tr cursor-pointer" />
          </div>
          <div
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
            className="  p-3 mt-1  rounded-md"
          >
            <p className=" text-xs text-tr">You Buy</p>
            <div className=" my-2 w-full flex items-center justify-between">
              <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
                <img
                  className=" w-8 h-8 rounded-fu8"
                  src="https://app.1inch.io/assets/images/network-logos/ethereum.svg"
                  alt=""
                />
                GRT <MdKeyboardArrowDown />
              </h1>
            </div>
            <div
              style={{ border: "1px solid rgba(7, 112, 211, 0.747)" }}
              className=" py-3 px-2  rounded-md relative mt-3"
            >
              <div className=" flex items-center justify-between w-full">
                <h1 className=" text-white cursor-pointer font-medium text-lg flex items-center gap-1">
                  1Inch{" "}
                </h1>
                <h1 className=" text-white cursor-pointer font-medium text-lg flex items-center gap-1">
                  133782.263693
                </h1>
              </div>
              <div className=" flex items-center justify-between">
                <p className=" text-xs text-tr">Tx cost 0.3434 = (~$991... </p>{" "}
                <p className=" text-xs text-tr">
                  ~$2678 <span className=" text-red-300">(-99.32%)</span>
                </p>
              </div>
              <div className=" text-xs absolute -top-2 left-0 bg-green-600 text-white px-2 rounded-md">
                save $2345.43
              </div>
            </div>
            <div
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              className=" py-3 px-2  rounded-md relative mt-2 cursor-pointer "
            >
              <div className=" flex items-center justify-between w-full">
                <h1 className=" text-white cursor-pointer font-medium text-lg flex items-center gap-1">
                  UniSwap
                </h1>
                <h1 className=" text-white cursor-pointer font-medium text-lg flex items-center gap-1">
                  133782.263693
                </h1>
              </div>
              <div className=" flex items-center justify-between">
                <p className=" text-xs text-tr">Tx cost 0.3434 = (~$991... </p>{" "}
                <p className=" text-xs text-tr">
                  ~$2678 <span className=" text-red-300">(-99.32%)</span>
                </p>
              </div>
            </div>
          </div>
          <button className="  bg-sr  w-full rounded-md flex items-center justify-center py-3 text-blue-400 font-medium mt-3">
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className=" bg-sr w-1/3 rounded-3xl p-3">
          <div className=" w-full flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <p
                onClick={() => setActive(true)}
                className={
                  active
                    ? " font-semibold text-white cursor-pointer"
                    : " font-semibold text-tr hover:text-white cursor-pointer"
                }
              >
                Swap
              </p>
              <Link
                to="/limit-order"
                className=" font-semibold text-tr hover:text-white cursor-pointer"
              >
                Limit
              </Link>
              <p
                onClick={() => setActive(false)}
                className={
                  active === false
                    ? " font-semibold text-white cursor-pointer"
                    : " font-semibold text-tr hover:text-white cursor-pointer"
                }
              >
                P2P
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <AiOutlineReload className=" text-tr w-5 h-5 cursor-pointer hover:text-white" />
              <GoSettings className=" text-tr w-5 h-5 cursor-pointer transform rotate-90 hover:text-white" />
            </div>
          </div>
          <div className=" rounded-md px-3 py-1 bg-sr mt-2 relative">
            <p className=" text-xs text-tr">You Pay</p>
            <div className=" my-2 w-full flex items-center justify-between">
              <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
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
              <h1 className=" text-white cursor-pointer font-medium text-2xl flex items-center gap-1">
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
      )}
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
 {
   active === false &&      <div className=" w-1/3 mt-2 px-3 py-2 rounded-3xl" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
   <div className=" w-full flex items-center gap-3 pb-1 " style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
     <h5 onClick={()=>setIbound(1)} className={ ibound === 1 ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer": " py-1   text-white text-sm cursor-pointer"}>
       Outbound
     </h5>
     <h5 onClick={()=>setIbound(2)} className={ ibound === 2 ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer": " py-1   text-white text-sm cursor-pointer"}>
     Inbound
     </h5>
     <h5 onClick={()=>setIbound(3)} className={ ibound === 3 ? " py-1 border-b-2 border-blue-400 text-white text-sm cursor-pointer": " py-1   text-white text-sm cursor-pointer"}>
       History
     </h5>
   </div>
   <div className=" w-full mt-1 p-4 flex items-center justify-center">
<img src="https://app.1inch.io/assets/images/simple/empty-list-x2.png" style={{objectFit:"contain", width:"50%", height:"50%"}} alt="" />
   </div>
 </div>
 }
    </div>
  );
};

export default SimpleTrade;
