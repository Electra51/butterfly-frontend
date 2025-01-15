import React, { useEffect } from "react";
import logo from "../assets/Logo/new.png";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { navData } from "./Common/Data";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  //for scroll navbar color change
  useEffect(() => {
    const changeNavbarbg = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeNavbarbg);
    return () => {
      window.removeEventListener("scroll", changeNavbarbg);
    };
  }, []);

  return (
    <nav
      style={{
        boxShadow: "0px 3px 18px #c2a74e2e",
      }}
      className={`navbar fixed top-0 z-10 ${
        navbar ? "bg-black shadow-lg" : "bg-black bg-opacity-5"
      } text-white lg:pr-3`}>
      <div className="sm-container lg:container flex items-center justify-between px-4 sm:px-6 lg:px-10">
        <div className="w-[92px] lg:w-[140px]">
          <Link href="/">
            <img
              src={logo}
              alt="logo"
              width={140}
              className="w-full h-full object-fill"
            />
          </Link>
        </div>

        <div
          className={`absolute ${
            navToggle ? "left-0" : "left-[-120%]"
          } top-[4.5rem] flex w-full flex-col bg-black pb-3 pt-3 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:font-medium lg:bg-transparent lg:pb-0 lg:pt-0`}>
          <ul className="flex flex-col px-1 gap-5 lg:flex-row mr-3">
            {navData.map(({ path, title }) => (
              <li key={path} className="mx-auto text-white text-[15px]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500 font-bold a" : "text-white a"
                  }>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="indicator">
            <FaRegHeart className="cursor-pointer text-[22px] font-medium" />
            <span className="badge badge-sm indicator-item bg-red-500 text-white dark:text-gray-300">
              60
            </span>
          </div>

          <div className="dropdown-end dropdown lg:mr-2 mt-2 px-2">
            <label tabIndex={0} className="mx-2 mt-1">
              <div className="indicator">
                <AiOutlineShoppingCart className="cursor-pointer text-[22px] font-medium" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card-compact mt-3 w-72 bg-base-100 relative"
              style={{ boxShadow: "rgb(193 165 73 / 44%) 0px 7px 29px 0px" }}>
              <div className="card-body overflow-hidden h-96">
                <span className="text-[16px] font-bold text-black text-center border-b">
                  5
                </span>

                <div className="card-action absolute bottom-2 right-4 left-4">
                  <div className="flex justify-center items-center w-24 ml-20 pb-2 text-[16px] font-bold text-black">
                    <p>Total:</p>
                  </div>

                  <Link href="/cart" className="block w-full">
                    <button className="bg-[#C2A74E] px-2 py-1 w-full">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/login"
            className="flex items-center cursor-pointer  gap-2 border border-gray-700 px-2 py-1 buttonNLog bNLog">
            <AiOutlineUser />
            <p className="text-[14px]">Login/Register</p>
          </Link>
        </div>
        <label className="swap-rotate swap rounded-full h-8 w-8 bg-[#C2A74E] lg:hidden">
          <input
            checked={navToggle}
            onChange={() => setNavToggle((pre) => !pre)}
            type="checkbox"
          />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 480 480">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 480 480">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
