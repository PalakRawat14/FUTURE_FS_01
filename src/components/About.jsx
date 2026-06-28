import { personalInfo } from "../data/portfolioData";
import {
  FiDownload,
  FiMapPin,
  FiMail,
  FiCalendar,
} from "react-icons/fi";
import "./About.css";

const stats = [
  { value: "4+", label: "Projects Completed" },
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Technologies" },
  { value: "B.Tech", label: "CSE 2023–2027" },
];

export default function About() {
  return (
    <section id="about" className="about" aria-label="About me">
      <div className="container">
        <div className="about-header">
          <span className="section-label">ABOUT ME</span>
          <h2 className="section-heading">👋 Get to know me</h2>
        </div>
        <div className="about-content">
          <div className="about-left">
            <div className="about-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat-card">
                  <span className="about-stat-number">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-right">
            <p className="about-highlight">
              I am a B.Tech Computer Science and Engineering student with hands-on
              experience in full-stack development. I enjoy building web
              applications that solve practical problems and demonstrate strong
              software engineering fundamentals.
            </p>
            <p className="about-text">
              My projects include role-based web applications, compiler design
              tools, route optimization systems, and operating system scheduling
              concepts. I am passionate about writing clean, efficient code and
              continuously learning new technologies.
            </p>
            <div className="about-info-row">
              <div className="about-info-item">
                <div className="about-info-icon-box">
                  <FiMapPin />
                </div>
                <div>
                  <span className="about-info-label">Location</span>
                  <span className="about-info-value">{personalInfo.location}</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon-box">
                  <FiCalendar />
                </div>
                <div>
                  <span className="about-info-label">Degree</span>
                  <span className="about-info-value">B.Tech CSE (2023 – 2027)</span>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon-box">
                  <FiMail />
                </div>
                <div>
                  <span className="about-info-label">Email</span>
                  <span className="about-info-value">{personalInfo.email}</span>
                </div>
              </div>
            </div>
            <a href={personalInfo.resumeUrl} download className="btn btn-primary about-resume-btn">
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
