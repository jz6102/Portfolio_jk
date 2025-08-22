import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Stress Meter",
    description: "An AI-powered stress level detection app that analyzes text inputs to classify stress levels.",
    github: "https://github.com/jz6102/stress-meter",
    live: "https://yourdeploymentlink.com", // if deployed, else keep GitHub only
    tech: ["Python", "Flask", "Machine Learning"]
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and custom styling to showcase projects and certifications.",
    github: "https://github.com/jz6102/Portfolio_jk",
    live: "https://yourportfolio.com", // replace with your deployed link
    tech: ["React", "CSS", "JavaScript"]
  },
  {
    title: "Python REST API with CI/CD & Testing",
    description: "A RESTful API built in Python with automated testing and CI/CD pipeline for deployment.",
    github: "https://github.com/jz6102/python-rest-api", // create repo
    live: "#", // replace once deployed
    tech: ["Python", "FastAPI", "Docker", "GitHub Actions"]
  },
  {
    title: "AI-Powered Workflow Automation System",
    description: "A system to automate workflows with AI-powered decision-making and task scheduling.",
    github: "https://github.com/jz6102/ai-workflow-automation", // create repo
    live: "#", // replace once deployed
    tech: ["Python", "AI", "Automation", "React"]
  }
];

const Projects = () => {
  const listRef = useRef(null);
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    const compute = () => {
      const el = listRef.current;
      if (!el) return;
      const containerWidth = el.clientWidth;
      // Assume min card width ~260px + gap 24px
      const minCard = 260 + 24;
      const columns = Math.max(1, Math.floor(containerWidth / minCard));
      const total = projects.length;
      const lastRowCount = total % columns === 0 ? columns : total % columns;
      // align right when last row has 1-3 items
      setAlignRight(lastRowCount > 0 && lastRowCount <= 3);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div ref={listRef} className={`projects-list ${alignRight ? 'align-last-right' : ''}`}>
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div>
              <div className="project-tech">
                {project.tech.map((t) => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
