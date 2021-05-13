import { useState } from "react";
import Link from "next/link";

import navbar from "../styles/navbar.module.css";
import MenuList from "./MenuList";

const Navbar = ({ home }) => {
  const [menuState, setMenuState] = useState(false); //false: closed, true: open

  const handleToggle = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center w-full pt-4 px-6 ${
          home ? "absolute text-white" : ""
        }`}
      >
        <Link href="/">
          <a className="flex items-center">
            <img
              src="/logo/crop.png"
              alt="inicio"
              className="logo mr-4"
              height="72"
              width="72"
            />
            <span>Huellitas de amor</span>
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

        <div className="hidden md:block">
          <Link href="/adopta">
            <a className="mr-4">Adopta un peludito</a>
          </Link>
          <Link href="/#nosotros">
            <a className="mr-4">Nosotros</a>
          </Link>
          <Link href="/#contacto">
            <a className="mr-4">Contacto</a>
          </Link>
          <Link href="/login">
            <a className="">Login</a>
          </Link>
        </div>
      </div>
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
