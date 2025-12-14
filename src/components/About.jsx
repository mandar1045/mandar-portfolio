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
            src="/assets/mandarnew.jpeg"
            alt=""
          />
        </Magnet>
        <div>
          <h3
            style={{ fontFamily: "Montserrat" }}
            className={`text-center pt-18 w-86 md:w-120 lg:text-left lg:text-xl lg:pt-0 animate__animated ${
              inView ? "animate__fadeInLeft" : ""
            } animate__delay-900ms`}
          >
            I’m a full-stack web developer with a strong passion for machine learning and software engineering.
          I started my journey with web development and have experience working with the MERN stack.
          I build scalable and responsive applications using modern web technologies.
          Alongside this, I’ve built projects in Python, exploring machine learning, PyTorch, and AI-driven solutions.
          I enjoy solving complex problems, learning new technologies, and creating intelligent, well-engineered products.

          </h3>
          <div className="flex flex-col pt-18 justify-center items-center gap-8 md:flex-row lg:justify-start">
            <div
              className={`animate__animated ${
                inView ? "animate__fadeInUp" : ""
              } animate__delay-1100ms`}
            >
              <h4 className="text-center text-sm"></h4>
              <h1 className="text-center text-4xl font-bold pt-2"></h1>
            </div>
            <div
              className={`animate__animated ${
                inView ? "animate__fadeInUp" : ""
              } animate__delay-1300ms`}
            >
              <h4 className="text-center text-sm"></h4>
              <h1 className="text-center text-4xl font-bold pt-2"></h1>
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
          href="https://drive.google.com/file/d/1mWcAmRxFBBx04X5_2wvq5Gt6exemVysE/view"
          className={`sexybutton animate__animated ${
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
