import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../ThreeD/Developer.jsx';
import CanvasLoader from '../ThreeD/Loader.jsx';


const Experience = () => {

     const workExperiences = [
        {
          id: 1,
          name: 'Tirnu',
          pos: 'Junior Web Developer',
          duration: '2024 June - Present',
          title: "As a Junior MERN Stack Web Developer, your primary role is to assist in building and maintaining web applications using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. Working in this position involves learning, developing, and supporting the full-stack development process under the guidance of senior developers or project leads.",
          icon: '/assets/framer.svg',
          animation: 'victory',
        },
        {
          id: 3,
          name: 'Amigo Groups',
          pos: 'React Intern',
          duration: '2024 March - May',
          title: "During my React internship, I gained hands-on experience in building reusable components and managing state effectively using hooks, optimized component rendering to improve performance, and developed a strong understanding of React's lifecycle and component structure for scalable code practices.",
          icon: '/assets/notion.svg',
          animation: 'salute',
        },
      ];
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;