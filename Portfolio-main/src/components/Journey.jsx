import React from "react";
import { useInView } from "react-intersection-observer";

const Journey = () => {
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

  const { ref: timeline1Ref, inView: timeline1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: timeline2Ref, inView: timeline2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: timeline3Ref, inView: timeline3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: timeline4Ref, inView: timeline4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: button1Ref, inView: button1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 600,
  });

  const { ref: button2Ref, inView: button2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 700,
  });

  return (
    <div
      id="journey"
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
          MY JOURNEY
        </h1>
      </div>

      <div className="pt-36">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li
            ref={timeline1Ref}
            className={`${
              timeline1InView
                ? "animate__animated animate__fadeInRight animate__delay-0s"
                : "opacity-0"
            }`}
          >
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">Sep 2024- May 2028</time>
              <div className="text-lg font-black">
                Bachelors in Information Technology
              </div>
              <h1 style={{ filter: "opacity(0.7)" }} className="text-sm italic">
                Vellore Institute of Technology, Vellore
              </h1>
              <h4 className="text-sm pt-4">
                Completed advanced coursework in core CS subjects, including
                DSA, DBMS, OS, CN, and InfoSec.
              </h4>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center pt-28 gap-4 flex-col md:flex-row">
        <a
          href="#contact"
          className={`sexybutton ${
            button1InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={button1Ref}
        >
          Hire Me !
        </a>
        <a
          href="https://drive.google.com/file/d/14RSVy3SEp7NxXz9Y_JFkPLVR9ko6O2oH/view?usp=drivesdk"
          className={`sexybutton ${
            button2InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={button2Ref}
        >
          Resume Download ↓
        </a>
      </div>
    </div>
  );
};

export default Journey;

