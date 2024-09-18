import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/TIcToc.png";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";

export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Best Places",
    link: "/best-places",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-10">
      <div className="container bg-gradient-to-r from-primary to-secondary text-black">
        <div className="flex justify-between py-[2px] sm:block hidden">
          {/* <p className="text-sm">20% off on next booking</p>
          <p>Mobile No +91 1234567890</p> */}
        </div>
        <div className="container py-3 sm-py-0">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/">
                <img src={LogoImg} alt="" className="h-16" />
              </Link>
            </div>
            <div className="md:block">
              <ul className="flex items-center gap-6 ">
                {NavbarLinks.map((link, index) => (
                  <li className="py-4" key={index}>
                    <NavLink to={link.link} activeclassName="active">
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="inline-block py-4 relative group cursor-pointer">
                  <div className="dropdown group flex items-center">
                    <span>Quick Lines</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-black px-3 py-1 rounded-full "
                onClick={() => {
                  handleOrderPopup();
                }}
              >
                BOOK NOW
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
