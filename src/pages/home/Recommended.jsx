import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCartPlus, FaHeart, FaRegHeart } from 'react-icons/fa';
import { RiStarFill, RiStarHalfFill, RiStarLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Recommended = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const dispatch = useDispatch();

  const recommendedBooks = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
      price: 22.99,
      originalPrice: 25.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.5,
      reviews: 1284
    },
    {
      id: 2,
      title: 'The Fault in Our Stars',
      description: 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal.',
      price: 9.99,
      originalPrice: 19.99,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4,
      reviews: 892
    },
    {
      id: 3,
      title: 'The Picture of Dorian Gray',
      description: 'Oscar Wilde\'s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty.',
      price: 21.99,
      originalPrice: 26.99,
      image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      reviews: 956
    },
    {
      id: 4,
      title: '1984',
      description: 'A dystopian social science fiction novel about totalitarianism, mass surveillance, and repressive regimentation.',
      price: 14.99,
      originalPrice: 19.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      reviews: 2103
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      description: 'The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance.',
      price: 12.99,
      originalPrice: 17.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.6,
      reviews: 1752
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      description: 'A portrait of the Jazz Age in all of its decadence and excess, capturing the American Dream.',
      price: 11.99,
      originalPrice: 15.99,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      rating: 4.3,
      reviews: 1438
    }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftHandler = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRightHandler = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const toggleWishlist = (bookId) => {
    setWishlist(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId) 
        : [...prev, bookId]
    );
  };

  const handleAddToCart = (book) => {
    dispatch(addToCart({ ...book, quantity: 1 }));
    toast.success(`${book.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const renderRatingStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => {
      if (i < Math.floor(rating)) {
        return <RiStarFill key={i} className="text-yellow-400" />;
      }
      if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        return <RiStarHalfFill key={i} className="text-yellow-400" />;
      }
      return <RiStarLine key={i} className="text-yellow-400" />;
    });
  };

  return (
    <section className="p-8 my-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Recommended for you</h2>
        <button className="text-[#3498db] font-semibold hover:text-sky-500 hover:underline transition-colors">
          View all
        </button>
      </div>
      
      <div className="relative">
        <button 
          onClick={scrollLeftHandler}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#3498db] hover:text-white transition-all hidden md:flex items-center justify-center"
        >
          <FaChevronLeft className="text-lg" />
        </button>
        
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-6 py-4 overflow-x-auto scroll-smooth ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          } scrollbar-hide`}
        >
          {recommendedBooks.map(book => (
            <motion.div 
              key={book.id}
              whileHover={{ y: -5 }}
              className="min-w-[280px] bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
              <Link to={`/recommended-book/${book.id}`} className="block">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                </Link>
                <button
                  onClick={() => toggleWishlist(book.id)}
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-2 hover:bg-white hover:text-red-500 transition-all"
                  aria-label={wishlist.includes(book.id) ? "Remove from wishlist" : "Add to wishlist"}
                >
                  {wishlist.includes(book.id) ? 
                    <FaHeart className="text-red-500" /> : 
                    <FaRegHeart className="text-gray-600" />
                  }
                </button>
                <span className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                </span>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{book.description}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {renderRatingStars(book.rating)}
                  </div>
                  <span className="text-xs text-gray-500">
                    {book.rating} ({book.reviews.toLocaleString()} reviews)
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-gray-800">${book.price.toFixed(2)}</span>
                  <span className="text-sm text-gray-400 line-through">${book.originalPrice.toFixed(2)}</span>
                </div>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(book)}
                  className="w-full py-2 bg-[#3498db] text-white rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-sky-500 transition-colors"
                >
                  <FaCartPlus /> Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button 
          onClick={scrollRightHandler}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-[#3498db] hover:text-white transition-all hidden md:flex items-center justify-center"
        >
          <FaChevronRight className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default Recommended;