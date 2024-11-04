import React, { useState } from "react";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Experience",
    href: "#experience",
  },
];

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks?.map((item) => (
        <li key={item?.id} className="nav-li">
         <a href={item.href} className="nav-li_a">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" fixed top-0 right-0 left-0 z-50 bg-black/90">
      <div className=" max-w-7xl mx-auto">
        <div className=" flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className=" text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            LAMA
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-neutral-400 hover:text-white focus:outline-none flex"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="py-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
