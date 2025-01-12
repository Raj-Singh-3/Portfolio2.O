import React from "react";
import ExperienceBox from "./ExperienceBox";

const experiences = [
  {
    title: "Intern",
    company: "Edunet Foundation",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzgOCr3t7Awavv-eWbSnpbSJ35mM7G99iQA&s",
    description:
      "During this internship, I developed a college chatbot that utilizes AI to handle common queries, making information access seamless for students and staff. Expanded skills in AI, cloud computing, and project-based development.",
    date: "June 2024",
    certification: "View Certificate",
    certificationLink:
      "https://drive.google.com/file/d/1d7UEo3uJ0xggsdWRQYH-cLXOZJbW8zQe/view?usp=sharing",
  },
  {
    title: "Web Developer Intern",
    company: "Prodigy InfoTech",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEMRfX2ouW2lw/company-logo_200_200/company-logo_200_200/0/1727855093948/prodigy_infotech_logo?e=2147483647&v=beta&t=yKzoYTxZSd47gGP9jF__ycnWkrjvAV6XJgAPU3vi2io",
    description:
      "At Prodigy InfoTech, I developed projects like a stopwatch, portfolio website, Tic-Tac-Toe game, and weather detection app, honing front-end and back-end development skills.",
    date: "July 2024",
    certification: "View Certificate",
    certificationLink:
      "https://drive.google.com/file/d/1DBshZT5EV2UGoB41plI1X1xBtwYZFYde/view?usp=sharing",
  },
  {
    title: "Intern",
    company: "Zscaler (AICTE Virtual Internship)",
    logo: "https://cdn.worldvectorlogo.com/logos/zscaler-logo.svg",
    description:
      "Embarked on an exciting AICTE Virtual Internship with Zscaler, diving into the world of cybersecurity and zero-trust architecture. Explored cutting-edge concepts that are reshaping the digital security landscape, gaining theoretical insights into the strategies that protect businesses in a cloud-first world.",
    date: "December 2024",
    certification: "View Certificate",
    certificationLink:
      "https://drive.google.com/file/d/1xkZesOB_aRQ-_YR3-0h9JcgKoqQhykrA/view?usp=sharing",
  },
];

const Experience = () => (
  <div className="experience min-h-screen py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      Experience
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      {experiences.map((exp, index) => (
        <ExperienceBox key={index} experience={exp} delay={index * 0.3} />
      ))}
    </div>
  </div>
);

export default Experience;
