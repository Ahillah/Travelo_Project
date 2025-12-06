import { motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../assets/icons/GG.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50  bg-primary  w-full relative "
    >
     <div className="flex justify-between items-center md:w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:gap-4 ">
       <div className="flex items-center justify-center gap-2">
        <h1 className="font-medium sm:text-4xl lg:text-5xl logo-font">
          Travel
        </h1>
        <img className="w-[50px] h-[46px]" src={Logo} />
      </div>

      <div className="md:flex gap-2 md:gap-4 items-center flex-1 justify-center" >
        <ul className="hidden md:flex gap-2 md:gap-2.5 lg:gap-4 items-center">
          <li>
            <NavLink
              to={"/"}
              className="px-2 py-1 hover:text-[#29bbac] transition main-font  font-medium text-[20px]"
            >
              Tickets
            </NavLink>
          </li>
          <li>
            <NavLink
              to={""}
              className="px-2 py-1 hover:text-[#29bbac]  transition main-font  font-medium text-[20px]"
            >
              Tours
            </NavLink>
          </li>
          <li>
            <NavLink
              to={""}
              className="px-2 py-1 hover:text-[#29bbac]  transition main-font  font-medium text-[20px]"
            >
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to={""}
              className="px-2 py-1 hover:text-[#29bbac]  transition main-font  font-medium text-[20px]"
            >
              Activities
            </NavLink>
          </li>
          <li>
            <NavLink
              to={""}
              className="px-2 py-1 hover:text-[#29bbac]  transition main-font  font-medium text-[20px]"
            >
              Hotel
            </NavLink>
          </li>

          <li>
            <NavLink
              to={""}
              className="px-2 py-1 hover:text-[#29bbac]  transition main-font  font-medium text-[20px]"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Toggle Button */}

        <div className="md:hidden flex items-center space-x-2">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <IoMdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-8">
        <div className="flex items-center">
          <MdLanguage className="md:w-8 md:h-8 inline-block mr-2" />
          <span className="main-font  font-medium lg:text-[20px]">En</span>
        </div>
        <button className="px-5 lg:px-3 py-1  rounded bg-[#29bbac] main-font  font-medium text-[18px] lg:text-[20px]">
          SignIn
        </button>
      </div>
     </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-[#29bbac] shadow-lg"
        >
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                to={"/"}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Tickets
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Tours
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to={""}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Hotel
              </Link>
            </li>

            <li>
              <Link
                to={""}
                className="px-2 py-1 hover:text-accent transition main-font  font-medium text-[20px]"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
