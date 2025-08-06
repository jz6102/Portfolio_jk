import React from "react";
import "./Achievements.css";

const achievements = [
  {
    title: "AWS Certified Solutions Architect",
    description: "Amazon Web Services certification for cloud architecture.",
    image: "https://dummyimage.com/120x80/0ff2ff/23272f&text=AWS",
    category: "Certifications",
    github: "https://github.com/yourusername/aws-cert",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    title: "Google UX Design Certificate",
    description: "Professional certificate in UX design from Google.",
    image: "https://dummyimage.com/120x80/a259ff/23272f&text=UX",
    category: "Certifications",
    github: "https://github.com/yourusername/google-ux-cert",
    link: "https://www.coursera.org/professional-certificates/google-ux-design"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    description: "Microsoft certification for Azure cloud development.",
    image: "https://dummyimage.com/120x80/0ff2ff/23272f&text=Azure",
    category: "Certifications",
    github: "https://github.com/yourusername/azure-cert",
    link: "https://learn.microsoft.com/en-us/certifications/azure-developer/"
  },
  {
    title: "Coursera Full-Stack Web Development",
    description: "Completed Coursera specialization in full-stack web development.",
    image: "https://dummyimage.com/120x80/a259ff/23272f&text=FullStack",
    category: "Certifications",
    github: "https://github.com/yourusername/coursera-fullstack",
    link: "https://www.coursera.org/specializations/full-stack-react"
  },
  {
    title: "Udemy React Mastery",
    description: "Udemy certificate for advanced React.js development.",
    image: "https://dummyimage.com/120x80/0ff2ff/23272f&text=React",
    category: "Certifications",
    github: "https://github.com/yourusername/udemy-react-mastery",
    link: "https://www.udemy.com/certificate/react-mastery/"
  },
  {
    title: "Google Data Analytics Certificate",
    description: "Professional certificate in data analytics from Google.",
    image: "https://dummyimage.com/120x80/a259ff/23272f&text=Data+Analytics",
    category: "Certifications",
    github: "https://github.com/yourusername/google-data-analytics",
    link: "https://www.coursera.org/professional-certificates/google-data-analytics"
  },
  {
    title: "Meta Front-End Developer Certificate",
    description: "Meta (Facebook) certificate for front-end web development.",
    image: "https://dummyimage.com/120x80/0ff2ff/23272f&text=MetaFE",
    category: "Certifications",
    github: "https://github.com/yourusername/meta-frontend-cert",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    description: "IBM certificate for AI and machine learning engineering.",
    image: "https://dummyimage.com/120x80/a259ff/23272f&text=IBM+AI",
    category: "Certifications",
    github: "https://github.com/yourusername/ibm-ai-engineering",
    link: "https://www.coursera.org/professional-certificates/ai-engineer"
  },
  {
    title: "Scrum Master Certification",
    description: "Certified Scrum Master for agile project management.",
    image: "https://dummyimage.com/120x80/0ff2ff/23272f&text=Scrum",
    category: "Certifications",
    github: "https://github.com/yourusername/scrum-master-cert",
    link: "https://www.scrum.org/professional-scrum-master-i-certification"
  },
  {
    title: "Oracle Certified Java Programmer",
    description: "Oracle certification for Java programming expertise.",
    image: "https://dummyimage.com/120x80/a259ff/23272f&text=Java",
    category: "Certifications",
    github: "https://github.com/yourusername/oracle-java-cert",
    link: "https://education.oracle.com/java-se-programmer"
  }
];


const Achievements = () => {
  // Group by category
  const categories = Array.from(new Set(achievements.map(a => a.category)));
  return (
    <section className="achievements-section" id="achievements">
      <h2>Achievements</h2>
      {categories.map(cat => (
        <div key={cat} className="achievements-category">
          <h3 className="achievements-category-title">{cat}</h3>
          <div className="achievements-list">
            {achievements.filter(a => a.category === cat).map((ach, idx) => (
              <div className="achievement-card" key={ach.title + idx}>
                <img src={ach.image} alt={ach.title} className="achievement-img" />
                <div>
                  <h4>{ach.title}</h4>
                  <p>{ach.description}</p>
                  <div className="achievement-links">
                    <a href={ach.github} target="_blank" rel="noopener noreferrer" className="achievement-link-btn">GitHub</a>
                    <a href={ach.link} target="_blank" rel="noopener noreferrer" className="achievement-link-btn">Certificate</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
