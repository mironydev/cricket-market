import React from "react";
import coinImage from "../../assets/coin.png";
import logo from "../../assets/logo.png";
import "../../App.css";

const Navbar = ({ balance }) => {
  return (
    <div className="shadow py-3">
      <div className="w-11/12 mx-auto select-none">
        <div className=" flex flex-row justify-between gap-5">
          <div className="flex items-center md:w-full lg:w-fit">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Fixture</a>
                </li>
                <li>
                  <a href="/">Teams</a>
                </li>
                <li>
                  <a href="/">Schedules</a>
                </li>
              </ul>
            </div>
            <a href="/" className="flex items-center gap-2 mx-auto">
              <img src={logo} alt="" width={40} className="hidden md:block" />
              <p className="font-bold text-xl md:text-2xl text-[#162674] ml-2 md:ml-0">
                CricketMarket
              </p>
            </a>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <ul className="hidden lg:flex flex-wrap font-semibold text-stone-500 select-none gap-4 lg:gap-4">
              <li>
                <a className="navbar-lists-style" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="navbar-lists-style" href="/">
                  Fixture
                </a>
              </li>
              <li>
                <a className="navbar-lists-style" href="/">
                  Teams
                </a>
              </li>
              <li>
                <a className="navbar-lists-style" href="/">
                  Schedules
                </a>
              </li>
            </ul>
            <button className="btn flex items-center gap-2 justify-between font-bold px-2 md:px-4">
              {balance} BTC
              <img src={coinImage} alt="" width={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
