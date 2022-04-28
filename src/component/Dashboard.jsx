import React from "react";
import text_star from "../images/h1_star.png";
import bg_star from "../images/bg_star.png";
import bihance from "../images/binance.png";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a3 from "../images/a3.jpg";
import a4 from "../images/a4.jpg";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import coinbase from "../images/coinbase.png";
import young from "../images/young.jpg";
import coinmart from "../images/coinmart.png";
import camera from "../images/camera.png";
import tech from "../images/tech.png";
import dxproject from "../images/dx.mp4";
import indodax from "../images/indodax.png";
import global from "../images/globe.png";
import project from "../images/project.png";
import { RiArrowRightSLine, RiFileEditFill } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div className=" container  pt-10 min-h-screen w-full ">
      <div className=" grid grid-cols-1 lg:grid-cols-2  items-center">
        <div className=" flex flex-col text-white items-start justify-center gap-3">
          <h1 className=" text-3xl lg:text-6xl font-bold">World's Best</h1>
          <h1 className=" text-3xl lg:text-6xl font-bold flex items-center gap-4">
            Crypto <img src={text_star} className=" w-9 h-9" alt="" />{" "}
            <img src={text_star} className=" w-9 h-9" alt="" />{" "}
          </h1>
          <h1 className=" text-3xl lg:text-6xl font-bold">Growth Center</h1>
          <p className=" text-lg pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leonatoque
            penatibu.
          </p>
          <div className=" flex items-center flex-wrap w-full mb-3 justify-start  gap-2 pt-3">
            <button className=" hvr text-white py-3 px-5 text-lg rounded-md flex items-center gap-1">
              Get Started
            </button>
            <button className="  text-white py-3 px-5  text-lg rounded-md flex items-center gap-1">
              Contact Sales <RiArrowRightSLine className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className=" relative">
          <img src={project} alt="" />
          <div className=" absolute top-10 left-0">
            <img src={bg_star} className=" w-9 h-9" alt="" />
          </div>
          <div className=" absolute top-10 right-10">
            <img src={bg_star} className=" w-9 h-9" alt="" />
          </div>
        </div>
      </div>
      <div className=" mt-32 grid grid-cols-2 lg:flex items-center justify-center gap-4 flex-wrap">
        <a href="http://gogle.com" target="_blank" rel="noopener noreferrer">
          <img src={bihance} alt="" />
        </a>
        <a href="http://gogle.com" target="_blank" rel="noopener noreferrer">
          <img src={coinbase} alt="" />
        </a>
        <a href="http://gogle.com" target="_blank" rel="noopener noreferrer">
          <img src={coinmart} alt="" />
        </a>
        <a href="http://gogle.com" target="_blank" rel="noopener noreferrer">
          <img src={indodax} alt="" />
        </a>
      </div>
      <div className=" w-full flex flex-col items-center justify-center pt-32 pb-16 gap-3">
        <h6 className=" text-tr text-center w-full">BLOCKCHAIN PLATFORM</h6>
        <h1 className=" text-white text-5xl text-center w-full font-bold">Blockchain Solution</h1>
        <p className=" text-gray-500 text-lg text-center w-full lg:w-3/4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3">
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center hover:bg-nr">
          <img src={f1} className=" w-20 " alt="" />
          <h5 className=" text-white font-medium">Safe and secure</h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center bg-nr">
          <img src={f2} className=" w-20 " alt="" />
          <h5 className=" text-white font-medium">Good investment</h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center hover:bg-nr">
          <img src={f3} className=" w-20 " alt="" />
          <h5 className=" text-white font-medium">Integrated app</h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
      </div>
      <div className=" w-full mt-32 relative">
        <img src={young} className=" rounded-xl" alt="" />
        <div
          className=" absolute z-10 top-0 left-0 h-full w-full flex items-center gap-4 rounded-xl flex-col justify-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <h1 className=" font-bold text-2xl lg:text-5xl text-white">
            Fortune favours the brave
          </h1>
          <div className=" flex items-center justify-center">
            <div
              className=" p-3 rounded-full cursor-pointer"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <div className=" p-3 bg-white rounded-full flex items-center justify-center">
                <FaPlay className=" w-7 h-7 text-pr" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 py-10">
          <div className="  flex items-start flex-col gap-4 py-10  rounded-md justify-center ">
            <img src={t1} className=" w-20 " alt="" />
            <h5 className=" text-white font-medium">Fiat & Crypto Payments</h5>
            <p className=" text-gray-500 text-lg text-start">
              Cum sociis natoque penatibus et magnis dis parturient mon.
            </p>
          </div>
          <div className="  flex items-start flex-col gap-4 py-10  rounded-md justify-center ">
            <img src={t2} className=" w-20 " alt="" />
            <h5 className=" text-white font-medium">Scalable Profits</h5>
            <p className=" text-gray-500 text-lg text-start">
              Cum sociis natoque penatibus et magnis dis parturient mon.
            </p>
          </div>
          <div className="  flex items-start flex-col gap-4 py-10  rounded-md justify-center ">
            <img src={t3} className=" w-20 " alt="" />
            <h5 className=" text-white font-medium">Customizable Flows</h5>
            <p className=" text-gray-500 text-lg text-start">
              Cum sociis natoque penatibus et magnis dis parturient mon.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center pt-32 pb-16 gap-3">
        <h6 className=" text-tr">ABOUT OUR PRODUCTS</h6>
        <h1 className=" text-white text-5xl font-bold text-center">
          We provide various solutions to help you
        </h1>
        <p className=" text-gray-500 text-lg text-center w-full lg:w-3/4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-3">
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center bg-nr hover:bg-pr hvoer_border">
          <img src={a1} className=" w-20 rounded-full" alt="" />
          <h5 className=" text-white font-medium hover:text-tr cursor-pointer">
            Crypto Earn
          </h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center bg-nr hover:bg-pr hvoer_border">
          <img src={a2} className=" w-20 rounded-full" alt="" />
          <h5 className=" text-white font-medium hover:text-tr cursor-pointer">
            Exchanges
          </h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center bg-pr  border-2 border-tr">
          <img src={a3} className=" w-20 rounded-full" alt="" />
          <h5 className=" text-white font-medium hover:text-tr cursor-pointer">
            DeFi Wallet
          </h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
        <div className="  flex items-center flex-col gap-4 py-10 px-4 rounded-md justify-center bg-nr hover:bg-pr hvoer_border">
          <img src={a4} className=" w-20 rounded-full" alt="" />
          <h5 className=" text-white font-medium hover:text-tr cursor-pointer">
            Converter
          </h5>
          <p className=" text-gray-500 text-lg text-center">
            Cum sociis natoque penatibus et magnis dis parturient mon.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 py-32 gap-5">
        <div className=" relative">
          <video
            className=" rounded-full h-96 w-96 bg-gray-900"
            style={{ objectFit: "cover" }}
            autoPlay
            muted
            loop
          >
            <source src={dxproject} type="video/mp4" />
          </video>
          <h1 className=" text-5xl lg:text-8xl text-tr absolute top-0 lg:-left-8 z-10 font-bold">
            DXLA
          </h1>
          <h1 className=" text-5xl lg:text-8xl text-tr absolute bottom-0 lg:-left-8 z-10 font-bold">
            PROJECT
          </h1>
          <div className=" absolute top-5 z-10 right-24">
            <img src={bg_star} className=" w-9 h-9" alt="" />
          </div>
          <div className=" absolute bottom-24 z-10 -left-8">
            <img src={bg_star} className=" w-9 h-9" alt="" />
          </div>
        </div>
        <div className=" w-full flex flex-col items-start justify-center gap-4  lg:pl-5 ">
          <h6 className=" text-tr">CRYPTO EARN</h6>
          <h1 className=" text-white text-5xl font-bold ">Deposit and earn</h1>
          <p className=" text-gray-500 text-lg text-start w-full ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis
          </p>
          <div className=" flex items-center gap-5">
            <div>
              <h6 className=" text-5xl text-tr">16.5%</h6>
              <p className=" text-lg text-white">P.A. on Cryptos</p>
            </div>
            <div>
              <h6 className=" text-5xl text-tr">24%</h6>
              <p className=" text-lg text-white">P.A. on Stablecoins</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 py-32 gap-5">
        <div className=" w-full flex flex-col items-start justify-center gap-4  lg:pl-5 ">
          <h6 className=" text-tr">CRYPTO EXCHANGE</h6>
          <h1 className=" text-white text-5xl font-bold ">
            Low fees and deep liquidity
          </h1>
          <p className=" text-gray-500 text-lg text-start w-full ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis
          </p>
          <div>
            <button className=" hvr text-white py-3 px-5 text-lg rounded-md flex items-center gap-1">
              Get the token <BiLinkExternal />
            </button>
          </div>
        </div>
        <div className=" relative">
          <img src={tech} alt="" />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 py-20 gap-5">
        <div className=" relative">
          <img src={camera} alt="" />
        </div>
        <div className=" w-full flex flex-col items-start justify-center gap-4  lg:pl-5 ">
          <h6 className=" text-tr">NFT MARKETPLACE</h6>
          <h1 className=" text-white text-5xl font-bold ">FIND YOUR NFT</h1>
          <p className=" text-gray-500 text-lg text-start w-full ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis
          </p>
          <div>
            <button className=" hvr text-white py-3 px-5 text-lg rounded-md flex items-center gap-1">
              GET DEX NTF <RiFileEditFill />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center pt-32 pb-16 gap-3">
        <h6 className=" text-tr">OUR VISION</h6>
        <h1 className=" text-white text-4xl lg:text-5xl font-bold text-center ">
          Cryptocurrency in every wallet
        </h1>
        <p className=" text-gray-500 text-lg text-center w-full lg:w-3/4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis
        </p>
      </div>
      <div className=" w-full flex items-center flex-wrap justify-center gap-5">
        <div className="flex flex-col gap-3 items-center">
          <h6 className=" text-6xl text-tr">2014</h6>
          <p className=" text-lg text-white">Founded</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h6 className=" text-6xl text-tr">250+</h6>
          <p className=" text-lg text-white">Teams</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h6 className=" text-6xl text-tr">100K</h6>
          <p className=" text-lg text-white">Active Users</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h6 className=" text-6xl text-tr">750M</h6>
          <p className=" text-lg text-white">Insurance</p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center">
        <img src={global} alt="" />
      </div>
    </div>
  );
};

export default Dashboard;
