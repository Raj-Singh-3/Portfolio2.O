import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaSmileBeam } from 'react-icons/fa'; // Updated with a new icon

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_ru0gfim', 'template_g89bnel', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, 'Sn7lu72SQZFPFJs6-')
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);

        // Show the popup
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds

        // Reset the form
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };

  return (
    <div className="contact py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center relative">
      {/* Success Popup */}
      {showPopup && (
        <div className="absolute top-10 right-10 bg-green-500 text-white p-4 rounded-lg flex items-center space-x-2 transition-opacity duration-500">
          <span>✅</span>
          <span>Message sent successfully!</span>
        </div>
      )}

      {/* Left Icon */}
      <div className="hidden md:block text-yellow-400 text-[8rem] animate-bounce mr-10">
        <FaSmileBeam /> {/* Large animated icon, visible on medium and larger screens */}
      </div>

      {/* Form Section */}
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-8 animate-pulse">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-6 p-4 md:p-0">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded focus:ring-4 focus:ring-purple-500 focus:outline-none text-blue-900 placeholder-gray-400 transition duration-200"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded focus:ring-4 focus:ring-purple-500 focus:outline-none text-blue-900 placeholder-gray-400 transition duration-200"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded focus:ring-4 focus:ring-purple-500 focus:outline-none text-blue-900 placeholder-gray-400 transition duration-200"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${
              hovered ? 'bg-purple-500' : 'bg-white'
            } text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition duration-300 transform hover:scale-105`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
