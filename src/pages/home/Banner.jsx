import React from "react";
import backgroundImage from "../../assets/book/backgroundImage.jpg";

function Banner() {
  return (
    <div 
      className="relative flex flex-col md:flex-row justify-between items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center'  
      }}
    >
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-20 md:pt-32 pb-20">
        {/* Text section - positioned higher and centered on mobile */}
        <div className="md:w-1/2 w-full text-white text-center md:text-left mb-10 md:mb-0 mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            New Releases This Week
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0">
            It's time to update your reading list with some of the latest and
            greatest releases in the literary world. From heart-pumping thrillers
            to captivating memoirs, this week's new releases offer something for
            everyone.
          </p>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Subscribe Now
          </button>
        </div>

        {/* Optional image section - kept empty as per your original */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          {/* You can add an image here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Banner;