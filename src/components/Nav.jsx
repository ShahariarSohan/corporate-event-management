import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const links = (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-medium text-purple-900" : "font-medium"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) =>
          isActive ? "font-medium text-purple-900" : "font-medium"
        }
      >
        Events
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? " text-purple-900 font-medium" : "font-medium"
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "font-medium text-purple-900" : "font-medium"
        }
      >
        Contact
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>
          <img className="w-16 h-16" src="/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <div>
          <img className="w-9 h-9 rounded-full" src="/user.png" alt="photo" />
        </div>
        <Link to="/login" className="btn bg-purple-900 text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
