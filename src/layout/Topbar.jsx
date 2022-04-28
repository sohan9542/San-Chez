import { FiPlus } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";
import { IoMagnet } from "react-icons/io5";
import { BiBarChart } from "react-icons/bi"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
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

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };
  const [selected, setSelected] = useState(people[3]);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed top-0 left-0 px-2 lg:px-4 w-full  h-20 z-40 shadow-md flex items-center ">
      <div className="flex items-center justify-between gap-4 w-full">
      <div className='flex w-full items-center gap-2 h-14 pl-0'>
            { showsidebar ?  <BiBarChart onClick={() => setShowsidebar(false)} className='cursor-pointer transform rotate-90 w-7 h-7 ' style={{color:"#1CDCDC"}} />: <GoThreeBars style={{color:"#1CDCDC"}} onClick={() => setShowsidebar(true)} className='cursor-pointer w-7 h-7 '/>}
            <Link to="/">
            <img
                    className="h-12 w-auto cursor-pointer"
                    src={logo}
                    alt="Workflow"

                /></Link>                
            </div>
        <div className="  items-center hidden lg:flex justify-end gap-4">
          {/* <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md flex items-center gap-1">
              <FiPlus />
              
            </button>
            
          </div> */}
           <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="mt-1 relative">
                  <Listbox.Button style={{backgroundImage:"linear-gradient(to right,#3F358E,#683188,#714B7D)"}} className="relative w-40  border-none rounded-md  pl-3 pr-10 py-2 text-left cursor-default  sm:text-sm">
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
          <button style={{backgroundImage:"linear-gradient(to right,#3F358E,#683188,#714B7D)"}} className="  px-3 rounded-md text-gray-300 w-36 py-2 mt-1 flex items-center text-tr" >
            Connect Wallet
          </button>
   
        </div>
        <div className="  items-center flex lg:hidden justify-end gap-1">
   
          <div className=" bg-nr text-white  rounded-md inline-flex  justify-center items-center gap-1">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <FiPlus />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                 <MenuItem onClick={handleClose}><Link to="/creat-lounchpad" className=" text-tr">Launchepad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-fair-launch" className=" text-tr">FairLaunchpad</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/token" className=" text-tr">Token</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-lock" className=" text-tr">DXLA-Lock</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/create-pinkpad" className=" text-tr">DXLA-Pad</Link></MenuItem>
              </Menu>
            </div>
     
         
          <div>
            <button className=" bg-nr text-white py-2 px-3 rounded-md inline-flex  justify-center items-center gap-1">
              <IoMagnet />
            
            </button>
          </div>
          <div>
            <button className=" bg-nr text-white py-2 px-3 text-xs rounded-md flex items-center gap-1">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
