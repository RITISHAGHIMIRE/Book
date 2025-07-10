import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { toast } from 'react-toastify';

const mockBooks = [
  {
    id: 1,
    title: 'To Kill a Mockingbird',
    description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. Completely compelling and deeply moving, this novel has become one of the most beloved classics of modern literature.',
    price: 22.99,
    originalPrice: 25.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    reviews: 1284,
    author: 'Harper Lee',
    pages: 281,
    publishedYear: 1960,
    isbn: '9780061120084'
  },
  {
    id: 2,
    title: 'The Fault in Our Stars',
    description: 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal. When a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel\'s story is about to be completely rewritten.',
    price: 9.99,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.2,
    reviews: 892,
    author: 'John Green',
    pages: 313,
    publishedYear: 2012,
    isbn: '9780525478812'
  },
  {
    id: 3,
    title: 'The Picture of Dorian Gray',
    description: 'Oscar Wilde\'s only novel is the dreamlike story of a young man who sells his soul for eternal youth and beauty. This darkly fascinating tale of aestheticism and moral corruption has shocked and enthralled readers for generations.',
    price: 21.99,
    originalPrice: 26.99,
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    reviews: 956,
    author: 'Oscar Wilde',
    pages: 254,
    publishedYear: 1890,
    isbn: '9780141439570'
  },
  {
    id: 4,
    title: '1984',
    description: 'A dystopian social science fiction novel about totalitarianism, mass surveillance, and repressive regimentation. Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One, where he rewrites historical records to conform to the Party\'s version of events.',
    price: 14.99,
    originalPrice: 19.99,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    reviews: 2103,
    author: 'George Orwell',
    pages: 328,
    publishedYear: 1949,
    isbn: '9780451524935'
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    description: 'The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue.',
    price: 12.99,
    originalPrice: 17.99,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.6,
    reviews: 1752,
    author: 'Jane Austen',
    pages: 279,
    publishedYear: 1813,
    isbn: '9780141439518'
  },
  {
    id: 6,
    title: 'The Great Gatsby',
    description: 'A portrait of the Jazz Age in all of its decadence and excess, capturing the American Dream through the story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan. Fitzgerald\'s masterpiece is an exquisitely crafted tale of America in the 1920s.',
    price: 11.99,
    originalPrice: 15.99,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.3,
    reviews: 1438,
    author: 'F. Scott Fitzgerald',
    pages: 180,
    publishedYear: 1925,
    isbn: '9780743273565'
  },
  {
    id: 7,
    title: 'Moby Dick',
    description: 'The epic tale of Captain Ahab\'s obsessive quest to kill the white whale that took his leg. Melville\'s masterpiece is at once a thrilling adventure story, a meditation on America, and one of literature\'s most profound explorations of the human condition.',
    price: 18.99,
    originalPrice: 24.99,
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.1,
    reviews: 987,
    author: 'Herman Melville',
    pages: 585,
    publishedYear: 1851,
    isbn: '9780142437247'
  },
  {
    id: 8,
    title: 'Jane Eyre',
    description: 'Orphaned into the household of her cruel aunt, Jane Eyre grows up to become a governess at Thornfield Hall. There she falls in love with the mysterious Mr. Rochester, but their romance is threatened by dark secrets from his past in this Gothic masterpiece.',
    price: 13.99,
    originalPrice: 18.99,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    rating: 4.4,
    reviews: 1256,
    author: 'Charlotte Brontë',
    pages: 532,
    publishedYear: 1847,
    isbn: '9780141441146'
  }
];

const SingleRecommendation = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = mockBooks.find(item => item.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Book Not Found</h2>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...book, quantity: 1 }));
    toast.success(`${book.title} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      icon: <FaShoppingCart className="text-green-500" />,
    });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      i < Math.floor(rating) ? 
      <FaStar key={i} className="text-yellow-500" /> : 
      <FaRegStar key={i} className="text-yellow-500" />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <FaArrowLeft className="mr-2" /> Back to Recommendations
        </Link>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Book Image */}
            <div className="flex justify-center bg-gray-100 p-4 rounded-lg">
              <img 
                src={book.image} 
                alt={book.title} 
                className="h-96 w-auto object-contain rounded-md shadow-md"
              />
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
                <div className="flex items-center mt-2">
                  <div className="flex mr-2">
                    {renderStars(book.rating)}
                    <span className="ml-1 text-gray-600">{book.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500">({book.reviews.toLocaleString()} reviews)</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl font-bold text-red-600">${book.price.toFixed(2)}</span>
                  <span className="text-xl text-gray-500 line-through">${book.originalPrice.toFixed(2)}</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round((1 - book.price/book.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <p className="text-green-600 font-medium mt-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                  In Stock (Ships in 1-2 business days)
                </p>
              </div>

              {/* Description */}
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
                <p className="text-gray-700">{book.description}</p>
              </div>

              {/* Details */}
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Product Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600"><strong>Author:</strong> {book.author}</p>
                    <p className="text-gray-600"><strong>Publisher:</strong> BookHouse Inc.</p>
                    <p className="text-gray-600"><strong>Published:</strong> {book.publishedYear}</p>
                  </div>
                  <div>
                    <p className="text-gray-600"><strong>Pages:</strong> {book.pages}</p>
                    <p className="text-gray-600"><strong>ISBN-10:</strong> {book.isbn}</p>
                    <p className="text-gray-600"><strong>Dimensions:</strong> 6.2 x 9.3 inches</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="border-t border-gray-200 px-6 py-8">
            {/* About the Author */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">About the Author</h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                    Author Image
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{book.author}</h3>
                  <p className="text-gray-600 mt-2">
                    {book.author} is an acclaimed author with multiple bestsellers to their name. 
                    Their works have been translated into dozens of languages and have sold millions 
                    of copies worldwide. Known for their compelling storytelling and deep character 
                    development, {book.author.split(' ')[0]} continues to be one of the most influential 
                    voices in contemporary literature.
                  </p>
                </div>
              </div>
            </section>

            {/* Customer Reviews */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Customer Reviews</h2>
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => {
                  const reviewRating = Math.floor(Math.random() * 2) + 4;
                  const reviewDate = new Date();
                  reviewDate.setDate(reviewDate.getDate() - Math.floor(Math.random() * 30));
                  
                  return (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-gray-500">
                          User
                        </div>
                        <div>
                          <h4 className="font-medium">Customer {i+1}</h4>
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              {renderStars(reviewRating)}
                            </div>
                            <span className="text-sm text-gray-500 ml-1">
                              Reviewed on {reviewDate.toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 pl-16">
                        "This book exceeded all my expectations. The storytelling is masterful, 
                        and the characters feel incredibly real. I couldn't put it down and 
                        finished it in one sitting. Highly recommend to anyone who enjoys 
                        {i % 2 === 0 ? ' thought-provoking literature' : ' compelling narratives'}!"
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecommendation;