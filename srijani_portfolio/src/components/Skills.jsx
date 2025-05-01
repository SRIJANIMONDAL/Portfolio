// import React from 'react';
// import { FaCogs, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub, FaGit, FaNodeJs } from 'react-icons/fa';

// const skillsData = [
//   { 
//     category: "Language", 
//     skills: ["C", "C++", "Python"], 
//     icons: [<FaCogs />, <FaPython />]
//   },
//   { 
//     category: "Frontend", 
//     skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"], 
//     icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />] 
//   },
//   { 
//     category: "Tools & Others", 
//     skills: ["Git", "GitHub", "VS Code"], 
//     icons: [<FaGit />, <FaGithub />] 
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-gray-800 dark:text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {skillsData.map((group, index) => (
//             <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
//               <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">{group.category}</h3>
//               <div className="flex justify-center gap-4 mb-4">
//                 {group.icons.map((icon, idx) => (
//                   <div key={idx} className="text-4xl text-gray-600 dark:text-gray-300">
//                     {icon}
//                   </div>
//                 ))}
//               </div>
//               <ul className="space-y-3">
//                 {group.skills.map((skill, idx) => (
//                   <li key={idx} className="flex items-center gap-3">
//                     <span className="text-primary-500">•</span> {/* bullet point */}
//                     <span>{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { FaCogs, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub, FaGit, FaNodeJs } from 'react-icons/fa';

const skillsData = [
  { 
    category: "Languages", 
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 85 },
      { name: "Python", level: 90 }
    ], 
    icons: [<FaCogs />, <FaPython />]
  },
  { 
    category: "Frontend", 
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 75 }
    ], 
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />]
  },
  { 
    category: "Tools & Others", 
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 85 }
    ], 
    icons: [<FaGit />, <FaGithub />]
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((group, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600 dark:text-blue-400">{group.category}</h3>
              <div className="flex justify-center gap-4 mb-4">
                {group.icons.map((icon, idx) => (
                  <div key={idx} className="text-4xl text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
                    {icon}
                  </div>
                ))}
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-primary-500">•</span>
                    <span>{skill.name}</span>
                    <div className="w-full bg-gray-200 rounded-full mt-2">
                      <div
                        className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                        style={{ width: `${skill.level}%` }}
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
