import React from 'react';
import { FaBook, FaShippingFast, FaHeadset, FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { MdPayment, MdLocalLibrary } from 'react-icons/md';
import { GiBookshelf } from 'react-icons/gi';

const AboutUs = () => {
  // Sample publisher logos (replace with actual publisher logos)
  const publishers = [
    { name: 'Penguin', logo: 'https://via.placeholder.com/80?text=Penguin' },
    { name: 'HarperCollins', logo: 'https://via.placeholder.com/80?text=HarperCollins' },
    { name: 'Random House', logo: 'https://via.placeholder.com/80?text=Random+House' },
    { name: 'Hachette', logo: 'https://via.placeholder.com/80?text=Hachette' },
    { name: 'Macmillan', logo: 'https://via.placeholder.com/80?text=Macmillan' },
    { name: 'Scholastic', logo: 'https://via.placeholder.com/80?text=Scholastic' },
  ];

  // Sample customer reviews
  const reviews = [
    { name: 'Sarah Johnson', rating: 5, comment: 'Amazing collection and fast delivery!', date: '2023-05-15' },
    { name: 'Michael Chen', rating: 4.5, comment: 'Great prices and excellent customer service.', date: '2023-06-22' },
    { name: 'Priya Patel', rating: 5, comment: 'My go-to bookstore for all my reading needs!', date: '2023-04-10' },
  ];

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-6">About BookBaazar</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your one-stop destination for all your reading needs. We're passionate about books and committed to bringing the joy of reading to your doorstep.
        </p>
      </div>

      {/* Why Choose BookBaazar */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-12">Why Choose BookBaazar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaBook className="text-4xl text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
            <p className="text-gray-600">Over 1 million titles across all genres to satisfy every reader's taste.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaShippingFast className="text-4xl text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your books delivered within 2-3 business days with our express shipping.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <MdPayment className="text-4xl text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Multiple payment options with 100% secure checkout process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FaHeadset className="text-4xl text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer care team is always ready to assist you with any queries.</p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-20 bg-indigo-50 p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <GiBookshelf className="text-8xl text-amber-700 mx-auto lg:mx-0" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-amber-700 mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2015, BookBaazar started as a small online bookstore with a mission to make books accessible to everyone. What began as a passion project has now grown into one of the leading online bookstores in the region.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in the transformative power of books and are committed to fostering a love for reading in our community. Our carefully curated collection ensures there's something for every reader, from bestselling novels to academic texts.
            </p>
            <p className="text-gray-700">
              Today, we serve thousands of happy customers nationwide and continue to expand our offerings to provide the best possible book-buying experience.
            </p>
          </div>
        </div>
      </div>

      {/* Publishers We Work With */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-12">We Work With Hundreds of Publishers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {publishers.map((publisher, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <img src={publisher.logo} alt={publisher.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-amber-700 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore Our Collection?</h2>
        <p className="mb-6 max-w-2xl mx-auto">Join thousands of happy readers who have discovered their next favorite book with BookBaazar.</p>
        <button className="bg-white text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-indigo-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default AboutUs;