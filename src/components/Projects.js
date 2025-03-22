import React from "react";

const projects = [
  {
    title: "Fake Job Post Detection System",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQECiNpTil9Tgw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1721297005473?e=2147483647&v=beta&t=NL5Cw8xZEiOqnmVtLrO4BE_EyUpuprcRDUbm0CQoFqU",
    github: "https://github.com/Raj-Singh-3/Fake-Job-Post-Detection",
    liveDemo: "#",
    description:
      "A machine learning-based system that detects fake job postings. Built using Python, Flask, and NLP techniques to analyze job descriptions and identify fraudulent listings.",
  },
  {
    title: "R-38 Assistant",
    image:
      "https://png.pngtree.com/png-clipart/20230401/original/pngtree-smart-chatbot-cartoon-clipart-png-image_9015126.png",
    github: "https://github.com/Raj-Singh-3/R38-Assistant",
    liveDemo: "https://r38-assistant.vercel.app/",
    description:
      "An AI-powered chatbot built using Flask and React. It provides intelligent responses, supports NLP, and integrates seamlessly with web applications for real-time interaction.",
  },
  {
    title: "Canteen Management System",
    image:
      "https://png.pngtree.com/background/20230528/original/pngtree-some-hot-food-including-hamburgers-picture-image_2779983.jpg",
    github: "https://github.com/AishwaryaTatiwar/canteenmanagement40",
    liveDemo: "#",
    description:
      "A MERN stack-based website for food ordering and management. Features include admin control for staff and menu management, crowd monitoring using YOLOv8 and Flask.",
  },
  {
    title: "Image Converter",
    image:
      "https://plugins-media.makeupar.com/smb/blog/post/2023-03-28/249e1beb-be5e-46cc-b839-ba0227c97545.jpg",
    github: "https://github.com/Raj-Singh-3/Image",
    liveDemo: "https://image-psi-steel.vercel.app/",
    description:
      "A dynamic application powered by React and Flask that transforms ordinary images into vibrant cartoon illustrations using OpenCV, with seamless frontend-backend integration.",
  },
  {
    title: "Fitness Website",
    image: "https://images4.alphacoders.com/134/1345029.png",
    github: "https://github.com/Raj-Singh-3/Fitness",
    liveDemo: "https://fitness-iota-bice.vercel.app/",
    description:
      "A fitness platform built with Django and React.js featuring a BMI calculator, product listings, and a profile management system.  (use Desktop)",
  },

  {
    title: "Music Player",
    image:
      "https://i.pinimg.com/564x/af/4b/97/af4b97b7f1872733d2c17740b8e3e7dd.jpg",
    github: "https://github.com/Raj-Singh-3/Music-Player",
    liveDemo: "#",
    description:
      "A Java-based music player similar to Spotify that plays .wav files, manages playlists, and supports adding and deleting songs.",
  },

  {
    title: "Chatbot",
    image:
      "https://media.istockphoto.com/id/1488335095/vector/3d-vector-robot-chatbot-ai-in-science-and-business-technology-and-engineering-concept.jpg?s=612x612&w=0&k=20&c=MSxiR6V1gROmrUBe1GpylDXs0D5CHT-mn0Up8D50mr8=",
    github: "#",
    liveDemo:
      "https://web-chat.global.assistant.watson.appdomain.cloud/preview.html?backgroundImageURL=https%3A%2F%2Fau-syd.assistant.watson.cloud.ibm.com%2Fpublic%2Fimages%2Fupx-a9d876b0-bd20-4b4e-bcca-482c1ab33b88%3A%3A9079b4d4-9c60-42e0-9c55-c7cc2b8eb9c4&integrationID=15ad6434-ba99-4248-88b1-55c90d5b7869&region=au-syd&serviceInstanceID=a9d876b0-bd20-4b4e-bcca-482c1ab33b88",
    description:
      "A college-specific chatbot built using IBM Watson Assistant that provides information about placements, fees, and other details.",
  },

  {
    title: "Smart Home System",
    image:
      "https://img.freepik.com/premium-vector/smart-home-automation-control-system-concept-virtual-screen-robotic-hand-touching-digital-interface_127544-753.jpg",
    github: "https://github.com/Raj-Singh-3/Smart-Home-Assistant",
    liveDemo: "#",
    description:
      "A smart home system built in Java, implementing design patterns like Factory, Adapter, Singleton, and Mediator for enhanced functionality.",
  },

  {
    title: "Currency Converter",
    image:
      "https://img.freepik.com/premium-vector/money-currency-exchange-money-transfer-stock-exchange-currencies-dollar-euro-pound-yen_228260-472.jpg",
    github: "https://github.com/Raj-Singh-3/Currency-Converter",
    liveDemo: "https://currency-converter-ruby-gamma.vercel.app/",
    description:
      "A currency conversion tool built with HTML, CSS, JavaScript, and APIs for real-time exchange rates.",
  },

  {
    title: "Tic Tac Toe Game",
    image:
      "https://img.freepik.com/premium-vector/tic-tac-toe-game-linear-outline-icon-colour-neon-style-brick-wall-background-light-icon_549897-1770.jpg",
    github: "https://github.com/Raj-Singh-3/PRODIGY_WD_03",
    liveDemo: "https://tictactoe-sand-delta.vercel.app/",
    description:
      "A classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Play against a friend or the computer.",
  },

  {
    title: "Stone Paper Scissors",
    image:
      "https://cdn.vectorstock.com/i/500p/86/20/rock-scissors-and-paper-vector-1548620.jpg",
    github: "https://github.com/Raj-Singh-3/rock_paper_scissors",
    liveDemo: "https://rock-paper-scissors-eta-one.vercel.app/",
    description:
      "Play the classic Stone, Paper, Scissors game online, developed using HTML, CSS, and JavaScript.",
  },
];

const Projects = () => {
  return (
    <div className="bg-dark text-light py-5">
      <h2 className="text-center mb-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Unveiling <span className="text-primary">My Projects</span>
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
            >
              <div
                className="card bg-gradient-to-r from-indigo-600 to-purple-600 text-light shadow-lg transform hover:scale-105 transition-all duration-500"
                style={{
                  width: "100%",
                  maxWidth: "330px",
                  height: "450px",
                }}
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div
                  className="card-body text-center"
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <h5 className="card-title text-2xl font-semibold">
                    {project.title}
                  </h5>
                  <p
                    className="card-text mt-2 text-sm"
                    style={{ flexGrow: "1" }}
                  >
                    {project.description}
                  </p>
                  <div className="d-flex justify-content-around mt-4">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        className="btn btn-dark py-2 px-4 transition-all duration-300 hover:bg-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveDemo && project.liveDemo !== "#" && (
                      <a
                        href={project.liveDemo}
                        className="btn btn-info py-2 px-4 transition-all duration-300 hover:bg-blue-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
