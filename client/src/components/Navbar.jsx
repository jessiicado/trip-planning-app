import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="gap-x-5 items-center flex flex-row">
          <img alt="Plannd logo" className="h-16 sm:h-20" src={logo} />
          <h1 className="text-3xl font-bold">Plann'd</h1>
        </NavLink>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            // X icon
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* DESKTOP */}
        <div className="hidden md:flex md:flex-row md:justify-end md:items-center">
          <div className="hidden md:flex md:justify-end items-center font-medium gap-6">
            <NavLink to="/search" className="hover:text-gray-700">
              Search
            </NavLink>
            <NavLink to="/explore" className="hover:text-gray-700">
              Explore
            </NavLink>
            <NavLink to="/trip" className="hover:text-gray-700">
              All Trips
            </NavLink>
            <div className="flex gap-2">
              <NavLink className="border-2 px-6 py-2 rounded-full" to="/login">
                Login
              </NavLink>
              <NavLink
                className="!bg-black text-white border-2 px-6 py-2 rounded-full"
                to="/create"
              >
                Create
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col w-screen px-4 pb-4 space-y-5 bg-gray-50 font-medium">
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/trip"
            >
              All Trips
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/explore"
            >
              Explore
            </NavLink>
          </li>
          <li className="flex flex-col gap-2 px-4">
            <NavLink
              className="border-2 px-6 py-2 rounded-full text-center"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              to="/createuser"
              className="!bg-black text-white border-2 border-black px-6 py-2 rounded-full text-center"
            >
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
