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

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: card4Ref, inView: card4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: card5Ref, inView: card5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
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
              <img src="/assets/Pasted image.png" alt="Video Chat" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">Video Chat</h2>
              <p className="text-center md:text-left">
                Real-time video chat application built with modern web technologies.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/mandar1045/videoChat"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://yochat-2nay.onrender.com/"
                >
                  Live site
                </a>
              </div>
            </div>
          </div>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div
            className={`card bg-base-300 w-72 shadow-sm rounded-2xl p-5 ${
              card2InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card2Ref}
          >
            <figure>
              <img src="/assets/Pasted image (2).png" alt="Password Vault" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">Password Vault</h2>
              <p className="text-center md:text-left">
                Secure password vault for managing and storing credentials safely.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/mandar1045/password-vault"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://password-vault-oxfw.onrender.com"
                >
                  Live site
                </a>
              </div>
            </div>
          </div>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div
            className={`card bg-base-300 w-72 shadow-sm rounded-2xl p-5 ${
              card3InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card3Ref}
          >
            <figure>
              <img src="/assets/logo.svg" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">Autonomous API Version Migration System</h2>
              <p className="text-center md:text-left">
                Automated system for seamless API version migrations.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/mandar1045/Autonomous-API-Version-Migration-System-"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg btn-disabled"
                  target="_blank"
                >
                  Live site(under development)
                </a>
              </div>
            </div>
          </div>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div
            className={`card bg-base-300 w-72 shadow-sm rounded-2xl p-5 ${
              card4InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card4Ref}
          >
            <figure>
              <img src="/assets/logo.svg" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">Competitive Programming Training with Instant Video Explanation</h2>
              <p className="text-center md:text-left">
                Platform for competitive programming training with instant video explanations.
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/mandar1045/competitive-Programming-Training-with-Instant-Video-Explanation"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg btn-disabled"
                  target="_blank"
                >
                  Live site(under development)
                </a>
              </div>
            </div>
          </div>
        </Magnet>
        <Magnet padding={50} disabled={false} magnetStrength={15}>
          <div
            className={`card bg-base-300 w-72 shadow-sm rounded-2xl p-5 ${
              card5InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card5Ref}
          >
            <figure>
              <img src="/assets/Pasted image (3).png" alt="GearUp Sports" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">GearUp Sports</h2>
              <p className="text-center md:text-left">
                Online platform for sports enthusiasts to gear up with the latest equipment.
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
