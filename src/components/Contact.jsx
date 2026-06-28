import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiArrowUpRight } from "react-icons/fi";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section id="contact" className="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-label">CONTACT</span>
          <h2 className="section-heading">📬 Get in Touch</h2>
        </div>
        <div className="contact-content">
          <div className="contact-info" role="list" aria-label="Contact details">
            <div className="contact-info-item" role="listitem">
              <div className="contact-icon-box">
                <FiMail />
              </div>
              <div>
                <span className="contact-info-label">Email</span>
                <a href={`mailto:${personalInfo.email}`}>
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="contact-info-item" role="listitem">
              <div className="contact-icon-box">
                <FiMapPin />
              </div>
              <div>
                <span className="contact-info-label">Location</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
            <div className="contact-info-item" role="listitem">
              <div className="contact-icon-box">
                <FiLinkedin />
              </div>
              <div>
                <span className="contact-info-label">LinkedIn</span>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  {personalInfo.linkedin.replace("https://", "")} <FiArrowUpRight className="contact-external-icon" />
                </a>
              </div>
            </div>
            <div className="contact-info-item" role="listitem">
              <div className="contact-icon-box">
                <FiGithub />
              </div>
              <div>
                <span className="contact-info-label">GitHub</span>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  {personalInfo.github.replace("https://", "")} <FiArrowUpRight className="contact-external-icon" />
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {submitted ? (
              <div className="contact-success">
                <FiSend className="success-icon" />
                <h3>Thank you!</h3>
                <p>Your message has been prepared.</p>
                <button type="button" className="btn btn-primary" onClick={handleReset}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      type="text" name="name" placeholder="Your Name"
                      value={form.name} onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <input
                      type="email" name="email" placeholder="Your Email"
                      value={form.email} onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-field">
                  <input
                    type="text" name="subject" placeholder="Subject"
                    value={form.subject} onChange={handleChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && <span id="subject-error" className="form-error" role="alert">{errors.subject}</span>}
                </div>
                <div className="form-field">
                  <textarea
                    name="message" rows="5" placeholder="Your Message"
                    value={form.message} onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary contact-submit-btn">
                  <FiSend />
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
