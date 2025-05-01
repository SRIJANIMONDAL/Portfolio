// import React from 'react';
// import mypic from '../assets/MY_PIC_1.jpg';

// const Hero = () => {
//   return (
//     <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20 bg-white dark:bg-gray-900 min-h-screen">
      
//       {/* Left content */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           Hi, I'm <span className="text-blue-600 dark:text-blue-400">Srijani Mondal</span>
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
//           I'm a passionate <strong>Frontend Developer</strong> and <strong>UI/UX Enthusiast</strong> who loves building beautiful web experiences.
//         </p>
//         <div className="flex justify-center md:justify-start gap-4">
//           <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
//             View Projects
//           </a>
//           <a href="#contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
//             Contact Me
//           </a>
//         </div>
//       </div>

//       {/* Right image */}
//       <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
//         <div className="relative">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-70"></div> {/* Glow Background */}
//           <img
//             src={mypic}
//             alt="Profile"
//             className="relative w-64 h-100 md:w-80 md:h-90 squared-full object-cover border-4 border-white dark:border-gray-800 shadow-lg" // ✅ Glow, Border and Shadow
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import mypic from '../assets/MY_PIC_1.jpg'; // Make sure the image path is correct

const Hero = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20 bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      
      {/* Left content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Srijani Mondal
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          I'm a passionate <strong>Frontend Developer</strong> and <strong>UI/UX Enthusiast</strong> who loves building beautiful web experiences.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center">
        <div className="relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 blur-2xl opacity-60 group-hover:scale-105 transition-all"></div> {/* Glow Background */}
          <img
            src={mypic}
            alt="Profile"
            className="relative w-64 md:w-80 rounded-3xl object-cover border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-500 group-hover:scale-105" 
          />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
