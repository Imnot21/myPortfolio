import { useEffect, useState } from "react";
import "./Hero.css";
import avatar from "../images/profile.jpg";
function Hero() {
    // Typing animation for the role titles
    const roles = ["Frontend Developer", "UI/UX Enthusiast", "React Developer"];
    const [currentRole, setCurrentRole] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!deleting && charIndex < current.length) {
            // Typing forward
            timeout = setTimeout(() => setCharIndex((c) => c + 1), 100);
        } else if (!deleting && charIndex === current.length) {
            // Pause at end before deleting
            timeout = setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && charIndex > 0) {
            // Deleting
            timeout = setTimeout(() => setCharIndex((c) => c - 1), 60);
        } else if (deleting && charIndex === 0) {
            // Move to next role
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
        }

        setCurrentRole(current.substring(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, roleIndex]);

    return (
        <section className="hero" id="home">

            {/* Left: Text Content */}
            <div className="hero-content">

                <p className="hero-greeting">👋 Hello, I'm</p>

                <h1 className="hero-name">
                    Adam Christopher <span className="hero-name-highlight">Peras</span>
                </h1>

                {/* Typing animation */}
                <h2 className="hero-role">
                    {currentRole}
                    <span className="hero-cursor">|</span>
                </h2>

                <p className="hero-description">
                    I build clean, responsive, and user-friendly web experiences.
                    Passionate about turning ideas into reality through code.
                </p>

                {/* CTA Buttons */}
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#" className="btn btn-outline" download>Download Resume</a>
                </div>

                {/* Social Links */}
                <div className="hero-socials">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                    <a href="mailto:your@email.com" className="social-link">Email</a>
                </div>

            </div>

            {/* Right: Avatar / Visual */}
            <div className="hero-visual">
                <div className="hero-avatar-wrapper">
                    <img
                        src={avatar}
                        alt="Adam Christopher Peras"
                        className="hero-avatar"
                    />
                    {/* Decorative floating badges */}
                    <div className="hero-badge hero-badge--top">React ⚛️</div>
                    <div className="hero-badge hero-badge--bottom">Open to Work 🚀</div>
                </div>
            </div>

        </section>
    );
}

export default Hero;