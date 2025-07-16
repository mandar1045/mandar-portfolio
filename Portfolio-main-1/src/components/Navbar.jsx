import React from "react";

const MenuIcon = () => {
  return (
    <div className="fixed top-10 left-10 z-50 floating-icon">
      <div className="dropdown">
        <div
          tabIndex="0"
          role="button"
          className="btn btn-ghost btn-circle bg-zinc-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex="0"
          className="menu menu-sm dropdown-content bg-base-300 rounded-lg z-10 mt-3 w-52 p-2 shadow"
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#journey">My Journey</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#highlights">Highlights</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuIcon;
