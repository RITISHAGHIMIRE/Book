import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaComments, FaClock } from 'react-icons/fa';
import { MdEmail, MdSupportAgent } from 'react-icons/md';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">Contact BookBaazar</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help! Reach out to us through any of these channels and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Why Contact Us Section */}
      <div className="mb-20 bg-indigo-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">Why Contact Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <MdSupportAgent className="text-3xl text-amber-600 mr-4" />
              <h3 className="text-xl font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600">
              Our book specialists are available to help you find the perfect book or answer any questions about your order.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <FaComments className="text-3xl text-amber-600 mr-4" />
              <h3 className="text-xl font-semibold">Quick Resolution</h3>
            </div>
            <p className="text-gray-600">
              Have an issue with your order? We prioritize quick responses and effective solutions to ensure your satisfaction.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <FaClock className="text-3xl text-amber-600 mr-4" />
              <h3 className="text-xl font-semibold">Reading Recommendations</h3>
            </div>
            <p className="text-gray-600">
              Not sure what to read next? Our team can provide personalized recommendations based on your reading preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods and Map */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Contact Methods */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-700 mb-8">Get In Touch</h2>
          
          <div className="space-y-6">
            {/* Phone Support */}
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaPhone className="text-amber-700 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Phone Support</h3>
                <p className="text-gray-600 mb-1">+1 (800) 123-4567</p>
                <p className="text-sm text-gray-500">Monday-Friday: 9am-8pm EST</p>
                <p className="text-sm text-gray-500">Saturday-Sunday: 10am-6pm EST</p>
              </div>
            </div>
            
            {/* Email Support */}
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaEnvelope className="text-amber-700 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Email Support</h3>
                <p className="text-gray-600 mb-1">support@bookbaazar.com</p>
                <p className="text-gray-600 mb-1">orders@bookbaazar.com</p>
                <p className="text-sm text-gray-500">Typically respond within 24 hours</p>
              </div>
            </div>
            
            {/* Live Chat */}
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaHeadset className="text-amber-700 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Live Chat</h3>
                <p className="text-gray-600 mb-1">Available on our website</p>
                <p className="text-sm text-gray-500">Monday-Friday: 8am-9pm EST</p>
                <button className="mt-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Start Chat Now
                </button>
              </div>
            </div>
            
            {/* Mailing Address */}
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaMapMarkerAlt className="text-amber-700 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Headquarters</h3>
                <p className="text-gray-600 mb-1">123 Book Street</p>
                <p className="text-gray-600 mb-1">Literary District, NY 10001</p>
                <p className="text-gray-600">United States</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-amber-700 mb-8">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              title="BookBaazar Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291543!2d-73.987844924136!3d40.74844097138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689876543210!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-8">Send Us a Message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="How can we help?"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-amber-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;