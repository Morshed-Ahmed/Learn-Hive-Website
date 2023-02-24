import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { themeChange } from "theme-change";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState("Color Theme");
  useEffect(() => {}, [setTheme]);
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  // console.log(user.emailVerified);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="sticky top-0 z-50 bg-base-100 flex flex-col mx-4 mt-3">
      <div className=" flex justify-between items-center mx-2 ">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <ImGoogle2 />
          </Link>
          <Link to={"/"}>
            <FaFacebookSquare size={18} />
          </Link>
          <Link to={"/"}>
            <FaTwitterSquare size={18} />
          </Link>
          <Link className="ml-1" to={"/"}>
            <IoLogoYoutube size={20} />
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
      <div className="divider "></div>
      <div className=" navbar  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/courses"}>Courses</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blogs</Link>
              </li>
            </ul>
          </div>
          {/* <a href="/" className="btn btn-ghost normal-case text-xl">
            LearnHive
          </a> */}

          <Link to={"/"}>
            <img
              className="w-40"
              src="https://i.ibb.co/HFkBNSr/learn-hive-low-resolution-logo-color-on-transparent-background.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQs</Link>
            </li>
            <li>
              <Link to={"/"}>Item 1</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0">
            <label
              // data-act-class="ACTIVECLASS"
              // data-toggle-theme="dark,light"
              className="swap swap-rotate   visible lg:hidden  cursor-pointer    "
              // data-choose-theme
            >
              <input type="checkbox" />

              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="light"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="light"
                data-act-class="ACTIVECLASS"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                //   data-toggle-theme="dark"
                //   data-act-class="ACTIVECLASS"
                data-set-theme="dark"
                data-act-class="ACTIVECLASS"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>

            <li
              className="w-44 hidden lg:flex  z-20"
              data-choose-theme
              // tabindex="0"
            >
              <NavLink className="w-full flex justify-between">
                <div
                // data-set-theme=""
                // setTheme=" System Default"
                // data-act-class="ACTIVECLASS"
                // onClick={() => setTheme("System Default")}
                // className="hover:  hover:text-base-100 "
                >
                  {theme}
                </div>
                <svg
                  className="fill-current bg-base-300 lg:rounded-full  lg:w-6 lg:h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul data-choose-theme className="w-full   p-2 bg-base-200">
                <li>
                  <Link
                    data-set-theme=""
                    onClick={() => setTheme("System Default")}
                    data-act-class="ACTIVECLASS"
                  >
                    System Default
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="dark"
                    onClick={() => setTheme("Dark")}
                    //onClick swapTheme class swap-off
                    data-act-class="ACTIVECLASS"
                  >
                    Dark
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="light"
                    onClick={() => setTheme("Light")}
                    data-act-class="ACTIVECLASS"
                  >
                    Light
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="retro"
                    onClick={() => setTheme("Retro")}
                    data-act-class="ACTIVECLASS"
                  >
                    Retro
                  </Link>
                </li>
                <li>
                  <Link
                    data-set-theme="cyberpunk"
                    onClick={() => setTheme("Cyberpunk")}
                    data-act-class="ACTIVECLASS"
                  >
                    Cyberpunk
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {user?.emailVerified && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" m-1">
                <div
                  className="avatar tooltip  tooltip-bottom"
                  data-tip="Settings"
                >
                  <div className="bg-neutral-focus text-neutral-content flex text-center items-center lg:w-10 xs:w-7 rounded">
                    <img src={user?.photoURL} alt="" />
                    {/* <span className="text-3xl ">K</span> */}
                  </div>
                </div>
              </label>

              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
              >
                <div className="">
                  <h3 className="card-title capitalize">{user?.displayName}</h3>
                  <div className="divider"></div>
                </div>

                <li>
                  <a href="/">Item 1</a>
                </li>

                <li onClick={handleLogOut}>
                  <div>Log Out</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
