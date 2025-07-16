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
    delay: 300,
  });

  const { ref: card6Ref, inView: card6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
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
              <img src="/assets/hirecrest.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">HireCrest AI</h2>
              <p className="text-center md:text-left">
                Intelligent Job Recruitment System Leveraging Machine Learning
                for Candidate Compatibility and Automated Assessments
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/sahilmurhekar/HireCrest"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://hirecrest.onrender.com"
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
              <img src="/assets/visiblevoice.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">VisibleVoice AI</h2>
              <p className="text-center md:text-left">
                AI-Driven System Converting Sign Gestures into Natural Language
                Text and Voice to Bridge Communication Gaps
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/sahilmurhekar/visiblevoiceAI"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg btn-disabled"
                  target="_blank"
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
              <img src="/assets/plingchat.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">PlingChat</h2>
              <p className="text-center md:text-left">
                Full-Stack Messaging Application Enabling Seamless, Secure, and
                Instant Communication
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/sahilmurhekar/PlingChat"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://plingchat.onrender.com"
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
              card4InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card4Ref}
          >
            <figure>
              <img src="/assets/interviewprep.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">InterviewPrep AI</h2>
              <p className="text-center md:text-left">
                End-to-End Interview Readiness Platform Featuring Custom
                Question Banks and AI Evaluations
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/sahilmurhekar/InterviewPrepAI"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://prep-ai.streamlit.app/"
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
              card5InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card5Ref}
          >
            <figure>
              <img src="/assets/preprocessai.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">PreProcessor AI</h2>
              <p className="text-center md:text-left">
                Interactive Web Tool for Seamless Dataset Preparation,
                Visualization, and Predictive Enhancements
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://github.com/sahilmurhekar/ProcessAI"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg"
                  target="_blank"
                  href="https://preprocessai.streamlit.app/"
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
              card6InView
                ? "animate__animated animate__fadeInUp animate__delay-0s"
                : "opacity-0"
            }`}
            ref={card6Ref}
          >
            <figure>
              <img src="/assets/skincare.png" alt="Project" />
            </figure>
            <div className="card-body items-center md:items-start">
              <h2 className="card-title">Skincare AI</h2>
              <p className="text-center md:text-left">
                Deep Learning-Driven Dermatology Tool for Automated Detection
                and Classification of Skin Conditions
              </p>
              <div className="card-actions justify-center md:justify-start">
                <a
                  className="btn btn-primary rounded-lg"
                  href="https://github.com/sahilmurhekar/skincareAI"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  className="btn btn-primary rounded-lg btn-disabled"
                  target="_blank"
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
