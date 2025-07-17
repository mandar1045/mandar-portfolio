import React from "react";
import { useInView } from "react-intersection-observer";
import Magnet from "./Magnet";
const Skills = () => {
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

  const { ref: progSectionRef, inView: progSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: progImg1Ref, inView: progImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: progImg2Ref, inView: progImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 350,
  });

  const { ref: progImg3Ref, inView: progImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: progImg4Ref, inView: progImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 450,
  });

  const { ref: progImg5Ref, inView: progImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });
  const { ref: progImg6Ref, inView: progImg6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });
  const { ref: progImg7Ref, inView: progImg7InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: webDevSectionRef, inView: webDevSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: webDevImg1Ref, inView: webDevImg1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: webDevImg2Ref, inView: webDevImg2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 320,
  });

  const { ref: webDevImg3Ref, inView: webDevImg3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 340,
  });

  const { ref: webDevImg4Ref, inView: webDevImg4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 360,
  });

  const { ref: webDevImg5Ref, inView: webDevImg5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 380,
  });

  const { ref: webDevImg6Ref, inView: webDevImg6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: webDevImg7Ref, inView: webDevImg7InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 420,
  });

  const { ref: webDevImg8Ref, inView: webDevImg8InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 440,
  });

  const { ref: webDevImg9Ref, inView: webDevImg9InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 460,
  });

  const { ref: webDevImg10Ref, inView: webDevImg10InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 480,
  });

  const { ref: webDevImg11Ref, inView: webDevImg11InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: webDevImg12Ref, inView: webDevImg12InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 520,
  });

  const { ref: webDevImg13Ref, inView: webDevImg13InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 540,
  });

  const { ref: webDevImg14Ref, inView: webDevImg14InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 560,
  });

  const { ref: webDevImg15Ref, inView: webDevImg15InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 580,
  });

  return (
    <div
      id="skills"
      className={`pt-48 px-[15%] ${
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
          SKILLS
        </h1>
      </div>

      <div className="flex flex-col pt-24 gap-32">
        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            progSectionInView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={progSectionRef}
        >
          <div className="flex justify-center items-center text-2xl font-black gradient-text">
            PROGRAMMING
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg1InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/python.png"
                alt="Python"
                ref={progImg1Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg2InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/cpp.png"
                alt="C++"
                ref={progImg2Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg3InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/java.png"
                alt="Java"
                ref={progImg3Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg4InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/c.png"
                alt="C"
                ref={progImg4Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg5InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/sql.png"
                alt="SQL"
                ref={progImg5Ref}
              />
            </Magnet>
         
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg1InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/Tux.png"
                alt="Linux"
                ref={progImg6Ref}
              />
            </Magnet>
            
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  progImg1InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/ubnuntu.png"
                alt="Ubuntu"
                ref={progImg7Ref}
              />
            </Magnet>
          </div>
        </div>

        <div
          className={`flex flex-col gap-8 justify-center items-center ${
            webDevSectionInView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={webDevSectionRef}
        >
          <div className="flex justify-center items-center text-center text-2xl font-black gradient-text">
            WEB DEVELOPMENT
          </div>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg1InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/figma.png"
                alt="Figma"
                ref={webDevImg1Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg2InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/framer.png"
                alt="Framer"
                ref={webDevImg2Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg3InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/html.png"
                alt="HTML"
                ref={webDevImg3Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg4InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/css.png"
                alt="CSS"
                ref={webDevImg4Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg5InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/tailwind.png"
                alt="Tailwind CSS"
                ref={webDevImg5Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg6InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/js.png"
                alt="JavaScript"
                ref={webDevImg6Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg7InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/astro.png"
                alt="Astro"
                ref={webDevImg7Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg8InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/logo.svg"
                alt="Logo"
                ref={webDevImg8Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg9InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/react.png"
                alt="React"
                ref={webDevImg9Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg10InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/nodejs.png"
                alt="Node.js"
                ref={webDevImg10Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg11InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/expressjs.png"
                alt="Express.js"
                ref={webDevImg11Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg12InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/flask.png"
                alt="Flask"
                ref={webDevImg12Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg13InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/django.png"
                alt="Django"
                ref={webDevImg13Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg14InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/jwt.png"
                alt="JWT"
                ref={webDevImg14Ref}
              />
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <img
                className={`h-20 transition-transform hover:scale-110 ${
                  webDevImg15InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                src="/assets/socketio.png"
                alt="Socket.IO"
                ref={webDevImg15Ref}
              />
            </Magnet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
