import React, { useState } from "react";
import Button from "../ThreeD/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" sushantlama732@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 text-white">
      <div className="grid xl:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
        <div className=" col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/profile.jpg"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain mix-blend-screen "
            />

            <div>
              <p className="grid-headtext">Hi, I’m Sushant Lama</p>
              <p className="grid-subtext">
                With a years of experience, I have my hands on experience on
                both frontend and backend dev, creating dynamic and responsive
                websites which is to implement the thought of client on real
                world.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/mern.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain mix-blend-screen"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript and a range of frameworks and tools
                that empower me to build robust and scalable applications. React
                JS, Next JS, Node JS, Express JS, MongoDB, Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-1">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div className="space-y-2">
              <p className="grid-headtext">History</p>
              <p className="grid-subtext">
                SLC - Tarun Madhyamik Vidhyalaya (2015)
              </p>
              <p className="grid-subtext">
                +2 NEB - Takshashila Academy (2017)
              </p>
              <p className="grid-subtext">
                Bachelor TU - Prime College (2019-2024)
              </p>
              <Button name="Contact me" isBeam />
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />

                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  sushantlama732@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
