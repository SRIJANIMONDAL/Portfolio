// import React from 'react';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100 dark:bg-gray-800">
//       <div className="max-w-3xl mx-auto text-center space-y-8">
//         <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
//         <p className="text-lg text-gray-600 dark:text-gray-300">
//           Feel free to reach out if you'd like to collaborate or just have a chat!
//         </p>

//         {/* Links */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//           {/* GitHub */}
//           <a
//             href="https://github.com/SRIJANIMONDAL"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
//           >
//             GitHub
//           </a>

//           {/* LinkedIn */}
//           <a
//             href="https://www.linkedin.com/in/srijani-mondal-0b914022a"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
//           >
//             LinkedIn
//           </a>

//           {/* Email */}
//           <a
//             href="mailto:srijanim110@gmail.com"
//             className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
//           >
//             Email
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 rounded-lg shadow-lg">
//       <div className="max-w-3xl mx-auto text-center space-y-8">
//         <h2 className="text-4xl font-extrabold text-white">Contact Me</h2>
//         <p className="text-lg text-gray-100 dark:text-gray-200">
//           Feel free to reach out if you'd like to collaborate, ask questions, or simply chat about tech and development!
//         </p>

//         {/* Links */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
//           {/* GitHub */}
//           <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
//             <FaGithub className="text-5xl text-gray-700 dark:text-gray-300 mb-4" />
//             <h4 className="text-xl font-semibold text-gray-800 dark:text-white">GitHub</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Explore my open-source projects and contributions. Feel free to fork, submit issues, or collaborate!
//             </p>
//             <a
//               href="https://github.com/SRIJANIMONDAL"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Visit GitHub
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
//             <FaLinkedin className="text-5xl text-blue-500 mb-4" />
//             <h4 className="text-xl font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Connect with me professionally on LinkedIn! Let's talk about career opportunities, collaborations, or tech insights.
//             </p>
//             <a
//               href="https://www.linkedin.com/in/srijani-mondal-0b914022a"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Visit LinkedIn
//             </a>
//           </div>

//           {/* Email */}
//           <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-72">
//             <FaEnvelope className="text-5xl text-red-500 mb-4" />
//             <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Email</h4>
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               For any inquiries, collaboration ideas, or feedback, feel free to send me an email. I'll get back to you as soon as I can!
//             </p>
//             <a
//               href="mailto:srijanim110@gmail.com"
//               className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
//             >
//               Send an Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Contact.jsx

// import { toast } from 'react-hot-toast';
// import { Toaster } from 'react-hot-toast';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { useState } from 'react';
// import axios from 'axios';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [responseMsg, setResponseMsg] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, formData);

//       setResponseMsg(res.data.message);
//       setFormData({ name: '', email: '', message: '' });
//     } catch (err) {
//       setResponseMsg('Something went wrong.');
//     }
//   };

//   return (
//     <section id="contact" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
//       <div className="max-w-3xl mx-auto text-center space-y-6">
//         <h2 className="text-4xl font-bold">Contact Me</h2>
//         <p className="text-lg">
//           Feel free to reach out if you'd like to collaborate, ask questions, or simply chat about tech and development!
//         </p>

//         {/* Contact Form */}
//         <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="p-3 rounded text-gray-700"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="p-3 rounded text-gray-700"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows="5"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="p-3 rounded text-gray-700"
//           ></textarea>
//           <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
//             Send Message
//           </button>
//         </form>
//         {responseMsg && <p className="text-white mt-4">{responseMsg}</p>}

//         {/* Social Cards */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* GitHub */}
//           <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg text-center">
//             <FaGithub className="text-4xl mx-auto mb-3" />
//             <h4 className="text-xl font-bold mb-2">GitHub</h4>
//             <p className="mb-3 text-sm">Explore my open-source projects and contributions.</p>
//             <a href="https://github.com/SRIJANIMONDAL" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//               Visit GitHub
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg text-center">
//             <FaLinkedin className="text-4xl text-blue-500 mx-auto mb-3" />
//             <h4 className="text-xl font-bold mb-2">LinkedIn</h4>
//             <p className="mb-3 text-sm">Connect with me professionally on LinkedIn!</p>
//             <a href="https://www.linkedin.com/in/srijani-mondal-0b914022a" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//               Visit LinkedIn
//             </a>
//           </div>

//           {/* Email */}
//           <div className="bg-white text-gray-800 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg text-center">
//             <FaEnvelope className="text-4xl text-red-500 mx-auto mb-3" />
//             <h4 className="text-xl font-bold mb-2">Email</h4>
//             <p className="mb-3 text-sm">For any inquiries or collaborations, drop an email.</p>
//             <a href="mailto:srijanim110@gmail.com" className="text-blue-600 underline">
//               Send Email
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        formData
      );
      toast.success(res.data.message || 'Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      {/* toast container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out if you'd like to collaborate, ask questions, or simply chat about tech and development!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded text-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded text-gray-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded text-gray-700"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded disabled:opacity-50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Social Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaGithub className="text-4xl mx-auto mb-3" />
            <h4 className="text-xl font-bold mb-2">GitHub</h4>
            <p className="mb-3 text-sm">Explore my open-source projects and contributions.</p>
            <a
              href="https://github.com/SRIJANIMONDAL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit GitHub
            </a>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaLinkedin className="text-4xl text-blue-500 mx-auto mb-3" />
            <h4 className="text-xl font-bold mb-2">LinkedIn</h4>
            <p className="mb-3 text-sm">Connect with me professionally on LinkedIn!</p>
            <a
              href="https://www.linkedin.com/in/srijani-mondal-0b914022a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Visit LinkedIn
            </a>
          </div>

          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-4xl text-red-500 mx-auto mb-3" />
            <h4 className="text-xl font-bold mb-2">Email</h4>
            <p className="mb-3 text-sm">For any inquiries or collaborations, drop an email.</p>
            <a href="mailto:srijanim110@gmail.com" className="text-blue-600 underline">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
