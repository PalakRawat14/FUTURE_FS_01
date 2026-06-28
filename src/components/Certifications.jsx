import { certifications } from "../data/portfolioData";
import { FiAward } from "react-icons/fi";
import "./Certifications.css";

export default function Certifications() {
  return (
    <section id="certifications" className="certifications" aria-label="Certifications">
      <div className="container">
        <div className="certifications-header">
          <span className="section-label">CERTIFICATIONS</span>
          <h2 className="section-heading">🏆 My Certifications</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <article key={index} className="cert-card">
              <div className="cert-icon-wrap">
                <FiAward className="cert-icon" />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-year">{cert.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
