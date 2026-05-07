import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleOpenMobileNav = () => {
    setMobileNav(true);
  };

  const handleCloseMobileNav = () => {
    setMobileNav(false);
  };

  return (
    <header className="relative">
      <div className="container flex items-center justify-between mx-auto px-0 md:px-0">
        <a className="logo flex items-center justify-center h-20">
          <img src="./logo.webp" alt="Logo" />
        </a>
        <ul
          className={`navbar z-[999] flex items-center justify-center gap-[25px] transition-all duration-500 md:static md:flex-row md:gap-[25px] md:bg-transparent md:min-h-0 md:w-auto md:opacity-100 md:left-0 md:p-0 md:top-0
            fixed top-0 left-[-250rem] flex-col items-start justify-start gap-12 p-8 bg-white w-full min-h-screen opacity-0
            ${
              mobileNav ? "left-0 opacity-100" : "left-[-250rem] opacity-0"
            } md:relative md:opacity-100 md:left-0`}
        >
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              home
            </NavLink>
          </li>
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              about
            </NavLink>
          </li>
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="team"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              team
            </NavLink>
          </li>
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              blog
            </NavLink>
          </li>
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="shopPage"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              shop
            </NavLink>
          </li>
          <li onClick={handleCloseMobileNav}>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `font-bold uppercase transition-colors duration-500 text-[#a6a6a6] hover:text-[var(--main-color)] ${
                  isActive ? "text-[var(--main-color)]" : ""
                }`
              }
            >
              contact
            </NavLink>
          </li>
          <span
            className="close hidden absolute right-[25px] text-[22px] md:hidden block"
            onClick={handleCloseMobileNav}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </ul>

        <span
          className="bars hidden text-[23px] md:hidden block"
          onClick={handleOpenMobileNav}
        >
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
    </header>
  );
}

export default Header;
