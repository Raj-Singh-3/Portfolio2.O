import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in front-end and back-end development using React, Node.js, and Python.",
    },
    {
      question: "How do you approach projects?",
      answer: "I follow an agile development process, emphasizing communication, collaboration, and iterative progress.",
    },
    {
      question: "Can I hire you for freelance work?",
      answer: "Yes, I am open to freelance projects. Feel free to reach out to discuss your requirements.",
    },
    {
      question: "Do you offer any post-project support?",
      answer: "Yes, I offer post-project support to ensure everything runs smoothly and to make adjustments if necessary.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 text-white py-12">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-1xl sm:text-3xl md:text-4xl font-extrabold mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6">
          {questions.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item bg-white text-black rounded-lg shadow-lg p-6 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.8,
                type: "tween",
                delay: index * 0.4, // Adds a delay based on index
              }}
              onClick={() => toggleAnswer(index)}
            >
              <div className="text-lg sm:text-xl md:text-2xl font-semibold">
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="mt-2 text-sm sm:text-base text-gray-700">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
