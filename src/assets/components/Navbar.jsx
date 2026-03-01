import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm fixed-top pd">
      <div className="navbar-container d-flex align-items-center justify-content-between">
        <a href="/" className="navbar-logo d-flex align-items-center">
          <img src={logo} alt="Company logo" />
        </a>

       <div className={`navbar-menu d-flex gap-3 ${isOpen ? "active" : ""}`}>
    <a href="#home"    className="navbar-item" onClick={() => setIsOpen(false)}>ABOUT</a>
    <a href="#skills"   className="navbar-item" onClick={() => setIsOpen(false)}>SKILLS</a>
    <a href="#projects" className="navbar-item" onClick={() => setIsOpen(false)}>PROJECTS</a>
    <a href="#contact"  className="navbar-item" onClick={() => setIsOpen(false)}>CONTACT</a>
</div>

        {/* Hamburger */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;