import { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);   
    const toggleMenu = () => {
        setIsOpen(!isOpen);


    };
    return (
        <nav className="navbar navbar-expand-sm fixed-top pd">
            <div className="navbar-container d-flex align-items-center justify-content-between" >
                <a href="/" className="navbar-logo d-flex align-items-center">
                <img src={logo} alt="this is the company logo"/>
                </a>   
                <div className={`navbar-menu d-flex gap-3 ${isOpen ? "open" : ""}`}>
                    <a href="/home" className="navbar-item">ABOUT</a>
                    <a href="/about" className="navbar-item">SKILLS</a>
                    <a href="/services" className="navbar-item">PROJECTS</a>
                    <a href="/contact" className="navbar-item">CONTACT</a>
                </div>
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