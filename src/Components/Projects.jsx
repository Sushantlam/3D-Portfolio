import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import DemoComputer from "../ThreeD/Democomputer";

const Projects = () => {
  const myProjects = [
    {
      title: "Money Sending Platform",
      desc: "A secure and seamless platform enabling users to send and receive money across Europe with speed and reliability.",
      subdesc:
        "The Money Sending Platform delivers a robust solution for instant, cross-border fund transfers, combining advanced security protocols with an intuitive user experience for individuals and businesses alike.",
      href: "https://app.dmonei.com/login",
      texture: "/image/project2.png",
      logo: "/assets/project-logo2.png",
      logoStyle: {
        backgroundColor: "#13202F",
        border: "0.2px solid #17293E",
        boxShadow: "0px 0px 60px 0px #2F6DB54D",
      },
      spotlight: "/assets/spotlight2.png",
      tags: [
        { id: 1, name: "React.js", path: "/assets/react.svg" },
        { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
        { id: 3, name: "Node JS", path: "/assets/node.png" },
      ],
    },
    {
      title: "Rental Property Accountant System",
      desc: "Designed as a multi-tenant platform for property and accounting software, leveraging React and GSAP to create engaging, interactive, and responsive web interfaces.",
      subdesc:
        "Implemented with modern tools like React and Tailwind CSS, ensuring scalable, maintainable, and visually appealing interfaces suitable for multiple clients and use cases.",
      href: "https://app.rentalbux.com/login",
      texture: "/image/project4.png",
      logo: "/assets/project-logo4.png",
      logoStyle: {
        backgroundColor: "#0E1F38",
        border: "0.2px solid #0E2D58",
        boxShadow: "0px 0px 60px 0px #2F67B64D",
      },
      spotlight: "/assets/spotlight4.png",
      tags: [
        { id: 1, name: "React.js", path: "/assets/react.svg" },
        { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
        { id: 3, name: "GSAP", path: "/assets/GSAP.jpeg" },
      ],
    },
    {
      title: "Rental Bux CMS",
      desc: "A comprehensive content management system designed for rental property businesses, enabling efficient management of listings, bookings, and customer interactions.",
      subdesc:
        "Built with a focus on user experience and scalability, this CMS leverages modern web technologies to provide a seamless experience for both administrators and users.",
      href: "https://rentalbux.com/",
      texture: "/image/project3.png",
      logo: "/assets/project-logo3.png",
      logoStyle: {
        backgroundColor: "#60f5a1",
        background:
          "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
        border: "0.2px solid rgba(208, 213, 221, 1)",
        boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
      },
      spotlight: "/assets/spotlight3.png",
      tags: [
        { id: 1, name: "React.js", path: "/assets/react.svg" },
        { id: 2, name: "CSS", path: "assets/CSS.png" },
        { id: 3, name: "Node JS", path: "/assets/node.png" },
      ],
    },
    {
      title: "Tirnu",
      desc: "A digital banking and finance platform built for individuals and businesses, offering multi-currency accounts, automated financial management, and cryptocurrency services.",
      subdesc:
        "Leveraging modern web technologies, Tirnu provides a unified, secure, and scalable experience for sending, receiving, investing, and managing money efficiently across borders.",
      href: "https://tirnu.com/",
      texture: "/image/project1.png",
      logo: "/assets/project-logo1.png",
      logoStyle: {
        backgroundColor: "#2A1816",
        border: "0.2px solid #36201D",
        boxShadow: "0px 0px 60px 0px #AA3C304D",
      },
      spotlight: "/assets/spotlight1.png",
      tags: [
        { id: 1, name: "React.js", path: "/assets/react.svg" },
        { id: 2, name: "TailwindCSS", path: "assets/CSS.png" },
        { id: 3, name: "Node", path: "/assets/node.png" },
        { id: 4, name: "MongoDB", path: "/assets/mongo.png" },
      ],
    },
  ];

  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className="c-space my-20">
      <style>{`
        .check-live-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: color 0.3s ease;
          color: white;
          text-decoration: none;
          z-index: 1;
        }
        .check-live-link::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #00ffff, #0000ff, #ff00ff);
          background-size: 400% 400%;
          border-radius: 0.5rem;
          opacity: 0;
          z-index: 0;
          transition: opacity 0.3s ease;
          animation: gradient-rotate 4s linear infinite;
        }
        .check-live-link:hover::before {
          opacity: 1;
        }
        .check-live-link span {
          position: relative;
          z-index: 2;
        }
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <p className="head-text text-white">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className=" mix-blend-color-burn"
                  />
                </div>
              ))}
            </div>

            <a
              className="check-live-link"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>Check Live Site</span>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <DemoComputer texture={currentProject?.texture} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
