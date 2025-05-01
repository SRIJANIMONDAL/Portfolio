import { FaReact, FaDatabase, FaCss3Alt, FaHtml5 } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="p-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 rounded-lg shadow-lg">
      <h3 className="text-5xl font-extrabold text-center text-white mb-6">
        About Me
      </h3>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-100 dark:text-gray-200 animate__animated animate__fadeIn mb-6">
        I'm a passionate developer who loves creating beautiful, user-friendly websites. 
        Always learning, always growing!
      </p>

      <div className="max-w-4xl mx-auto text-center text-lg text-gray-100 dark:text-gray-200">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <li className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaReact className="text-4xl text-blue-500 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700">Frontend Developer</h4> {/* Changed to blue */}
            <p className="mt-2 text-black dark:text-gray-300"> {/* Changed text to black */}
              Building beautiful, responsive, and accessible web applications using modern technologies like React.
            </p>
          </li>

          <li className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaCss3Alt className="text-4xl text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700">UI/UX Designer</h4> {/* Changed to blue */}
            <p className="mt-2 text-black dark:text-gray-300"> {/* Changed text to black */}
              Creating intuitive user interfaces with a focus on user experience and accessibility.
            </p>
          </li>

          <li className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaHtml5 className="text-4xl text-orange-500 mb-4" />
            <h4 className="text-xl font-semibold text-blue-700">Web Development</h4> {/* Changed to blue */}
            <p className="mt-2 text-black dark:text-gray-300"> {/* Changed text to black */}
              Expert in HTML5, CSS3, and modern frontend frameworks to bring websites to life.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
