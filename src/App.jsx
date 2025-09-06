import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-5 mt-5">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} Mohamed Alaa. All rights reserved.
      </footer>
    </>
  );
}
