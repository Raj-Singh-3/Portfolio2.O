import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">Raj Singh</h2>
        <p>&copy; {new Date().getFullYear()} Raj Singh. All rights reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 text-lg">
        <a href="https://www.linkedin.com/in/raj-singh-92b104266/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition duration-300" />
        </a>
        <a href="https://github.com/Raj-Singh-3" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition duration-300" />
        </a>
        <a href="mailto:singhraj5604@gmail.com">
          <MdEmail className="hover:text-red-400 transition duration-300" />
        </a>
        <a href="tel:+919156185604">
          <MdPhone className="hover:text-green-400 transition duration-300" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;