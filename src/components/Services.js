import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, high-performance websites using modern web technologies.',
      icon: '🌐',
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile apps with beautiful UI/UX and performance optimization.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and user-friendly interfaces with a focus on usability and aesthetics.',
      icon: '🎨',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto text-center py-12">
        {/* Animated Heading with Infinite Opacity Animation */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 opacity-animation"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          My Services
        </motion.h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card bg-white text-black rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ rotate: 2, scale: 1.05 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
              }}
            >
              {/* Animated Icon */}
              <motion.div
                className="text-4xl sm:text-5xl mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
