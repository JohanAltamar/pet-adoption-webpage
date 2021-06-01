import { useState } from "react";
import Link from "next/link";

import MenuList from "./MenuList";
import menuOptions from "./menuOptions";
import { responsivePadding } from "../../styles/stylingVars";
import navbar from "../../styles/navbar.module.css";

const Navbar = ({ home }) => {
  const [menuState, setMenuState] = useState(false); //false: closed, true: open

  const handleToggle = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <header
        className={`flex justify-between items-center z-10 w-full py-4 px-6 ${responsivePadding} ${
          home ? "absolute text-white" : ""
        }`}
      >
        <Link href="/">
          <a className="flex items-center font-bold tracking-wider">
            <img
              src="/logo/crop.png"
              alt="inicio"
              className="logo mr-4"
              height="72"
              width="72"
            />
            <span>Adopta un amigo</span>
          </a>
        </Link>

        {/* Burger Menu icon */}
        <div
          className={`${navbar.navbar} md:hidden w-6 cursor-pointer `}
          onClick={handleToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <nav className="hidden md:block w-1/2">
          <ul className="flex w-full items-center justify-around font-bold tracking-wider">
            {menuOptions.map(({ label, link }) => (
              <li key={link}>
                <Link href={link}>
                  <a className="">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* SIDEBAR CONTAINER WITH BACKGROUND */}
      <div
        className={`${
          menuState
            ? `${navbar.container} ${navbar.containerOpen}`
            : navbar.container
        }`}
      >
        <div className={navbar.backdrop} onClick={handleToggle}></div>
        <nav
          className={
            menuState ? `${navbar.nav_menu} ${navbar.active}` : navbar.nav_menu
          }
        >
          <MenuList onClick={handleToggle} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
