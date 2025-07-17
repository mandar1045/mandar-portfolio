import React from "react";
import { useInView } from "react-intersection-observer";
import Magnet from "./Magnet";

const Projects = () => {
  // Define refs and inView states for each animated section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 100,
  });

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  return (
    <div
      id="projects"
      className={`pt-48 px-[5%] ${
        sectionInView ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
      ref={sectionRef}
    >
      <div
        ref={titleRef}
        className={`${
          titleInView
            ? "animate__animated animate__zoomIn animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <h1
          style={{ fontFamily: "Krona One" }}
          className="text-4xl text-center gradient-text md:text-5xl"
        >
          PROJECTS
        </h1>
      </div>

      <div className="flex gap-16 flex-wrap justify-center pt-28 md:px-[10%] lg:px-[15%]">
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div
            className={`card bg-base-300 w-72 shadow-sm rounded-2xl p-5 ${
              card1InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card1Ref}
          >
            <figure>
              <img src="/assets/Screenshot 2025-07-05 125642.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">GearUp Sports</h2>
              <p className="text-center md:text-left">
                E-Commerce website for the premium sports equipments
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/mandar1045/GearUp-Sports"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://gearupsports.vercel.app/"
                >
                  Live site
                </a>
              </div>
            </div>
          </div>
        </Magnet>
        
      
      </div>
    </div>
  );
};

export default Projects;
