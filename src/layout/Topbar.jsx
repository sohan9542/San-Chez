
import { FiSettings } from "react-icons/fi";

import logo from "../images/logo.png";
import { Link } from "react-router-dom";

import { RiArrowDownSLine } from "react-icons/ri";
import { SiProtonvpn, SiScikitlearn } from "react-icons/si";
import { FaForumbee, FaSwimmingPool } from "react-icons/fa";
import { MdChromeReaderMode, MdProductionQuantityLimits } from "react-icons/md";
import {
  GiClassicalKnowledge,
  GiFruitTree,
  GiLiquidSoap,
  GiAbstract036,
} from "react-icons/gi";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Topbar = ({ setShowsidebar, showsidebar }) => {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(people[3]);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" px-3 w-full bg-pr h-20 z-40 shadow-md flex items-center ">
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex w-full items-center gap-5 h-14 pl-0">
          <Link to="/" className=" flex items-center gap-2">
            <img
              className="h-12 w-auto cursor-pointer"
              src={logo}
              style={{ objectFit: "contain" }}
              alt="Workflow"
            />
            <h1 className=" font-bold text-white text-2xl">SolFi</h1>
          </Link>
          <div className=" flex items-center gap-3">
            <div className=" flex items-center text-tr trade gap-1 hover:text-white cursor-pointer relative">
              Trade <RiArrowDownSLine />
              <div className=" absolute top-6 bg-br rounded-md w-80 flex flex-col  trade_down h-auto z-50 left-0 p-3">
                <NavLink
                  to="/"
                  exact
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr hover:text-white flex items-center flex-row gap-4"
                >
                  <MdChromeReaderMode className=" w-5 h-5" />
                  <div className=" flex flex-col items-start">
                    <p>Simple Mode</p>
                    <p className=" text-sm">
                      The most user friendly way to trade
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/classic-mode"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <GiClassicalKnowledge className=" w-5 h-5" />
                  <div className=" flex flex-col items-start">
                    <p>Classic Mode</p>
                    <p className=" text-sm">
                      Take advantage of all familiar tools
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/limit-order"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <MdProductionQuantityLimits className=" w-5 h-5" />
                  <div className=" flex flex-col items-start">
                    <p>Limit order</p>
                    <p className=" text-sm">
                      Schedule a swap to get the best price
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/p2p-deal"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <MdProductionQuantityLimits className=" w-5 h-5" />
                  <div className=" flex flex-col items-start">
                    <p>P2P Deal</p>
                    <p className=" text-sm">
                      Exchange tokes privately
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className=" flex items-center text-tr trade gap-1 hover:text-white cursor-pointer relative">
              DAO <RiArrowDownSLine />
              <div className=" absolute top-6 bg-br rounded-md w-60 flex flex-col  trade_down h-auto z-50 left-0 p-3">
                <NavLink
                  to="/stacking"
                  exact
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr hover:text-white flex items-center flex-row gap-4"
                >
                  <GiFruitTree className=" w-5 h-5" />

                  <p>Stacking</p>
                </NavLink>
                <NavLink
                  to="/liquidity-protocol"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <GiLiquidSoap className=" w-5 h-5" />

                  <p>Liquidy Protocol</p>
                </NavLink>
                <NavLink
                  to="/aggre-protocol"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <SiProtonvpn className=" w-5 h-5" />

                  <p>Aggregation protocol</p>
                </NavLink>

                <NavLink
                  to="/forum"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <FaForumbee className=" w-5 h-5" />

                  <p>Forum</p>
                </NavLink>
              </div>
            </div>
            <div className=" flex items-center text-tr trade gap-1 hover:text-white cursor-pointer relative">
              Earn <RiArrowDownSLine />
              <div className=" absolute top-6 bg-br rounded-md w-52 flex flex-col  trade_down h-auto z-50 left-0 p-3">
                <NavLink
                  to="/stratigies"
                  exact
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr hover:text-white flex items-center flex-row gap-4"
                >
                  <GiAbstract036 className=" w-5 h-5" />

                  <p>Stratigies</p>
                </NavLink>
                <NavLink
                  to="/pools"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <FaSwimmingPool className=" w-5 h-5" />

                  <p>Pools</p>
                </NavLink>
                <NavLink
                  to="/earnings"
                  activeClassName="w-full text-tr hover:text-white flex items-center text-white flex-row gap-4"
                  className=" w-full text-tr flex hover:text-white items-center flex-row gap-4"
                >
                  <SiScikitlearn className=" w-5 h-5" />

                  <p>Earnings</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

       <div>
       <div className=" flex items-center  gap-2">
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="mt-1 relative">
                  <Listbox.Button className="relative w-40 bg-sr  border-none rounded-md  pl-3 pr-10 py-2 text-left cursor-default  sm:text-sm">
                    <span className="flex items-center">
                      <img
                        src={selected.avatar}
                        alt=""
                        className="flex-shrink-0 h-6 w-6 rounded-full"
                      />
                      <span className="ml-3 block truncate text-tr">
                        {selected.name}
                      </span>
                    </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 -left-10 w-52  shadow-lg max-h-96 rounded-md py-1 text-base overflow-auto sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white" : "text-tr",
                              "cursor-default select-none relative py-2 "
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <img
                                  src={person.avatar}
                                  alt=""
                                  className="flex-shrink-0 h-6 w-6 rounded-full"
                                />
                                <span
                                  className={classNames(
                                    selected
                                      ? "font-semibold "
                                      : "font-normal ",
                                    "ml-3 block truncate "
                                  )}
                                >
                                  {person.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <button className=" bg-sr px-3 rounded-md text-gray-300 w-36 py-2 mt-1 flex items-center" style={{color:"#2F8AF5"}}>
            Connect Wallet
          </button>
   
        </div>
       </div>
      </div>
    </div>
  );
};

export default Topbar;
