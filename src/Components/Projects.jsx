import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react'
import { useTexture } from '@react-three/drei';
import DemoComputer from '../ThreeD/Democomputer';



const Projects = () => {
    const myProjects = [
      {
        title: 'Naikap Village Resort (Room Booking Site)',
        desc: 'Naikap Village Resort is a hidden gem nestled in the beautiful hills of Nepal. The resort offers a peaceful and serene atmosphere, perfect for those seeking a break from the hustle and bustle of city life.',
        subdesc:
          'Naikap Village Resort is the perfect destination for anyone seeking a peaceful and rejuvenating experience in the heart of Nepal.',
        href: 'https://naikap-village-resort-frontend.vercel.app/',
        texture: '/image/project2.png',
        logo: '/assets/project-logo2.png',
        logoStyle: {
          backgroundColor: '#13202F',
          border: '0.2px solid #17293E',
          boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
          {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
          },
          {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
          },
          {
            id: 3,
            name: 'Node JS',
            path: '/assets/node.png',
          },
        ],
      },
      {
        title: 'Ride Sharing App',
        desc: 'Ride-sharing is a service that connects passengers with drivers of vehicles for hire through mobile apps and websites.',
        subdesc:
          'Ride-sharing is often used as an umbrella term for all on-demand mobility solutions, but the correct term is shared transport or shared mobility.',
        href: 'https://github.com/Sushantlam/Gantabya-Group-Project',
        texture: '/image/project3.png',
        logo: '/assets/project-logo3.png',
        logoStyle: {
          backgroundColor: '#60f5a1',
          background:
            'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
          border: '0.2px solid rgba(208, 213, 221, 1)',
          boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
          {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
          },
          {
            id: 2,
            name: 'CSS',
            path: 'assets/CSS.png',
          },
          {
            id: 3,
            name: 'Node JS',
            path: '/assets/node.png',
          },
        ],
      },
      {
        title: 'Animated Website',
        desc: 'Built using react, gsap animation for the attractive of websites, its generally built for the learning purpose of gsap animation which include responsivness too.',
        subdesc:
          'Built with modern tools like React and Tailwind CSS, ensuring fast, responsive, and beautiful interfaces.',
        href: 'https://gsap-animation-xi.vercel.app/',
        texture: '/image/project4.png',
        logo: '/assets/project-logo4.png',
        logoStyle: {
          backgroundColor: '#0E1F38',
          border: '0.2px solid #0E2D58',
          boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
          {
            id: 1,
            name: 'React.js',
            path: '/assets/react.svg',
          },
          {
            id: 2,
            name: 'TailwindCSS',
            path: 'assets/tailwindcss.png',
          },
          {
            id: 3,
            name: 'GSAP',
            path: '/assets/GSAP.jpeg',
          },
        ],
      },
        {
          title: 'Canteen Management System',
          desc: 'A canteen management system is a software solution that helps organizations automate and streamline their canteen operations. These systems can be used to manage tasks.',
          subdesc:
            'Traditional canteen systems often suffer from long queues, limited menu options, and inefficient payment processes.',
          href: 'https://mern-canteen-frontend.vercel.app/',
          texture: '/image/project1.png',
          logo: '/assets/project-logo1.png',
          logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
          },
          spotlight: '/assets/spotlight1.png',
          tags: [
            {
              id: 1,
              name: 'React.js',
              path: '/assets/react.svg',
            },
            {
              id: 2,
              name: 'TailwindCSS',
              path: 'assets/CSS.png',
            },
            {
              id: 3,
              name: 'Node',
              path: '/assets/node.png',
            },
            {
              id: 4,
              name: 'MongoDB',
              path: '/assets/mongo.png',
            },
          ],
        },
       
      ];
    const projectCount = myProjects.length;

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className="c-space my-20">
      <p className="head-text text-white">My Selected Work</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} className=' mix-blend-color-burn' />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
           <DemoComputer texture={currentProject?.texture}/>
          
        </div>
      </div>
    </section>
  )
}

export default Projects

