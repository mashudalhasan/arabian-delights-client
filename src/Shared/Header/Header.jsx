import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline btn-warning lg:hidden border-none mr-3"
          >
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
            <li className="hover:bg-warning hover:rounded-lg">
              <Link to='/'>Home</Link>
            </li>
            <li className="hover:bg-warning hover:rounded-lg">
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logo}
            className="mr-3 h-8 sm:h-12"
            alt="Arabian Delights Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Arabian Delights
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:bg-warning hover:rounded-lg">
            <Link to='/'>Home</Link>
          </li>
          <li className="hover:bg-warning hover:rounded-lg">
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-warning">Login</a>
      </div>
    </div>
  );
};

export default Header;
