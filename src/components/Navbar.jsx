import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft, HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi2";
import { FaSearch, FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false;
  const cartItems = useSelector(state => state.cart.cartItems);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    setCartCount(totalItems);
  }, [cartItems]);

  return (
    <header className="w-11/12 mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3BottomLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-gray-200 w-full py-1 md:pl-10 pl-8 pr-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  <img
                    src="/path-to-avatar.png"
                    alt="User avatar"
                    className="size-7 rounded-full ring-2 ring-blue-500"
                  />
                </button>
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
                          Cart Page
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/checkout"
                          className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Check Out
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
              </div>
            ) : (
              <Link to="/login" className="flex items-center justify-center">
                <HiOutlineUser className="size-6 hover:text-blue-500 transition-colors" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <FaRegHeart className="size-6 hover:text-blue-500 transition-colors" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm hover:bg-yellow-600 transition-colors relative"
          >
            <HiOutlineShoppingCart className="text-white" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 1.5 }}
                animate={{ scale: 1 }}
                className="text-sm font-semibold sm:ml-1 text-white"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;