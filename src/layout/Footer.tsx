import { NavLink } from "react-router-dom";
import {
  AiOutlineFileText,
  AiOutlineStar,
  AiOutlineQuestionCircle,
  AiOutlinePhone,
  AiOutlineVideoCamera,
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import { MdTheaterComedy } from "react-icons/md";
import { GiMusicalNotes, GiBasketballBall } from "react-icons/gi";

import logo from "@/assets/main-logo.svg";
import googlePlay from "@/assets/image 7.png";
import appStore from "@/assets/image 8.png";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white px-6 md:px-16 py-10 transition-colors duration-300">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="flex flex-col items-start space-y-4">
          <img src={logo} alt="logo" className="w-24" />
          <img src={googlePlay} alt="Google Play" className="w-32" />
          <img src={appStore} alt="App Store" className="w-32" />
        </div>

        <div>
          <h3 className="mb-4 font-semibold">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/offer" className="flex items-center gap-2 hover:text-red-500">
                <AiOutlineFileText className="text-red-500" /> Public Offer
              </NavLink>
            </li>
            <li>
              <NavLink to="/ads" className="flex items-center gap-2 hover:text-red-500">
                <AiOutlineStar className="text-red-500" /> Advertising
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="flex items-center gap-2 hover:text-red-500">
                <AiOutlineQuestionCircle className="text-red-500" /> F.A.Q
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className="flex items-center gap-2 hover:text-red-500">
                <AiOutlinePhone className="text-red-500" /> Contacts
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 font-semibold">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/cinema" className="flex items-center gap-2 hover:text-red-500">
                <AiOutlineVideoCamera className="text-red-500" /> Cinema
              </NavLink>
            </li>
            <li>
              <NavLink to="/theatre" className="flex items-center gap-2 hover:text-red-500">
                <MdTheaterComedy className="text-red-500" /> Theatre
              </NavLink>
            </li>
            <li>
              <NavLink to="/concerts" className="flex items-center gap-2 hover:text-red-500">
                <GiMusicalNotes className="text-red-500" /> Concerts
              </NavLink>
            </li>
            <li>
              <NavLink to="/sports" className="flex items-center gap-2 hover:text-red-500">
                <GiBasketballBall className="text-red-500" /> Sports
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <a href="tel:+998959873338" className="text-red-500 font-medium">
              +998 (95) 897-33-38
            </a>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Follow Us</h3>
            <div className="flex items-center gap-4 text-xl">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500"
              >
                <AiFillInstagram />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500"
              >
                <AiFillFacebook />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
