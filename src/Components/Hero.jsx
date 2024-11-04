import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import Toyanimation from "../ThreeD/Toyanimation";
import Loader from "../ThreeD/Loader";
import { Leva } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "..";
import Typed from "typed.js";
import Earth from "../ThreeD/Earth";
import Reactlogo from "../ThreeD/Reactlogo";
import Cube from "../ThreeD/Cube";
import HeroCamera from "../ThreeD/HeroCamera";
import Button from "../ThreeD/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    };

    // Initialize Typed instance
    const typed = new Typed(typedElement.current, options);

    // Destroy Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sushant Lama <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient" ref={typedElement}></p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <Toyanimation
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Earth position={sizes.targetPosition} />
              <Reactlogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
            </group>{" "}
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
