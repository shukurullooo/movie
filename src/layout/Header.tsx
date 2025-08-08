import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import {
  AiOutlineHome,
  AiOutlineVideoCamera,
  AiOutlineSearch,
  AiOutlineHeart,
} from "react-icons/ai";

const Header = () => {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 py-3 flex items-center justify-between shadow-md">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-red-500 text-lg">Movies</span>
        </div>

        {/* Center: Nav Links (desktop only) */}
        <nav className="space-x-6 hidden md:flex items-center">
          <NavLink to="/" className="hover:text-red-500 transition flex items-center gap-1">
            <AiOutlineHome size={18} />
            Home
          </NavLink>
          <NavLink to="/movies" className="hover:text-red-500 transition flex items-center gap-1">
            <AiOutlineVideoCamera size={18} />
            Movies
          </NavLink>
          <NavLink to="/search" className="hover:text-red-500 transition flex items-center gap-1">
            <AiOutlineSearch size={18} />
            Search
          </NavLink>
          <NavLink to="/saved" className="hover:text-red-500 transition flex items-center gap-1">
            <AiOutlineHeart size={18} />
            Saved
          </NavLink>
        </nav>

        {/* Right: Tools */}
        <div className="flex items-center space-x-4">
          <select className="hidden md:block bg-black text-white border border-white px-2 py-1 rounded text-sm">
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
        </div>
      </header>

      {/* ✅ Always Visible Bottom Nav (All devices) */}
     {/* ✅ Always Visible Bottom Nav (Mobile only) */}
<div className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700 flex justify-around items-center py-2 md:hidden">
  <NavLink to="/" className="flex flex-col items-center text-black dark:text-white hover:text-red-500 dark:hover:text-red-500">
    <AiOutlineHome size={22} />
    <span className="text-xs">Home</span>
  </NavLink>
  <NavLink to="/movies" className="flex flex-col items-center text-black dark:text-white hover:text-red-500 dark:hover:text-red-500">
    <AiOutlineVideoCamera size={22} />
    <span className="text-xs">Shop</span>
  </NavLink>
  <NavLink to="/saved" className="flex flex-col items-center text-black dark:text-white hover:text-red-500 dark:hover:text-red-500">
    <AiOutlineHeart size={22} />
    <span className="text-xs">Like</span>
  </NavLink>
  <NavLink to="/cart" className="flex flex-col items-center text-black dark:text-white hover:text-red-500 dark:hover:text-red-500">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 9h12l-2-9M9 21h6" />
    </svg>
    <span className="text-xs">Cart</span>
  </NavLink>
  <NavLink to="/search" className="flex flex-col items-center text-black dark:text-white hover:text-red-500 dark:hover:text-red-500">
    <AiOutlineSearch size={22} />
    <span className="text-xs">Search</span>
  </NavLink>
</div>


      {/* Spacers to avoid content hiding under fixed bars */}
      <div className="h-[60px] md:h-[64px]" />
      <div className="h-[60px]" />
    </>
  );
};

export default Header;
