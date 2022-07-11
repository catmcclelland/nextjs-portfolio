import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };
  return (
    <nav className="h-12  border-b border-slate-800">
      <ul className="h-12 md:flex  md: justify-center lg:justify-end flex-row items-center hidden  ">
        <li>
          <a
            href="#home"
            className="mx-4 px-4 py-1 bg-gray-800 rounded-lg text-gray-100 font-mono">
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mx-4 px-4 py-2  rounded-lg text-gray-100 font-mono">
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="mx-4 px-4 py-2 text-gray-100 rounded-lg  font-mono">
            Projects
          </a>
        </li>
      </ul>

      {navBarOpen ? (
        <div className="flex flex-col justify-around">
          <AiOutlineClose
            className="m-2 h-6 w-6 self-end fill-none text-white stroke-white z-20"
            onClick={handleClick}
          />
          <ul className=" mt-10 flex w-full bg-black z-10 flex-col justify-center items-center text-xl">
            <li className="m-6" onClick={handleClick}>
              <a
                href="#home"
                className="m-6 px-4 py-1 bg-gray-800 rounded-lg white font-mono">
                Home
              </a>
            </li>
            <li className="m-6" onClick={handleClick}>
              <a
                href="#"
                className="m-6 px-4 py-2  rounded-lg  font-mono text-gray-100">
                About
              </a>
            </li>
            <li className="m-6" onClick={handleClick}>
              <a
                href="#projects"
                className="mx-4 px-4 py-2  rounded-lg  font-mono text-gray-100">
                Projects
              </a>
            </li>
            {/* <li className="m-6">
              <a
                href="#skills"
                className="mx-4 px-4 py-2  rounded-lg  font-mono text-gray-100">
                Skills
              </a>
            </li> */}
          </ul>
        </div>
      ) : (
        <div className="flex md:hidden flex-row items-center justify-end ">
          <GiHamburgerMenu
            onClick={handleClick}
            className="m-2 h-8 w-8 md:hidden text-white"
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
