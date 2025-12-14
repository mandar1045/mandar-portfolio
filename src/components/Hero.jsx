import { useInView } from "react-intersection-observer";
import GradientText from "./GradientText";
import { FaCircleChevronDown } from "react-icons/fa6";

const Hero = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: nameRef, inView: nameInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: iconRef, inView: iconInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  return (
    <div
      id="top"
      className="h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div
        ref={titleRef}
        className={`${
          titleInView ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        <h4 className="text-center text-sm md:text-md lg:text-lg">Hello I'm</h4>
      </div>

      <div
        ref={nameRef}
        className={`pt-4 ${
          nameInView ? "animate__animated animate__zoomIn" : "opacity-0"
        }`}
      >
        <GradientText
          animationSpeed={5}
          showBorder={false}
          className="text-center text-4xl md:text-8xl lg:text-9xl px-[5%]"
        >
          <h1>MANDAR</h1>
        </GradientText>
      </div>

      <div
        ref={descRef}
        className={`pt-4 max-w-3xl ${
          descInView ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        <h4 className="text-center text-sm md:text-md lg:text-lg">
          From insightful data analytics and cutting-edge machine learning to
          creative design, full-stack web development, IoT innovation, and
          impactful digital marketing — I craft intelligent solutions that
          connect technology, creativity, and strategy.
        </h4>
      </div>

      <div
        ref={iconRef}
        className={`pt-18 ${
          iconInView ? "animate__animated animate__bounce" : "opacity-0"
        }`}
      >
        <a href="#about">
          <FaCircleChevronDown
            className="floating-icon cursor-pointer hover:opacity-60"
            size={25}
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
