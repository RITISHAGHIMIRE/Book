import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const mockBooks = [
  {
    id: 1,
    title: 'How to Grow Your Online Store',
    description: 'Learn the best strategies to grow your online store in today\'s competitive market.',
    price: 19.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    description: 'A classic novel about racial injustice and moral growth in the American South.',
    price: 12.99,
    originalPrice: 18.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Top 10 Fiction Books This Year',
    description: 'A curated list of the best fiction books that are trending this year.',
    price: 14.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 4,
    title: 'Mastering SEO in 2024',
    description: 'Tips and tricks to boost your SEO and rank higher on search engines.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 5,
    title: 'The Future of Dorian Gray',
    description: 'A modern retelling of the classic with a futuristic twist.',
    price: 16.99,
    originalPrice: 22.99,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 6,
    title: 'Atomic Habits',
    description: 'Tiny changes, remarkable results - build good habits and break bad ones.',
    price: 15.99,
    originalPrice: 25.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
  }
];

const SingleTopSeller = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const book = mockBooks.find(item => item.id === parseInt(id));
  
    if (!book) return <div className="p-8 text-center text-red-600">Book not found.</div>;
  
    const handleAddToCart = () => {
      dispatch(addToCart({ ...book, quantity: 1 }));
      toast.success(`${book.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    };
  
    const rating = Math.floor(Math.random() * 2) + 4;
    const reviews = Math.floor(Math.random() * 100) + 20;
  
    return (
      <div className="max-w-6xl mx-auto p-6 md:p-8">
        <Link 
          to="/" 
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg"
            />
          </div>
  
          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{book.title}</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500 mr-2">
                  {[...Array(5)].map((_, i) => 
                    i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
                <span className="text-gray-600">{rating}.0 ({reviews} reviews)</span>
              </div>
            </div>
  
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-bold text-red-600">${book.price.toFixed(2)}</span>
                <span className="text-xl text-gray-500 line-through">${book.originalPrice.toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                  {Math.round((1 - book.price/book.originalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="text-green-600 font-medium">In Stock (Ships in 1-2 days)</p>
            </div>
  
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Description</h2>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li><strong>Format:</strong> Hardcover</li>
                  <li><strong>Pages:</strong> 320</li>
                  <li><strong>Publisher:</strong> BookHouse Inc.</li>
                  <li><strong>Language:</strong> English</li>
                  <li><strong>ISBN-10:</strong> {Math.floor(Math.random() * 9000000000) + 1000000000}</li>
                  <li><strong>Dimensions:</strong> 6.2 x 9.3 inches</li>
                </ul>
              </div>
            </div>
  
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#3498db] hover:bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Add to Cart
              </button>
              <button className="flex-1 bg-primary hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>
  
        <div className="mt-12 space-y-8">
          <section className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Author</h2>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-gray-600 mt-1">
                  Bestselling author with over 10 published works. Specializes in business growth strategies 
                  and has helped thousands of entrepreneurs scale their online businesses.
                </p>
              </div>
            </div>
          </section>
  
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-medium">Customer {i+1}</h4>
                      <div className="flex text-yellow-500 text-sm">
                        {[...Array(5)].map((_, j) => 
                          j < rating-1 ? <FaStar key={j} /> : <FaRegStar key={j} />
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    "This book completely transformed my approach to online business. Highly recommended!"
                  </p>
                  <p className="text-gray-500 text-sm mt-2">Reviewed on {new Date().toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default SingleTopSeller;