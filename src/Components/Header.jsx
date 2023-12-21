import Logo from "./Logo.jsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Header = () => {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "About Us", link: "/about" },
    { name: "Questions", link: "/questions" },
  ];

  const [isOpen, setisOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow-md text-white w-full p-2 text-2xl md:h-16 fixed top-0 left-0 flex items-center">
      <div className="py-4 px-7 w-full h-full flex flex-col md:flex-row justify-between items-start md:items-center contenedor ">
        <Logo />

        <div
          onClick={() => setisOpen(!isOpen)}
          className="h-7 w-7 text-blue-300 absolute right-8 cursor-pointer md:hidden z-20"
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`flex flex-col md:flex-row items-center  justify-evenly gap-5  md:static absolute left-0 bg-gray-900/90 w-screen h-screen md:h-5 md:w-auto z-5 ease-in duration-800 transition-all md:translate-y-0  md:p-2 duration-300 ${
            isOpen
              ? "translate-y-0 "
              : "-translate-y-full opacity-0 md:opacity-100"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="my-5 md:my-0 hover:text-blue-400 ">
              <a href="/">{link.name}</a>
            </li>
          ))}
          <button className="bg-blue-500 px-3 py-2 mb-10 md:mb-0 rounded-xl inline-block hover:bg-blue-700">
            Contact
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
