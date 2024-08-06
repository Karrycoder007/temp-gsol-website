"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const Navbarmain = () => {
  const [isHovered, setIsHovered] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-30 heading-2">
      <div className="py-5 px-10">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src="/grudhralogo.png"
              alt=""
              height="60"
              width="60"
              className="rounded-full"
            />
            {isMenuOpen ? (
              <MdClose
                className="h-8 w-8 text-black md:hidden max-sm:block cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            ) : (
              <HiMenuAlt3
                className="h-8 w-8 text-black md:hidden max-sm:block cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            )}
            <nav className="hidden md:flex gap-6 text-black">
              {["Home", "About", "Contact Us"].map((item, index) => (
                <a
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "/about"
                      : "/contact"
                  } // Adjust href based on the link
                  className="text-2xl relative group"
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {item}
                  {isHovered === item && (
                    <motion.div
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
              <div
                className="relative group"
                onMouseEnter={() => setIsHovered("What We Provide")}
                onMouseLeave={() => setIsHovered("")}
              >
                <button
                  className="text-2xl flex flex-row items-center"
                  onClick={handleDropdownClick}
                >
                  What We Provide <IoMdArrowDropdown className="ml-1 mt-1" />
                </button>
                <AnimatePresence>
                  {(isHovered === "What We Provide" || isDropdownOpen) && (
                    <motion.div
                      className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href="/iot"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        IoT Solutions
                      </a>
                      <a
                        href="/marketing"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Digital Marketing
                      </a>
                      <a
                        href="/webappservices"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Web and App Services
                      </a>
                      <a
                        href="/biodegradable"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Bio-degradable Products
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-row gap-5 text-2xl justify-center items-center cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/coderkarry007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-gray-700 hover:text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/grudhrasolutions_pvt_ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-700 hover:text-pink-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/coderkarry007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX className="text-gray-700 hover:text-blue-600" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 p-4 text-black">
              {["Home", "About", "Contact Us"].map((item, index) => (
                <a
                  key={index}
                  href={
                    item === "Home"
                      ? "/"
                      : item === "About"
                      ? "/about"
                      : "/contact"
                  } // Adjust href based on the link
                  className="text-2xl relative group"
                  onMouseEnter={() => setIsHovered(item)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {item}
                  {isHovered === item && (
                    <motion.div
                      className="absolute left-0 bottom-0 w-full h-1 bg-black origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              ))}
              <div className="relative group">
                <button
                  className="text-2xl flex flex-row items-center"
                  onClick={handleDropdownClick}
                  onMouseEnter={() => setIsHovered("Services")}
                  onMouseLeave={() => setIsHovered("")}
                >
                  Services <IoMdArrowDropdown className="ml-1 mt-1" />
                </button>
                <AnimatePresence>
                  {(isHovered === "Services" || isDropdownOpen) && (
                    <motion.div
                      className="bg-white shadow-lg rounded-md mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href="/iot"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        IoT Solutions
                      </a>
                      <a
                        href="/marketing"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Digital Marketing
                      </a>
                      <a
                        href="/webappservices"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Web and App Services
                      </a>
                      <a
                        href="/biodegradable"
                        className="block px-4 py-2 text-black hover:bg-gray-300"
                        target="_blank"
                      >
                        Bio-degradable Products
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="flex flex-row  text-2xl gap-10 items-center justify-end cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/coderkarry007/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-gray-700 hover:text-blue-600 " />
                </a>
                <a
                  href="https://github.com/Karrycoder007"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-gray-700  hover:text-gray-900" />
                </a>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-gray-700 hover:text-pink-500" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbarmain;
