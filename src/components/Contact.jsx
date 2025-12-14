import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import Magnet from "./Magnet";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  // Form state
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  // Form message state
  const [formMessage, setFormMessage] = useState({
    text: "",
    isError: false,
    visible: false,
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("OpyKRxZNZHW8puXM0");
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const { email, subject, message } = formData;
    if (!email || !subject || !message) {
      setFormMessage({
        text: "All fields are required!",
        isError: true,
        visible: true,
      });
      return;
    }
    setIsLoading(true);
    // Prepare data for EmailJS
    const templateParams = {
      email,
      subject,
      message,
      timestamp: new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
      }), // IST timestamp
    };

    // Send email using EmailJS
    emailjs
      .send("service_rl1he4m", "template_5l7q0fg", templateParams)
      .then(() => {
        setFormMessage({
          text: "Message sent successfully!",
          isError: false,
          visible: true,
        });
        // Clear the form
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setFormMessage({
          text: `Failed to send message: ${error.text}`,
          isError: true,
          visible: true,
        });
        setIsLoading(false);
      });
  };

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

  const { ref: getInTouchRef, inView: getInTouchInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: descRef, inView: descInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 300,
  });

  const { ref: social1Ref, inView: social1InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: social2Ref, inView: social2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 450,
  });

  const { ref: social3Ref, inView: social3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 500,
  });

  const { ref: social4Ref, inView: social4InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 550,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 200,
  });

  const { ref: input2Ref, inView: input2InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 350,
  });

  const { ref: input3Ref, inView: input3InView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 400,
  });

  const { ref: textareaRef, inView: textareaInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
    delay: 450,
  });

  return (
    <div
      id="contact"
      className={`py-48 px-[5%] ${
        sectionInView ? "animate__animated animate__fadeIn" : "opacity-0"
      }`}
      ref={sectionRef}
    >
      <div
        ref={titleRef}
        className={` ${
          titleInView
            ? "animate__animated animate__zoomIn animate__delay-0s"
            : "opacity-0"
        }`}
      >
        <h1
          style={{ fontFamily: "Krona One" }}
          className="text-4xl text-center gradient-text md:text-5xl"
        >
          CONTACT
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center pt-18 lg:flex-row lg:justify-start lg:px-92">
        <div>
          <h1
            ref={getInTouchRef}
            className={`gradient-text font-black text-center text-2xl lg:text-4xl lg:text-left ${
              getInTouchInView
                ? "animate__animated animate__fadeInRight animate__delay-0s"
                : "opacity-0"
            }`}
          >
            GET IN TOUCH
          </h1>
          <h3
            ref={descRef}
            className={`text-sm text-center pt-8 lg:text-left ${
              descInView
                ? "animate__animated animate__fadeInRight animate__delay-0s"
                : "opacity-0"
            }`}
          >
            I'm always open to connecting, whether it's for a potential
            collaboration, an exciting opportunity, or just a good conversation
            about tech and innovation.
          </h3>
          <div className="flex justify-center pt-8 gap-4 lg:justify-start">
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="https://www.instagram.com/mandar._2005/"
                target="_blank"
                className={`btn btn-ghost btn-circle bg-zinc-300 h-8 w-8 ${
                  social1InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                ref={social1Ref}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0 0 30 30"
                >
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                </svg>
              </a>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="https://www.github.com/mandar1045"
                target="_blank"
                className={`btn btn-ghost btn-circle bg-zinc-300 h-8 w-8 ${
                  social2InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                ref={social2Ref}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0 0 50 50"
                >
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
              </a>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="mailto: http://gmail.com/mandarjoshi1045@gmail.com"
                className={`btn btn-ghost btn-circle bg-zinc-300 h-8 w-8 ${
                  social3InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                ref={social3Ref}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <a
                href="https://www.linkedin.com/in/mandar-joshi-0b951b28a/"
                target="_blank"
                className={`btn btn-ghost btn-circle bg-zinc-300 h-8 w-8 ${
                  social4InView
                    ? "animate__animated animate__zoomIn animate__delay-0s"
                    : "opacity-0"
                }`}
                ref={social4Ref}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="18"
                  height="18"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
            </Magnet>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-16">
          {/* Form message display */}
          {formMessage.visible && (
            <div
              className={`mb-4 text-center text-sm ${
                formMessage.isError ? "text-[#ff4444]" : "text-[#00cc00]"
              }`}
            >
              {formMessage.text}
            </div>
          )}

          {/* Contact form */}
          <form
            id="contact-form"
            className={`flex flex-col justify-center items-center gap-4 w-120 ${
              formInView
                ? "animate__animated animate__fadeInLeft animate__delay-0s"
                : "opacity-0"
            }`}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              id="email"
              className={`input rounded-lg text-sm bg-[#ffffff15] border-none ${
                input2InView
                  ? "animate__animated animate__fadeInLeft animate__delay-0s"
                  : "opacity-0"
              }`}
              type="email"
              placeholder="Email"
              ref={input2Ref}
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              id="subject"
              className={`input rounded-lg text-sm bg-[#ffffff15] border-none ${
                input3InView
                  ? "animate__animated animate__fadeInLeft animate__delay-0s"
                  : "opacity-0"
              }`}
              type="text"
              placeholder="Subject"
              ref={input3Ref}
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              id="message"
              className={`textarea rounded-lg text-sm bg-[#ffffff15] border-none ${
                textareaInView
                  ? "animate__animated animate__fadeInLeft animate__delay-0s"
                  : "opacity-0"
              }`}
              placeholder="Message"
              ref={textareaRef}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

