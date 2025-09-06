import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-center gap-6 shadow">
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link>
      <Link to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</Link>
      <Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link>
      <Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link>
    </nav>
  );
}
