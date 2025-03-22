import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => (
  <div className="hero min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white relative flex flex-col justify-center items-center overflow-hidden">
    {/* Background Image Animation */}
    <div className="absolute inset-0 z-0">
      {[
        'https://c4.wallpaperflare.com/wallpaper/492/496/909/costume-law-lawyer-businessman-wallpaper-preview.jpg',
        'https://png.pngtree.com/thumb_back/fh260/background/20200801/pngtree-purple-abstract-background-fluid-gradient-with-wave-forms-image_375467.jpg',
        'https://img.freepik.com/premium-vector/dark-techno-background-with-blue-lines-element_157399-21.jpg',
        'https://t4.ftcdn.net/jpg/08/43/16/81/360_F_843168199_eiJvsZQStgTTUlJ3gzDHONsib0cRwjCh.jpg',
        'https://i.pinimg.com/736x/86/8e/66/868e66e91c74f24556a463745761e4b6.jpg',

        
      ].map((src, index) => (
        <motion.img
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          className="absolute w-full h-full object-cover opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: index * 5 }}
        />
      ))}
    </div>

    {/* Content Container with Text Above Background */}
    <div className="relative z-10 text-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4" // Adjust font size for mobile
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hello, I'm <span className="text-yellow-300">Raj Singh</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-lg sm:text-xl md:text-2xl font-medium text-center text-gray-200 mb-6" // Adjust font size for mobile
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Passionate <span className="text-yellow-300">Full Stack Developer</span>
      </motion.p>

      {/* Rotating Icons */}
      <motion.div
        className="flex justify-center items-center space-x-8 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[FaGithub, FaLinkedin, FaEnvelope, FaInstagram].map((Icon, index) => (
          <a
            key={index}
            href={getIconLink(index)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl text-gray-300 hover:text-white transition-transform transform hover:scale-125"
          >
            <Icon />
          </a>
        ))}
      </motion.div>

      {/* Call to Action - Download Resume */}
      <motion.a
        href="./Resume.pdf" // Link to the resume in the public folder
        download="Raj_Singh_Resume.pdf" // Optional: specify a name for the downloaded file
        className="relative z-10 px-6 py-3 mt-4 text-lg font-semibold text-white bg-yellow-600 rounded-lg shadow-lg hover:bg-yellow-900 transition-all transform hover:scale-110 no-underline hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
      >
        Download Resume
      </motion.a>
    </div>
  </div>
);

// Helper Function to Get Links
const getIconLink = (index) => {
  const links = [
    'https://github.com/Raj-Singh-3', // Github
    'https://www.linkedin.com/in/raj-singh-92b104266/', // LinkedIn
    'mailto:singhraj5604@gmail.com', // Email
    'https://www.instagram.com/rajsinghrajput_3/', // Instagram
  ];
  return links[index];
};

export default Home;
