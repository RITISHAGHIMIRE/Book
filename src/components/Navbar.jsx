import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";
import avatorImg from "../assets/news/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {

  const cartItems = useSelector(state=> state.cart.cartItems);


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentUser = false; // This would typically come from your auth context

  return (
    <header className="w-11/12 mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiBars3BottomLeft className="size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <FaSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatorImg}
                    alt="User avatar"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li onClick={() => setIsDropdownOpen(false)}>
                        <Link
                          to="/logout" // Add your logout route
                          className="block px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
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
            className="bg-primary p-1 sm:px-6 py-2 flex items-center rounded-sm hover:bg-blue-600 transition-colors"
          >
            <HiOutlineShoppingCart className="text-white" />
            {
              cartItems.length >0 ?  <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> : <span className="text-sm font-semibold sm:ml-1 text-white">0</span>
            }
           
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;