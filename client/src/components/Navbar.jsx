import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800">
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        <NavLink to="/">
          <img alt="Plannd logo" className="h-16 sm:h-20" src={logo} />
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
      </div>

      {/* DROPDOWN */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <ul className="flex flex-col w-full px-4 pb-4 space-y-3 bg-gray-50 dark:bg-gray-800 font-medium">
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/"
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/alltrips"
            >
              All Trips
            </NavLink>
          </li>
          <li>
            <NavLink
              className="block py-2 px-4 hover:bg-gray-200 rounded"
              to="/recommendations"
            >
              Recommendations
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

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-6 px-6 py-2">
        <NavLink to="/" className="hover:text-gray-700">
          Search
        </NavLink>
        <NavLink to="/alltrips" className="hover:text-gray-700">
          All Trips
        </NavLink>
        <NavLink to="/create" className="hover:text-gray-700">
          Create Trip
        </NavLink>
        <div className="flex gap-2">
          <NavLink className="border-2 px-6 py-2 rounded-full" to="/login">
            Login
          </NavLink>
          <NavLink
            className="bg-stone-600 text-white border-2 px-6 py-2 rounded-full"
            to="/createuser"
          >
            Create
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
