import "./App.css";
import "animate.css/animate.min.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Particles from "./components/Particles";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "fixed" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <a
        href="#top"
        className="btn btn-ghost btn-circle bg-zinc-300 fixed bottom-10 right-18 z-50 text-2xl text-black floating-icon"
      >
        {" "}
        ↑{" "}
      </a>
    </>
  );
}

export default App;
