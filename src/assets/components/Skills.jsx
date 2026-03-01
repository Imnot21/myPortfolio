import "./Skills.css";

// Skill data — swap these out with your real stack
const skills = [
    { category: "Frontend",  items: ["React", "HTML", "CSS", "JavaScript"] },
    { category: "Styling",   items: ["Tailwind CSS", "Bootstrap", "Sass"] },
    { category: "Tools",     items: ["Git", "GitHub", "VS Code", "Figma"] },
    { category: "Learning",  items: ["Node.js", "TypeScript", "Next.js"] },
];

function Skills() {
    return (
        <section className="skills" id="skills">

            {/* Left: Text Content */}
            <div className="skills-content">

                <p className="skills-greeting">What I Work With</p>

                <h1 className="skills-title">
                    My <span className="skills-title-highlight">Skills</span>
                </h1>

                <p className="skills-description">
                    I'm a frontend-focused developer who loves building clean,
                    responsive interfaces. Here's the tech I use day to day —
                    always learning and adding more.
                </p>

                {/* Skill Categories */}
                <div className="skills-grid">
                    {skills.map((group) => (
                        <div className="skills-card" key={group.category}>
                            <p className="skills-card-title">{group.category}</p>
                            <div className="skills-tags">
                                {group.items.map((item) => (
                                    <span className="skills-tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Right: Visual stat blocks */}
            <div className="skills-visual">

                <div className="skills-stat-wrapper">

                    <div className="skills-stat">
                        <span className="skills-stat-number">10+</span>
                        <span className="skills-stat-label">Technologies</span>
                    </div>

                    <div className="skills-stat">
                        <span className="skills-stat-number">5+</span>
                        <span className="skills-stat-label">Projects Built</span>
                    </div>

                    <div className="skills-stat">
                        <span className="skills-stat-number">1+</span>
                        <span className="skills-stat-label">Years Learning</span>
                    </div>

                    <div className="skills-stat">
                        <span className="skills-stat-number">∞</span>
                        <span className="skills-stat-label">Still Curious</span>
                    </div>

                    {/* Floating badges — same as hero */}
                    <div className="skills-badge skills-badge--top">Frontend 💻</div>
                    <div className="skills-badge skills-badge--bottom">Always Learning 📚</div>

                </div>

            </div>

        </section>
    );
}

export default Skills;