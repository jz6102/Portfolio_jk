import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Modern Portfolio",
    description: "A highly interactive, scalable portfolio built with React, Redux, and Vite.",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    tech: ["React", "Redux", "Vite", "CSS"]
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce app with advanced UI, payment integration, and admin dashboard.",
    github: "https://github.com/yourusername/ecommerce",
    live: "https://yourecommerce.com",
    tech: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "AI Chatbot",
    description: "Conversational AI chatbot for customer support, built with NLP and React.",
    github: "https://github.com/yourusername/aichatbot",
    live: "https://aichatbot.com",
    tech: ["React", "TensorFlow.js", "NLP", "Node.js"]
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage daily tasks, deadlines, and reminders.",
    github: "https://github.com/yourusername/taskmanager",
    live: "https://taskmanager.com",
    tech: ["React", "Redux", "Firebase", "Material UI"]
  },
  {
    title: "Personal Blog Platform",
    description: "A markdown-based blog platform with live preview and custom themes.",
    github: "https://github.com/yourusername/blogplatform",
    live: "https://blogplatform.com",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency dashboard with charts and news feeds.",
    github: "https://github.com/yourusername/cryptodash",
    live: "https://cryptodash.com",
    tech: ["React", "Redux", "Chart.js", "API"]
  },
  {
    title: "Fitness Tracker",
    description: "Track workouts, nutrition, and progress with analytics and social features.",
    github: "https://github.com/yourusername/fitnesstracker",
    live: "https://fitnesstracker.com",
    tech: ["React Native", "Redux", "Firebase"]
  },
  {
    title: "Online Learning Platform",
    description: "A scalable platform for online courses, quizzes, and certifications.",
    github: "https://github.com/yourusername/onlinelearning",
    live: "https://onlinelearning.com",
    tech: ["React", "Node.js", "GraphQL", "PostgreSQL"]
  },
  {
    title: "Weather App",
    description: "A beautiful weather app with animated backgrounds and location search.",
    github: "https://github.com/yourusername/weatherapp",
    live: "https://weatherapp.com",
    tech: ["React", "API", "Styled Components"]
  },
  {
    title: "Expense Tracker",
    description: "Track expenses, set budgets, and visualize spending with charts.",
    github: "https://github.com/yourusername/expensetracker",
    live: "https://expensetracker.com",
    tech: ["React", "Redux", "D3.js"]
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
