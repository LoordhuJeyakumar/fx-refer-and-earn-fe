import React, { useState } from "react";
import logo from "../assets/images/logo.png.png";
import { Link, NavLink } from "react-router-dom";

const Drawer = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="absolute left-0 top-0 w-[300px] h-screen bg-white shadow-lg z-50 ">
          <div className="flex flex-col items-start gap-4 p-4">
            <div className="w-full flex justify-center items-center mt-2">
              <img src={logo} alt="logo" className="max-w-[130px] w-full" />
            </div>
            <nav className="flex flex-col mt-4 w-full justify-center">
              <NavLink
                to={"/"}
                className="text-center text-neutral-800 hover:text-blue-600"
                onClick={onClose}
              >
                Refer & Earn
              </NavLink>
              <NavLink
                to="/resources"
                className="text-center text-neutral-800 hover:text-blue-600"
                onClick={onClose}
              >
                Resources
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-center text-neutral-800 hover:text-blue-600"
                onClick={onClose}
              >
                About us
              </NavLink>
            </nav>
            <button className="w-full justify-center flex items-center gap-2 text-lg text-[#1a73e8] px-4 py-1 bg-bl que-200/15 rounded-sm font-semibold">
              Try for free
            </button>
          </div>
        </div>
      )}
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        {/* Contact expert */}
        <div className="navbar-heading w-full flex items-center gap- justify-between md:justify-center py-2 px-3 font-inter">
          <h1 className="font-medium text-neutral-800 text-xs md:text-sm flex items-center gap-3">
            Navigate your ideal career path with tailored expert advice{" "}
          </h1>
          <button className="md:mx-2 md:text-sm font-medium text-nowrap contact-btn capitalize ">
            contact expert
          </button>
        </div>

        {/* Navbar */}
        <div className="flex justify-center py-[0.6rem] w-full px-4 xl:px-12   text-xs">
          <div className="  flex items-center mx-12 justify-between max-w-[85rem] min-h-[60px] w-full ">
            <div className="flex items-center gap-8 ">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className="max-w-[125px] w-full">
                  <img className="w-full" alt="logo" src={logo} />
                </div>
              </Link>

              <button className="bg-[#1A73E8] text-white   rounded-lg p-2 flex items-center space-x-4 course-btn">
                Courses
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 course-btn-icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-end  gap-4">
              <nav>
                {/* navigation links with call to action buttons */}
                <ul className="hidden lg:flex items-center space-x-6 navbar">
                  <li className="px-[18px] py-[8px] rounded-md  text-sm text-nowrap">
                    <NavLink to={"/"}>Refer & Earn</NavLink>
                  </li>
                  <li className="px-[18px] py-[8px] rounded-md  text-sm text-nowrap">
                    <NavLink to="/resources">Resources</NavLink>
                  </li>
                  <li className="px-[18px] py-[8px] rounded-md  text-sm text-nowrap">
                    <NavLink to={"/about"}>About us</NavLink>
                  </li>
                </ul>
                {/* call to action buttons  login*/}
              </nav>
              <div className="space-x-4  md:flex items-center justify-center gap-[0.5rem]">
                <button className="login-btn   px-[18px] py-[8px] bg-slate-400/20 rounded-md font-medium text-sm text-nowrap">
                  Login
                </button>
                <button className="signup-btn hidden lg:flex px-[18px] py-[8px] bg-[#1A73E8] hover:bg-darkBlue text-white rounded-md font-medium text-sm text-nowrap">
                  Try for free
                </button>
              </div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {!isOpen ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="text-neutral-800 lg:hidden block cursor-pointer"
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Drawer isOpen={isOpen} onClose={onclose} />
        {/*  */}
      </div>
    </div>
  );
}

export default Navbar;
