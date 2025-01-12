import React, { useState, useEffect } from "react";
import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiPython,
  SiFlask,
  SiDjango,
  SiMysql,
  SiMongodb,
  SiAndroidstudio,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiJira,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import "./skills.css";

const Skills = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React Js",
          icon: <SiReact className="text-blue-500 text-4xl" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="text-purple-500 text-4xl" />,
        },
        {
          name: "Next Js",
          icon: <SiNextdotjs className="text-gray-500 text-4xl" />,
        },
        {
          name: "HTML",
          icon: <SiHtml5 className="text-orange-500 text-4xl" />,
        },
        { name: "CSS", icon: <SiCss3 className="text-blue-400 text-4xl" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400 text-4xl" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="text-purple-600 text-4xl" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          icon: <FaNodeJs className="text-green-500 text-4xl" />,
        },
        {
          name: "Express Js",
          icon: <FaNodeJs className="text-gray-500 text-4xl" />,
        },
        {
          name: "Python",
          icon: <SiPython className="text-blue-400 text-4xl" />,
        },
        { name: "Flask", icon: <SiFlask className="text-black text-4xl" /> },
        {
          name: "Django",
          icon: <SiDjango className="text-green-600 text-4xl" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" /> },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-500 text-4xl" />,
        },
      ],
    },
    {
      title: "Android",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-500 text-4xl" /> },
        {
          name: "Android Studio",
          icon: <SiAndroidstudio className="text-green-500 text-4xl" />,
        },
        {
          name: "React Native",
          icon: <SiReact className="text-blue-500 text-4xl" />,
        },
      ],
    },

    {
      title: "DevOps",
      skills: [
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-500 text-4xl" />,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-green-500 text-4xl" />,
        },
        { name: "Git", icon: <SiGit className="text-orange-500 text-4xl" /> },
        { name: "Jira", icon: <SiJira className="text-purple-500 text-4xl" /> },
      ],
    },
    {
      title: "Machine Learning",
      skills: [
        { name: "NumPy", icon: <SiNumpy className="text-red-500 text-4xl" /> },
        {
          name: "Pandas",
          icon: <SiPandas className="text-green-600 text-4xl" />,
        },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="text-yellow-500 text-4xl" />,
        },
      ],
    },
    {
      title: "Others",
      skills: [
        {
          name: "Computer Networks",
          icon: <SiJavascript className="text-blue-500 text-4xl" />,
        },
        { name: "DBMS", icon: <SiMysql className="text-blue-500 text-4xl" /> },
        { name: "OOPS", icon: <FaJava className="text-orange-500 text-4xl" /> },
        {
          name: "Operating Systems",
          icon: <SiPython className="text-green-500 text-4xl" />,
        },
      ],
    },
  ];

  const cardVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div className="skills-section bg-gray-900 text-white py-20">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skills-category bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card bg-gray-700 p-4 rounded-md flex flex-col items-center justify-center hover:bg-gray-600 transition-all"
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    {skill.icon}
                    <span className="mt-2 text-center text-lg font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
