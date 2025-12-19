import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const API_URL = 'https://cadensa.duckdns.org:8080/api/waiting-list/';

function JoinUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!email) {
      toast.error('Email is required!');
      return;
    }

    setIsLoading(true); // Start loading

    const postData = {
      name: name,
      email: email,
    };

    try {
      const response = await axios.post(API_URL, postData);

      toast.success(
        response.data.message || 'Successfully joined the waitlist!'
      );

      setName('');
      setEmail('');

    } catch (error) {
      let errorMessage = 'An unknown error occurred.';

      if (error.response) {
        errorMessage =
          error.response.data.message ||
          error.response.data.error ||
          `Server Error: ${error.email}`;
      } else if (error.request) {
        errorMessage = 'Network Error: No response received.';
      } else {
        errorMessage = `Request Setup Error: ${error.message}`;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className=" bg-black flex flex-col items-center justify-center px-6 pb-12">
      <div className="w-full max-w-2xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white text-center mb-3">
          Join the Waitlist
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12 leading-relaxed">
          Limited early-access spots available.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
              Name (optional)
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full px-5 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-1 focus:ring-gray-600 transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              value={email} // Controlled component value
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              className="w-full px-5 py-4 bg-gray-900/50 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading} // Disable button while loading
            className={`w-full text-black font-semibold py-4.5 rounded-xl transition-all duration-200 shadow-xl ${
              isLoading
                ? 'bg-gray-400 cursor-not-allowed' // Loading style
                : 'bg-white hover:bg-gray-100 transform hover:scale-[1.01] active:scale-[0.99]' // Normal style
            }`}
          >
            {/* Display appropriate text based on loading state */}
            {isLoading ? 'Reserving Spot...' : 'Reserve Your Spot'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          By joining you agree to receive updates about Cadensa.
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default JoinUs;