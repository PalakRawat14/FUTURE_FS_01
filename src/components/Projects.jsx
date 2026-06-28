import { projects } from "../data/portfolioData";
import { FiGithub, FiArrowRight } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <span className="section-label">PROJECTS</span>
            <h2 className="section-heading">🚀 My Projects</h2>
          </div>
          <a href={projects[0]?.github || "#"} target="_blank" rel="noopener noreferrer" className="projects-view-all-link">
            View All Projects <FiArrowRight />
          </a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-img" aria-hidden="true">
                  <img src={project.image} alt={project.title} className="project-thumb" />
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech" role="list" aria-label="Technologies used">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tech-chip" role="listitem">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent-outline btn-small"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <FiGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}
