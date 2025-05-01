import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mypic from '../assets/MY_PIC_1.jpg';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Srijani";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval); // stop typing after complete
      }
    }, 120); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">

      {/* Left content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        {/* Typing Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-pulse text-blue-500">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        <strong>An Engineer</strong>
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
        A passionate <strong>Frontend Developer</strong> and <strong>UI/UX Enthusiast</strong> who loves building beautiful web experiences.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4">
          <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all cursor-pointer">
            View Projects
          </Link>
          <Link to="/contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-2xl opacity-60 group-hover:scale-105 transition-all"></div>
          <img
            src={mypic}
            alt="Srijani Mondal"
            className="relative w-64 md:w-80 rounded-3xl object-cover border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-500 group-hover:scale-105" 
          />
        </div>
      </div>

    </section>
  );
};

export default Home;
