import "./Projects.css";

// Project data — swap with your real projects
const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A short description of what this project does, the problem it solves, and what you learned building it.",
        tags: ["React", "CSS", "JavaScript"],
        github: "https://github.com/",
        live: "https://yoursite.com",
    },
    {
        id: 2,
        title: "Project Two",
        description: "A short description of what this project does, the problem it solves, and what you learned building it.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/",
        live: "https://yoursite.com",
    },
    {
        id: 3,
        title: "Project Three",
        description: "A short description of what this project does, the problem it solves, and what you learned building it.",
        tags: ["React", "Bootstrap"],
        github: "https://github.com/",
        live: "https://yoursite.com",
    },
    {
        id: 4,
        title: "Project Four",
        description: "A short description of what this project does, the problem it solves, and what you learned building it.",
        tags: ["React", "Tailwind CSS"],
        github: "https://github.com/",
        live: "https://yoursite.com",
    },
];

function Projects() {
    return (
        <section className="projects" id="projects">

            {/* Section Header */}
            <div className="projects-header">
                <p className="projects-greeting">What I've Built</p>
                <h1 className="projects-title">
                    My <span className="projects-title-highlight">Projects</span>
                </h1>
                <p className="projects-description">
                    A collection of things I've built while learning and growing
                    as a developer. Each one taught me something new.
                </p>
            </div>

            {/* Project Cards Grid */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>

                        {/* Image Placeholder */}
                        <div className="project-image-placeholder">
                            <span className="project-image-label">Image Coming Soon</span>
                        </div>

                        {/* Card Content */}
                        <div className="project-card-body">

                            <h2 className="project-card-title">{project.title}</h2>

                            <p className="project-card-description">{project.description}</p>

                            {/* Tags */}
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="project-tag" key={tag}>{tag}</span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="project-links">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link project-link--outline"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link project-link--primary"
                                >
                                    Live Demo
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Projects;