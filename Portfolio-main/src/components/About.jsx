import React from "react";
import { useInView } from "react-intersection-observer";
import Magnet from "./Magnet";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="about" className="flex flex-col pt-32" ref={ref}>
      <div
        className={`animate__animated ${
          inView ? "animate__zoomIn" : ""
        } animate__delay-500ms`}
      >
        <h1
          style={{ fontFamily: "Krona One" }}
          className="text-4xl text-center gradient-text md:text-5xl"
        >
          ABOUT
        </h1>
      </div>
      <div className="flex flex-col pt-28 justify-center items-center lg:flex-row lg:gap-24">
        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <img
            className={`rounded-4xl w-64 md:w-96 animate__animated ${
              inView ? "animate__fadeInRight" : ""
            } animate__delay-700ms`}
            src="/assets/mandar.jpg"
            alt="About"
          />
        </Magnet>
        <div>
          <h3
            style={{ fontFamily: "Montserrat" }}
            className={`text-center pt-18 w-86 md:w-120 lg:text-left lg:text-xl lg:pt-0 animate__animated ${
              inView ? "animate__fadeInLeft" : ""
            } animate__delay-900ms`}
          >
            Hi! I'm a beginner Full Stack Developer with a passion for building web applications that are both functional and user-friendly. I'm currently learning the MERN stack (MongoDB, Express.js, React, Node.js) and actively working on projects to strengthen my skills in both front-end and back-end development.

I'm enthusiastic about coding, problem-solving, and continuously improving my knowledge of web technologies. As I grow, I'm eager to collaborate on real-world projects, contribute to open-source, and explore best practices in software development.

I'm excited to keep learning and evolving as a developer!
          </h3>
          <div className="flex flex-col pt-18 justify-center items-center gap-8 md:flex-row lg:justify-start">
            <div
              className={`animate__animated ${
                inView ? "animate__fadeInUp" : ""
              } animate__delay-1100ms`}
            >
              
            </div>
            <div
              className={`animate__animated ${
                inView ? "animate__fadeInUp" : ""
              } animate__delay-1300ms`}
            >
             
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-28 gap-4 flex-col md:flex-row">
        <a
          href="#contact"
          className={`sexybutton animate__animated ${
            inView ? "animate__fadeInUp" : ""
          } animate__delay-1500ms`}
        >
          Hire Me !
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/15EWVtbBYuDJX0V1R4ldlQZsPCBbUbytC/view?usp=drivesdk"
          className={`sexybutton animate__animated $}
            inView ? "animate__fadeInUp" : ""
          } animate__delay-1700ms`}
        >
          Resume Download ↓
        </a>
      </div>
    </div>
  );
};

export default About;
