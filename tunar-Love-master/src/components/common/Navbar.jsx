import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from "react";
import logo from "../../assets/Lunar Love.svg";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed z-10 w-full">
      {/* Top Nav */}
      <div className="bg-black text-white p-4 hidden md:flex flex-col md:flex-row justify-between items-center">
        <h3 className="mb-2 md:mb-0">Free shipping on orders over $2500</h3>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <a href="#store" className="hover:text-gray-400">
              Store
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#help" className="hover:text-gray-400">
              Help
            </a>
          </li>
          <li>
            <select className="bg-black text-white border border-gray-600 rounded hover:bg-gray-800 border-none cursor-pointer">
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
            </select>
          </li>
        </ul>
      </div>
      {/* Navbar */}
      <nav className="bg-white text-gray-950 p-4 flex justify-between items-center flex-wrap shadow-md">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li>
            <NavLink
              to="/men"
              className="hover:underline"
              activeClassName="text-gray-400"
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/women"
              className="hover:underline"
              activeClassName="text-gray-400"
            >
              Women
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-story"
              className="hover:underline"
              activeClassName="text-gray-400"
            >
              Our Story
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {isSearchOpen && (
            <input
              type="text"
              className="border rounded px-2 py-1 text-black"
              placeholder="Search..."
            />
          )}
          <FaSearch
            onClick={toggleSearch}
            className="h-5 w-5  cursor-pointer"
          />
          <FaShoppingCart className="h-5 w-5  cursor-pointer" />
          <button className="bg-gray-950 text-white px-4 py-2 rounded">
            Login
          </button>
          <FaBars
            onClick={toggleMobileMenu}
            className="h-6 w-6 md:hidden hover:text-gray-400 cursor-pointer"
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="flex flex-col space-y-2 mt-4 md:hidden">
            <li>
              <NavLink
                to="/men"
                className="hover:underline"
                activeClassName="text-gray-400"
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/women"
                className="hover:underline"
                activeClassName="text-gray-400"
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/our-story"
                className="hover:underline"
                activeClassName="text-gray-400"
              >
                Our Story
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
