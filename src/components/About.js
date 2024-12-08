import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

// Image URLs from a CDN (replace with preferred images)
const images = [
  'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg',
  'https://plus.unsplash.com/premium_photo-1663091633166-20ef12aa7b4e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGNvZGV8ZW58MHx8MHx8fDA%3D',
  'https://img.freepik.com/premium-photo/programming-computer-illustration-vector-concept-background_1262710-55537.jpg',
];

const contentData = [
  {
    title: "Web Developer",
    subtitle: "Aspiring Innovator | Full-Stack Developer",
    description: "Passionate about creating intuitive and responsive web applications. My projects combine creativity with cutting-edge frameworks to deliver impactful digital experiences.",
  },
  {
    title: "AI Enthusiast",
    subtitle: "Machine Learning | Cloud Practitioner",
    description: "I delve into AI and cloud technologies to craft innovative solutions. From smart canteen systems to recommendation engines, I focus on solving practical challenges using advanced technologies.",
  },
  {
    title: "Competitive Programmer",
    subtitle: "Logical Thinker | Problem Solver",
    description: "With a keen interest in algorithms and data structures, I enjoy tackling complex coding challenges. My journey involves continuous learning and refining problem-solving strategies.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
        setIsTransitioning(false);
      }, 1000); // Ensure this matches the fade-out duration
    }, 6000); // Total time for each slide (fade-out + display time)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-container">
      <AnimatePresence mode="wait">
        {!isTransitioning && (
          <motion.div
            className="about-slide"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="about-left">
              <motion.h1
                className="about-heading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {contentData[currentIndex].title}
              </motion.h1>
              <h2>{contentData[currentIndex].subtitle}</h2>
              <p>{contentData[currentIndex].description}</p>
              <a
                className="connect-button"
                href="https://www.linkedin.com/in/raj-singh-92b104266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with Me
              </a>
            </div>
            <div className="about-right">
              <motion.img
                src={images[currentIndex]}
                alt="Profile"
                className="profile-image"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
