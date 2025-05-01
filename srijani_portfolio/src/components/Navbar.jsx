// function Navbar() {
//     return (
//       <nav className="flex justify-between items-center p-5 shadow-md bg-white dark:bg-gray-800">
//         <h1 className="text-2xl font-bold text-indigo-600">Srijani's Portfolio</h1>
//         <ul className="flex gap-5">
//           <li><a href="#about" className="hover:text-indigo-600">About</a></li>
//           <li><a href="#about" className="hover:text-indigo-600">Education</a></li>
//           <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
//           <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
//           <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
//         </ul>
//       </nav>
//     );
//   }
  
//   export default Navbar;
  
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md">
      <div className="text-2xl font-bold text-blue-600">Portfolio</div>
      <div className="flex gap-6">
      <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About</Link>
        <Link to="/education" className="hover:text-blue-500">Education</Link>
        <Link to="/skills" className="hover:text-blue-500">Skills</Link>
        <Link to="/projects" className="hover:text-blue-500">Projects</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
