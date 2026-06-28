import { education } from "../data/portfolioData";
import { FiBookOpen } from "react-icons/fi";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education" aria-label="Education">
      <div className="container">
        <div className="education-header">
          <span className="section-label">EDUCATION</span>
          <h2 className="section-heading">📚 My Education</h2>
        </div>
        {education.map((item, index) => (
          <div key={index} className="edu-timeline-item">
            <div className="edu-timeline-dot"></div>
            <article className="edu-card">
              <div className="edu-icon-wrap">
                <FiBookOpen className="edu-icon" />
              </div>
              <div className="edu-body">
                <span className="edu-year">{item.year}</span>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
              </div>
              <div className="edu-cgpa-value">{item.details}</div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
