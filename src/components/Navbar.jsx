import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => document.getElementById(l.href.slice(1)));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" aria-label="Go to top">
          <span className="logo-initials">PR</span>
          <span className="logo-name">Palak Rawat</span>
        </a>
        <button
          className={`navbar-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul
          id="navbar-menu"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={activeSection === link.href.slice(1) ? "active-link" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar-action">
          <a
            href={personalInfo.resumeUrl}
            className="btn btn-accent-outline navbar-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
