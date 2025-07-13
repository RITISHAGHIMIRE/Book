import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft, HiOutlineUser, HiOutlineShoppingCart, HiOutlineXMark } from "react-icons/hi2";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Img from "../assets/book/photo_6302827029451621507_x.jpg";
import backgroundImage from "../assets/book/backgroundImage.jpg";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const currentUser = false;
  const cartItems = useSelector(state => state.cart.cartItems);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    setCartCount(totalItems);
  }, [cartItems]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Services", path: "/services" }
  ];

  return (
    <header
      className="w-full mx-auto px-4 py-4 sticky top-0 z-50 bg-white shadow-md"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-between items-center">
          {/* Left side - Logo and Mobile Menu Button */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden mr-4 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiOutlineXMark className="size-6 text-white" />
              ) : (
                <HiBars3BottomLeft className="size-6 text-white" />
              )}
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <div className="h-12 w-12 flex items-center justify-center mr-2">
                  <img src={Img} alt="logo" className="rounded-full w-full h-full object-cover"/>
                </div>
                <span className="text-xl font-bold text-white hidden sm:block">BookBaazar</span>
              </motion.div>
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center gap-8 mx-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="font-medium text-white hover:text-yellow-300 transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Icons and Search */}
          <div className="flex items-center gap-4">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center relative">
              <FaSearch className="absolute left-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search books..."
                className="bg-white w-64 py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-300"
              />
            </div>

            {/* Search - Mobile (Expandable) */}
            <div className="md:hidden flex items-center">
              {isSearchExpanded ? (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 180 }}
                  exit={{ width: 0 }}
                  className="relative overflow-hidden"
                >
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white w-full py-1 pl-10 pr-2 rounded-full focus:outline-none border border-gray-300"
                  />
                </motion.div>
              ) : (
                <button onClick={toggleSearch} className="focus:outline-none">
                  <FaSearch className="size-5 text-white" />
                </button>
              )}
            </div>

            {/* User Icon */}
            <div className="relative">
              {currentUser ? (
                <>
                  <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="focus:outline-none"
                  >
                    <HiOutlineUser className="size-6 text-white hover:text-yellow-300 transition-colors" />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40"
                      >
                        <ul className="py-2">
                          <li>
                            <Link
                              to="/dashboard"
                              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/orders"
                              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Orders
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/cart"
                              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/checkout"
                              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/logout"
                              className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link to="/login" className="flex items-center justify-center">
                  <HiOutlineUser className="size-6 text-white hover:text-yellow-300 transition-colors" />
                </Link>
              )}
            </div>

            {/* Wishlist Icon */}
            <button className="hidden sm:block">
              <FaRegHeart className="size-5 text-white hover:text-yellow-300 transition-colors" />
            </button>

            {/* Shopping Cart Icon */}
            <Link
              to="/cart"
              className="relative p-2"
            >
              <HiOutlineShoppingCart className="text-white size-6 hover:text-yellow-300 transition-colors" />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden w-full bg-white shadow-lg rounded-b-md overflow-hidden"
            >
              <ul className="py-2">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    className="px-4 py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <Link 
                      to={link.path} 
                      className="block w-full font-medium text-gray-800"
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                {/* Mobile Search (hidden when expanded search is shown) */}
                {!isSearchExpanded && (
                  <li className="px-4 py-3">
                    <div className="relative">
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search books..."
                        className="bg-gray-100 w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </li>
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;