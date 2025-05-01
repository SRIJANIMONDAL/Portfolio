import { FaUniversity, FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-12 px-6 md:px-8 lg:px-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 rounded-lg shadow-lg">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-extrabold text-white">Education</h2>
        <div className="space-y-5">

          {/* College */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaUniversity className="text-3xl text-blue-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-white">Government College of Engineering & Leather Technology</h3>
            <p className="text-gray-700 dark:text-gray-300">B.Tech in Computer Science & Engineering</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">2021 - 2025</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 9.5</p>
          </div>

          {/* Class 12 */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaGraduationCap className="text-3xl text-green-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-white">Kotulpur High School</h3>
            <p className="text-gray-700 dark:text-gray-300">Higher Secondary (WBCHSE)</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Passed in 2021</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Grade: O</p>
          </div>

          {/* Class 10 */}
          <div className="bg-white dark:bg-gray-800 p-4 md:p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <FaSchool className="text-3xl text-yellow-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-blue-700 dark:text-white">Kotulpur Saroj Basini Balika Vidyalaya</h3>
            <p className="text-gray-700 dark:text-gray-300">Secondary Education (WBBSE)</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Passed in 2019</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Grade: AA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
