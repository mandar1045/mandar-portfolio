import React from "react";
import { useInView } from "react-intersection-observer";

const Highlights = () => {
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

  const { ref: collapse1Ref, inView: collapse1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: collapse2Ref, inView: collapse2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: collapse3Ref, inView: collapse3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: collapse4Ref, inView: collapse4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: collapse5Ref, inView: collapse5InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: collapse6Ref, inView: collapse6InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 600,
  });

  return (
    <div
      id="highlights"
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
          HIGHLIGHTS
        </h1>
      </div>
      <div className="flex flex-col gap-4 pt-28 px-[10%]">
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse1InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse1Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            📄 Research Paper Published
          </div>
          <div className="collapse-content text-sm flex flex-col gap-4">
            <p>
              Published a research paper proposing an AI-based system to
              forecast power demand for IoT and machine devices. The model
              enhances energy efficiency by enabling smart, real-time load
              management, contributing to sustainable and intelligent
              infrastructure design.
            </p>
            <a
              target="_blank"
              href="https://www.researchgate.net/publication/390426970_Optimizing_Power_Supply_with_AI-Predicted_Demand_for_IoT_and_Machine_Devices"
              className="btn btn-primary rounded-lg w-30"
            >
              Link
            </a>
          </div>
        </div>
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse2InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse2Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            🛠️ TechOps Lead & Ex-Vice Chairman at TAM-VIT
          </div>
          <div className="collapse-content text-sm">
            Led the Technical Operations division at TAM-VIT, steering the team
            through numerous national-level events and technological
            initiatives. As Ex-Vice Chairman, I facilitated strategic growth,
            fostered interdisciplinary collaboration, and championed AI & ML
            literacy among students. My tenure was marked by a blend of
            technical leadership and community building.
          </div>
        </div>
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse3InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse3Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            🧠 NASBA Certified SQL Developer
          </div>
          <div className="collapse-content text-sm flex flex-col gap-4">
            <p>
              Earned certification from NASBA, demonstrating mastery in
              Structured Query Language (SQL) and data manipulation. This
              credential reflects deep analytical expertise, enabling efficient
              data extraction, transformation, and insight generation in
              compliance with global data standards and best practices.
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/learning/certificates/a20272087f7ad86aed137a46c16b42aa3576a3ef15cdb5a81bd3820b63f6dca9"
              className="btn btn-primary rounded-lg w-30"
            >
              Link
            </a>
          </div>
        </div>
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse4InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse4Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            🏁 Finalist – Caterpillar Code-a-thon 2024
          </div>
          <div className="collapse-content text-sm">
            Distinguished as a national finalist in the prestigious Caterpillar
            Code-a-thon 2024. Designed and presented a robust solution to an
            industrial challenge using AI-driven insights, exhibiting both
            technical acumen and an innovative spirit tailored for impact in
            real-world scenarios.
          </div>
        </div>
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse5InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse5Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            🎓 Mentored 250+ Students
          </div>
          <div className="collapse-content text-sm">
            Guided over 250 students in their academic and professional journeys
            through mentorship programs, workshops, and one-on-one sessions. My
            focus remains on demystifying AI, machine learning, and full-stack
            development while nurturing a culture of curiosity, discipline, and
            resilience.
          </div>
        </div>
        <div
          className={`collapse collapse-arrow rounded-xl ${
            collapse6InView
              ? "animate__animated animate__fadeInUp animate__delay-0s"
              : "opacity-0"
          }`}
          ref={collapse6Ref}
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title font-black text-xl">
            📚 Facilitated Learning through 20+ Workshops
          </div>
          <div className="collapse-content text-sm">
            Orchestrated and delivered 20+ interactive workshops on topics
            spanning AI, machine learning, data analytics, and emerging
            technologies. Each session was crafted to inspire, inform, and
            empower participants to confidently navigate complex technical
            landscapes.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
