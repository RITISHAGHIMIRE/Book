// File name: BookDiscoveryDashboard.jsx
import React from 'react';
import { FaBook, FaFire, FaRegBookmark, FaShare, FaUserFriends } from 'react-icons/fa';

const BookDiscoveryDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">BookBubble</h1>
        <p className="text-gray-600 mt-2">Discover your next favorite read</p>
      </header>

      {/* Welcome Section */}
      <section className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome Back, Reader!</h2>
        <p className="text-gray-600">
          Happy reading! Explore stories from magical worlds and secret realms. 
          Found a favorite? Share it with friends!
        </p>
      </section>

      {/* Trending Now Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaFire className="text-red-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "A Song of Ice and Fire", author: "George R.R. Martin" },
            { title: "Fantastic Beasts", author: "J.K. Rowling" },
            { title: "Game of Thrones", author: "George R.R. Martin" },
            { title: "The Silent Patient", author: "Alex Michaelides" }
          ].map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-100 h-32 mb-3 rounded flex items-center justify-center">
                <FaBook className="text-indigo-500 text-3xl" />
              </div>
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Collections */}
      <section className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">New Collections</h2>
        <div className="flex items-center bg-white p-4 rounded-lg">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <FaRegBookmark className="text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium">Epic Fantasy Series</h3>
            <p className="text-sm text-gray-500">Journey through magical realms and legendary battles</p>
          </div>
        </div>
      </section>

      {/* Reading Progress */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <FaBook className="text-indigo-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Your Reading</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between mb-2 text-sm text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
          <div className="flex justify-between">
            {[11, 12, 13, 14, 15, 16, 17].map((pages, i) => (
              <div key={i} className="h-8 w-8 flex items-end justify-center">
                <div 
                  className="bg-indigo-400 rounded-t w-6"
                  style={{ height: `${pages * 2}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section>
        <div className="flex items-center mb-4">
          <FaUserFriends className="text-green-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800">Reader Community</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-green-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600 font-medium">RJ</span>
              </div>
              <div>
                <h4 className="font-medium">Roberto Jordan</h4>
                <p className="text-gray-600 text-sm">"What a delightful read! The magical chapter had me captivated."</p>
                <div className="mt-2 text-xs text-gray-400 flex items-center">
                  <span>Chapter Three</span>
                  <span className="mx-2">•</span>
                  <span>7 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-start">
              <div className="bg-purple-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-medium">AH</span>
              </div>
              <div>
                <h4 className="font-medium">Anna Henry</h4>
                <p className="text-gray-600 text-sm">"Just finished the last chapter - what an incredible journey!"</p>
                <div className="mt-2 text-xs text-gray-400 flex items-center">
                  <span>Final Chapter</span>
                  <span className="mx-2">•</span>
                  <span>Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDiscoveryDashboard;