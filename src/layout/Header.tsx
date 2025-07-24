import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenu) setMobileMenu(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenu]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-red-500 text-lg">Movies</span>
        </div>

        <nav className="space-x-6 hidden md:flex items-center">
          <NavLink
            to="/"
            className="hover:text-red-500 transition flex items-center gap-1"
          >
            <AiOutlineHome size={18} />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="hover:text-red-500 transition flex items-center gap-1"
          >
            <AiOutlineVideoCamera size={18} />
            Movies
          </NavLink>
          <NavLink
            to="/tickets"
            className="hover:text-red-500 transition flex items-center gap-1"
          >
            <AiOutlineUser size={18} />
            Account
          </NavLink>
          <NavLink
            to="/seorch"
            className="hover:text-red-500 transition flex items-center gap-1"
          >
            <AiOutlineSearch size={18} />
            Search
          </NavLink>
        </nav>

        {/* O'ng tomondagi elementlar */}
        <div className="flex items-center space-x-4">
          <select className="bg-black text-white border border-white px-2 py-1 rounded text-sm">
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
            <option value="en">En</option>
          </select>

          <button onClick={handleTheme} className="text-white">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm">
            Login
          </button>

          <button onClick={toggleMenu} className="md:hidden text-white">
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed z-40 bg-black text-white bottom-0 left-0 right-0 transform transition-transform duration-300 md:hidden ${
          mobileMenu ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          <NavLink
            to="/"
            className="hover:text-red-500 transition flex items-center gap-2"
            onClick={toggleMenu}
          >
            <AiOutlineHome />
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className="hover:text-red-500 transition flex items-center gap-2"
            onClick={toggleMenu}
          >
            <AiOutlineVideoCamera />
            Movies
          </NavLink>
          <NavLink
            to="/tickets"
            className="hover:text-red-500 transition flex items-center gap-2"
            onClick={toggleMenu}
          >
            <AiOutlineUser />
            Account
          </NavLink>
          <NavLink
            to="/seorch"
            className="hover:text-red-500 transition flex items-center gap-2"
            onClick={toggleMenu}
          >
            <AiOutlineSearch />
            Search
          </NavLink>
        </div>
      </div>

      <div className="h-[60px] md:h-[64px]" />
    </>
  );
};

export default Header;
