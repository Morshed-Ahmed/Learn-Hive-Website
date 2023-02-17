import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { ImGoogle2 } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

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
    <div className=" bg-base-100 flex flex-col mx-4 mt-3">
      <div className="flex justify-between items-center mx-2">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <ImGoogle2 />
            {/* <svg
              fill="#969696"
              height="25px"
              width="25px"
              viewBox="-6.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#969696"
              stroke-width="0.576"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>google</title>{" "}
                <path d="M9.6 25.6c-5.28 0-9.6-4.32-9.6-9.6s4.32-9.6 9.6-9.6c2.56 0 4.96 1 6.8 2.8 0.32 0.32 0.32 0.88 0 1.2s-0.88 0.32-1.2 0c-1.48-1.48-3.48-2.32-5.6-2.32-4.36 0-7.92 3.56-7.92 7.92s3.56 7.92 7.92 7.92c4.080 0 7.44-3.080 7.88-7.040h-7.88c-0.48 0-0.84-0.36-0.84-0.84s0.36-0.84 0.84-0.84h8.76c0.48 0 0.84 0.36 0.84 0.84 0 5.24-4.32 9.56-9.6 9.56z" />{" "}
              </g>
            </svg> */}
          </Link>
          <Link to={"/"}>
            <FaFacebookSquare size={18} />
            {/* <svg
              fill="#969696"
              height="20px"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="-337 273 123.5 256"
              // xml:space="preserve"
              stroke="#969696"
              stroke-width="2.223"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path>{" "}
              </g>
            </svg> */}
          </Link>
          <Link to={"/"}>
            <FaTwitterSquare size={18} />
            {/* <svg
              fill="#969696"
              width="25px"
              height="25px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#969696"
              stroke-width="1.152"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <title />

                <path d="M30.8,53.06a146.19,146.19,0,0,1-15.94-.83A13,13,0,0,1,3.39,40.62a83.16,83.16,0,0,1,.12-17.28A13.07,13.07,0,0,1,15.23,11.91a160.72,160.72,0,0,1,33.6,0A13.07,13.07,0,0,1,60.6,23.64a82.79,82.79,0,0,1-.07,16.95A12.85,12.85,0,0,1,49,52.24h0C42.42,52.79,36.41,53.06,30.8,53.06Zm1.29-40a164.28,164.28,0,0,0-16.65.85A11.06,11.06,0,0,0,5.5,23.56a81.11,81.11,0,0,0-.12,16.87,11,11,0,0,0,9.69,9.82,175.5,175.5,0,0,0,33.79,0h0a10.85,10.85,0,0,0,9.67-9.87,80.8,80.8,0,0,0,.07-16.54,11.09,11.09,0,0,0-10-9.91A153,153,0,0,0,32.09,13Z" />

                <path d="M26,41.5a1,1,0,0,1-1-1v-17a1,1,0,0,1,1.54-.84l14,9a1,1,0,0,1,0,1.71l-14,8A1,1,0,0,1,26,41.5Zm1-16.17V38.78l11.07-6.33Z" />
              </g>
            </svg> */}
          </Link>
          <Link className="ml-1" to={"/"}>
            <IoLogoYoutube size={20} />
            {/* <svg
              fill="#969696"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#969696"
              stroke-width="34.559999999999995"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444"
                  fill-rule="evenodd"
                />{" "}
              </g>
            </svg> */}
          </Link>
        </div>
        <div className="flex gap-3">
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="navbar bg-base-100">
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
                <Link to={"/"}>Item 1</Link>
              </li>
              <li tabIndex={0}>
                <a href="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <Link to={"/courses"}>Courses</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Item 1</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/"}>Item 1</Link>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            LearnHive
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/courses"}>Courses</Link>
            </li>

            <li>
              <Link to={"/"}>Item 1</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.emailVerified ? (
            <>
              <div onClick={handleLogOut} className="btn">
                Log Out
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link className="btn">Get started</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
