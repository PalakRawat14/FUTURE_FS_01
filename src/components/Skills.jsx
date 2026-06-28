import { skillCategories } from "../data/portfolioData";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMysql,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import {
  VscSymbolStructure,
  VscSymbolMethod,
  VscVm,
  VscDebugConsole,
  VscEditorLayout,
} from "react-icons/vsc";
import { FiCode, FiLayout, FiServer, FiDatabase, FiCloud, FiCpu } from "react-icons/fi";
import "./Skills.css";

const iconMap = {
  "C": SiC,
  "C++": SiCplusplus,
  "Python": SiPython,
  "JavaScript": SiJavascript,
  "HTML": SiHtml5,
  "CSS": SiCss,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": SiPostman,
  "MySQL": SiMysql,
  "AWS": FaAws,
  "Git": SiGit,
  "Linux Ubuntu": SiLinux,
  "Visual Studio Code": VscEditorLayout,
  "Data Structures and Algorithms": VscSymbolStructure,
  "OOP": VscSymbolMethod,
  "Operating Systems": VscVm,
  "CPU Scheduling": VscDebugConsole,
  "Compiler Design": VscDebugConsole,
};

const categoryIcons = {
  "Programming Languages": FiCode,
  "Frontend": FiLayout,
  "Backend": FiServer,
  "Database": FiDatabase,
  "Cloud & Tools": FiCloud,
  "Core CS Concepts": FiCpu,
};

export default function Skills() {
  return (
    <section id="skills" className="skills" aria-label="Skills and technologies">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">SKILLS</span>
          <h2 className="section-heading">⚡ My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((group) => {
            const CategoryIcon = categoryIcons[group.category];
            return (
              <div key={group.category} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon-box">
                    {CategoryIcon && <CategoryIcon className="skill-card-icon" />}
                  </div>
                  <h3 className="skill-card-title">{group.category}</h3>
                </div>
                <div className="skill-card-skills">
                  {group.skills.map((skill) => {
                    const Icon = iconMap[skill];
                    return (
                      <span key={skill} className="skill-chip">
                        {Icon && <Icon className="skill-chip-icon" />}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
