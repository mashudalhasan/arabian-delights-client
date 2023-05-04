import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline btn-warning lg:hidden border-none"
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
            <li>
              <NavLink
                to="/chefsInfo/0"
                className={({ isActive }) => (isActive ? "text-warning" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "text-warning" : "")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleLogOut}
                to="/login"
                className={({ isActive }) => (isActive ? "text-warning" : "")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logo}
            className="mr-1 lg:mr-3 h-8 sm:h-12"
            alt="Arabian Delights Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Arabian Delights
          </span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:flex justify-center items-center gap-6 font-medium">
          <li>
            <NavLink
              to="/chefsInfo/0"
              className={({ isActive }) => (isActive ? "text-warning" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "text-warning" : "")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <span className="mr-2 lg:mr-4 border-4 rounded-full border-slate-100 transition hover:scale-110 hover:shadow-xl">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
          </span>
        )}
        {user ? (
          <Link
            onClick={handleLogOut}
            className="hidden lg:inline-flex items-center gap-1 rounded-lg bg-warning px-2 lg:px-8 py-3 transition hover:scale-110 hover:shadow-xl active:bg-yellow-400"
            to="/login"
          >
            <span className="text-sm font-medium"> Logout </span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </Link>
        ) : (
          <Link
            className="inline-flex items-center gap-1 rounded-lg bg-warning px-2 lg:px-8 py-3 transition hover:scale-110 hover:shadow-xl active:bg-yellow-400"
            to="/login"
          >
            <span className="text-sm font-medium"> Login </span>{" "}
            <FaLongArrowAltRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
