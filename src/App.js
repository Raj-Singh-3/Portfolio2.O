import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    // Force a layout recalculation to apply responsiveness
    window.dispatchEvent(new Event("resize"));
  }, []);

  useEffect(() => {
    // Hide welcome screen after 3 seconds
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Welcome Screen */}
      {showWelcome ? (
        <div
          className="welcome-screen fixed inset-0 z-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/abstract-digital-grid-black-background_53876-97647.jpg)",
          }}
        >
          <div className="overlay bg-black bg-opacity-50 h-full w-full flex justify-center items-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1.5 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                Welcome to My Portfolio
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-medium text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                Discover my work, skills, and passion for technology.
              </motion.p>
            </motion.div>
          </div>
        </div>
      ) : (
        <div>
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-800 p-6 shadow-lg flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-green-400 via-teal-500 to-yellow-400 text-transparent bg-clip-text tracking-wide">
              Raj Singh
            </div>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button
                className="text-white text-4xl focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Links */}
            <ul
              className={`${
                isMenuOpen
                  ? "absolute top-full left-0 w-full bg-indigo-900 text-white space-y-4 py-4 text-lg"
                  : "hidden"
              } md:flex md:space-x-8 md:items-center md:static md:space-y-0 md:bg-transparent`}
            >
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Home
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  About
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Skills
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Services
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Experience
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Projects
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  FAQ
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => setIsMenuOpen(false)}
                  className="relative px-3 py-2 text-white font-semibold tracking-wide hover:text-yellow-400 transition-all duration-300 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sections */}
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="faq">
            <FAQ />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
