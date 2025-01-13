import React, { useEffect } from "react";
import logo from "../assets/Logo/new.png";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

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
  const navData = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/shop",
      title: "Shop",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <nav
      style={{
        boxShadow: "0px 3px 18px #c2a74e2e;",
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
          } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:justify-center lg:items-center lg:gap-2 lg:font-medium lg:bg-transparent lg:pb-0 lg:pt-0`}>
          <ul className="flex flex-col px-1 gap-5 lg:flex-row mr-3">
            {navData.map(({ path, title }) => (
              <li key={path} className={`mx-auto text-white text-[15px]`}>
                <NavLink className="a text-white">{title}</NavLink>
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
                {/* <div className="overflow-y-auto h-64">
                  {cartItems?.length > 0 ? (
                    <>
                      {" "}
                      {cartItems?.map((e, i) => {
                        console.log("e", e);
                        return (
                          <div
                            key={i}
                            className="grid grid-cols-4 gap-2 border-b py-1">
                            <div>
                              <Image
                                src={e?.img}
                                alt=""
                                width={50}
                                height={30}
                              />
                            </div>
                            <div className="text-black col-span-3">
                              <p className="text-[12px] font-medium">
                                {e?.name}
                              </p>
                              <p className="text-[12px]">Price: ${e?.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <p className="text-black text-center font-medium mt-24 text-xl">
                      No item in your cart ...
                    </p>
                  )}
                </div> */}

                <div className="card-action absolute bottom-2 right-4 left-4">
                  {/* {cartItems?.length < 0 ? (
                    ""
                  ) : ( */}
                  <div className="flex justify-center items-center w-24 ml-20 pb-2 text-[16px] font-bold text-black">
                    <p>Total:</p>
                    {/* <p className="text-left mr-auto">${totalAmount}</p> */}
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
          {/* {uid ? (
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full">
                  <Image
                    alt="user-logo"
                    title={displayName}
                    src={
                      photoURL ||
                      "https://i.ibb.co/0QZCv5C/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png"
                    }
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu-compact dropdown-content menu rounded-none mt-3 w-48 bg-base-100 p-2 shadow">
                <li className="mb-2 mt-1 text-center font-semibold">
                  {displayName}
                </li>
                <div className="divider my-0"></div>
                <li className="mb-2 mx-auto">
                  <NavLink
                    href="/profile"
                    className="button7 b7  text-white rounded-none"
                    activeClassName="text-blue-500">
                    <CgProfile className="text-[18px]" /> Profile
                  </NavLink>
                </li>
                <li className="mx-auto">
                  <button
                    onClick={handleLogout}
                    className="buttonNLog bNLog w-full text-white rounded-none">
                    <MdOutlineLogout className="text-[18px]" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : ( */}
          <Link
            href="/login"
            className="flex items-center cursor-pointer  gap-2 border border-gray-700 px-2 py-1 buttonNLog bNLog">
            <AiOutlineUser />
            <p className="text-[14px]">Login/Register</p>
          </Link>
          {/* )} */}
        </div>
        <label className="swap-rotate swap rounded-full h-8 w-8 bg-[#C2A74E] lg:hidden">
          <input
            // checked={navToggle}
            // onChange={() => setNavToggle((pre) => !pre)}
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
