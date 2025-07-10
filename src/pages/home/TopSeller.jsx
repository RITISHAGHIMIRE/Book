import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const TopSeller = () => {
  const dispatch = useDispatch();
  const [activeGenre, setActiveGenre] = useState("All");
  const sliderRef = useRef(null);

  const genres = [
    "All",
    "Fiction",
    "Non-Fiction",
    "Business",
    "Self-Help",
    "Technology",
  ];

  const books = [
    {
      id: 1,
      title: "How to Grow Your Online Store",
      description:
        "Learn the best strategies to grow your online store in today's competitive market.",
      price: 19.99,
      originalPrice: 29.99,
      genre: "Business",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description:
        "A classic novel about racial injustice and moral growth in the American South.",
      price: 12.99,
      originalPrice: 18.99,
      genre: "Fiction",
      image:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Top 10 Fiction Books This Year",
      description:
        "A curated list of the best fiction books that are trending this year.",
      price: 14.99,
      originalPrice: 24.99,
      genre: "Fiction",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Mastering SEO in 2024",
      description:
        "Tips and tricks to boost your SEO and rank higher on search engines.",
      price: 29.99,
      originalPrice: 39.99,
      genre: "Technology",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "The Future of Dorian Gray",
      description: "A modern retelling of the classic with a futuristic twist.",
      price: 16.99,
      originalPrice: 22.99,
      genre: "Fiction",
      image:
        "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 6,
      title: "Atomic Habits",
      description:
        "Tiny changes, remarkable results - build good habits and break bad ones.",
      price: 15.99,
      originalPrice: 25.99,
      genre: "Self-Help",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const filteredBooks =
    activeGenre === "All"
      ? books
      : books.filter((book) => book.genre === activeGenre);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-xl shadow-lg my-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Top Sellers</h2>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`px-4 py-2 rounded-full transition-all ${
                activeGenre === genre
                  ? "bg-[#3498db] text-white font-semibold"
                  : "bg-gray-100 text-gray-600 font-medium hover:bg-gray-200"
              }`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="flex overflow-x-auto scrollbar-hide gap-6 py-4"
          ref={sliderRef}
        >
          {filteredBooks.map((book) => (
            <motion.div
              key={book.id}
              whileHover={{ y: -5 }}
              className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
            >
              <Link to={`/book/${book.id}`} className="block">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover"
                />
              
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {book.description}
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-red-500">
                    ${book.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${book.originalPrice.toFixed(2)}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(book)}
                  className="w-full py-2 bg-[#3498db] text-white rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-sky-500 transition-colors mt-auto"
                >
                  <FaCartPlus /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-[#3498db] hover:text-white hover:scale-110 transition-all hidden md:block"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-[#3498db] hover:text-white hover:scale-110 transition-all hidden md:block"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TopSeller;