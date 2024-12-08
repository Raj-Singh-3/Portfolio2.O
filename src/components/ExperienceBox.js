import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceBox = ({ experience, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (boxRef.current) observer.observe(boxRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={boxRef}
      className="experience-box bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 transform transition-all duration-700 ease-in-out"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: 'easeInOut' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
      }}
    >
      <div className="flex items-center mb-4">
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="h-12 w-12 mr-4 rounded-full border-2 border-gray-700"
        />
        <div>
          <h3 className="text-lg font-bold text-pink-400">{experience.company}</h3>
          <p className="text-sm text-gray-400">{experience.title}</p>
        </div>
      </div>
      <div className="text-sm text-gray-300">
        <p>{experience.description}</p>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">{experience.date}</span>
        <a
          href={experience.certificationLink}
          className="text-sm text-yellow-400 hover:text-yellow-500 transition-colors underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {experience.certification}
        </a>
      </div>
    </motion.div>
  );
};

export default ExperienceBox;
