import React, { useEffect } from "react";
import logo from "../assets/Logo/new.png";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { navData } from "./Common/Data";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbLogout } from "react-icons/tb";
import useLogout from "../utils/authUtils";
import { userData } from "../utils/userDatafromLocalStorageUtils";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const handleLogout = useLogout();
  const cartItems = useSelector((state) => state.cart.cartItems);
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
      <div className="container-div flex items-center justify-between px-4 sm:px-6">
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
          <ul className="flex flex-col px-1 gap-5 lg:flex-row mr-1">
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

          <Link to="/cart" className="mt-5 lg:mt-2 px-2 mx-auto lg:mx-auto">
            <label tabIndex={0} className="mx-2 mt-1">
              <div className="indicator">
                <span className="pr-1 lg:hidden flex">Cart</span>
                <AiOutlineShoppingCart className="cursor-pointer text-[22px] font-medium" />
                <span className="badge badge-sm indicator-item bg-red-500 text-white dark:text-gray-300">
                  <span>({cartItems.length})</span>
                </span>
              </div>
            </label>
          </Link>

          {userData ? (
            <div className="flex justify-center lg:justify-normal items-start gap-1 px-2 mt-5 lg:mt-0">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="avatar placeholder cursor-pointer">
                  <div className="flex justify-normal gap-2 items-center">
                    <div className="h-[36px] w-[36px] rounded-full bg-[#FFF6D8] border border-[#e8cd75] flex justify-center items-center shadow-md">
                      {userData?.user?.profileImage ? (
                        <img
                          src={userData?.user?.profileImage}
                          alt=""
                          className="h-full w-full object-fill rounded-full"
                        />
                      ) : (
                        <p>{userData?.user?.name?.substring(0, 1)}</p>
                      )}
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="z-[999] relative p-2 py-2 shadow dropdown-content text-white rounded-sm w-52 bg-[#C2A74E]">
                  <li className="hover:bg-[#84702c] px-5 py-1 rounded-[2px]">
                    <Link
                      to="/dashboard/profile"
                      className="justify-normal gap-2 items-center flex">
                      <FaRegUserCircle /> Profile
                    </Link>
                  </li>
                  <li className="hover:bg-[#84702c] px-5 py-1 rounded-[2px]">
                    <Link
                      to="/dashboard/dashboard"
                      className="justify-normal gap-2 items-center flex">
                      <LuLayoutDashboard />
                      Dashboard
                    </Link>
                  </li>
                  <li
                    className="hover:bg-[#84702c] px-5 py-1 rounded-[2px]"
                    onClick={handleLogout}>
                    <Link
                      to="/"
                      className="justify-normal gap-2 items-center flex">
                      <TbLogout />
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center cursor-pointer  gap-2 border border-gray-700 px-2 py-1 buttonNLog bNLog">
              <AiOutlineUser />
              <p className="text-[14px]">Login/Register</p>
            </Link>
          )}
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
