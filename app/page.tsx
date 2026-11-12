import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import AmbientBackground from "@/src/components/layout/AmbientBackground";
import MouseSpotlight from "@/src/components/layout/MouseSpotlight";
import ScrollProgress from "@/src/components/layout/ScrollProgress";

import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import Experience from "@/src/components/sections/Experience";
import Skills from "@/src/components/sections/Skills";
import Projects from "@/src/components/sections/Projects";
import Architecture from "@/src/components/sections/Architecture";
import Articles from "@/src/components/sections/Articles";
import Contact from "@/src/components/sections/Contact";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#050505] text-white"
    >
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Architecture />
      <Articles />
      <Contact />
      <Footer/>
    </main>
  );
}