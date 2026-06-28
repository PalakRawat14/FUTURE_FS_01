import { personalInfo } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-text-col">
            <div className="hero-greeting">
              <span className="greeting-pill">Hi, I'm 👋</span>
            </div>
            <h1 className="hero-name">
              Palak <span className="hero-name-accent">Rawat</span>
            </h1>
            <p className="hero-role">{personalInfo.role}</p>
            <p className="hero-summary">
              {personalInfo.summary} Passionate about solving real-world problems through clean architecture and efficient code.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="hero-resume-link"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download Resume
              </a>
            </div>
            <div className="hero-social" role="list" aria-label="Social links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" role="listitem">
                <FiGithub size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" role="listitem">
                <FiLinkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Send email" role="listitem">
                <FiMail size={20} />
              </a>
            </div>
          </div>
          <div className="hero-visual-col">
            <div className="editor-card">
              <div className="editor-header">
                <span className="editor-dot"></span>
                <span className="editor-dot"></span>
                <span className="editor-dot"></span>
                <span className="editor-title">portfolio.js</span>
              </div>
              <div className="editor-body">
                <div className="ecode-line">
                  <span className="ecode-key">const</span> developer = {'{'}
                </div>
                <div className="ecode-line ecode-indent">
                  name: <span className="ecode-val">"Palak Rawat"</span>,
                </div>
                <div className="ecode-line ecode-indent">
                  role: <span className="ecode-val">"Full-Stack Developer"</span>,
                </div>
                <div className="ecode-line ecode-indent">
                  skills: [<span className="ecode-val">"React"</span>, <span className="ecode-val">"Node.js"</span>],
                </div>
                <div className="ecode-line ecode-indent">
                  passion: <span className="ecode-val">"Building solutions"</span>
                </div>
                <div className="ecode-line">{'}'};</div>
                <div className="ecode-line ecode-cursor">
                  <span className="ecode-key">export</span> <span className="ecode-key">default</span> developer;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
