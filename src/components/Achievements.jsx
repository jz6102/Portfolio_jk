import React from "react";
import "./Achievements.css";

const achievements = [
  {
    "title": "AWS Machine Learning",
    "description": "Amazon Web Services certification focused on applied machine learning concepts and deployment.",
    "category": "Cloud",
    "image": "https://dummyimage.com/120x80/0ff2ff/23272f&text=AWS+ML",
    "link": "https://aws.amazon.com/certification/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/01_Cloud"
  },
  {
    "title": "Ethical Hacking",
    "description": "Certification covering penetration testing, cyber attacks, and security fundamentals.",
    "category": "Cybersecurity",
    "image": "https://dummyimage.com/120x80/ff4444/23272f&text=Hacking",
    "link": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/02_Cybersecurity"
  },
  {
    "title": "Flutter Development Bootcamp",
    "description": "Comprehensive Flutter app development course taught by Angela Yu.",
    "category": "Mobile Development",
    "image": "https://dummyimage.com/120x80/00cfff/23272f&text=Flutter+Yu",
    "link": "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/03_Mobile"
  },
  {
    "title": "Flutter Advanced",
    "description": "Advanced Flutter concepts and architecture by Maximilian Schwarzmüller.",
    "category": "Mobile Development",
    "image": "https://dummyimage.com/120x80/0077ff/ffffff&text=Flutter+Max",
    "link": "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/03_Mobile"
  },
  {
    "title": "IIRS Remote Sensing",
    "description": "ISRO’s Indian Institute of Remote Sensing program in GIS, GNSS, and remote sensing technologies.",
    "category": "Space Research",
    "image": "https://dummyimage.com/120x80/ffaa00/23272f&text=IIRS+RS",
    "link": "https://www.iirs.gov.in/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/04_Space_Research"
  },
  {
    "title": "IIRS AIML for Geodata Analysis",
    "description": "IIRS certification program applying artificial intelligence and machine learning to geospatial data.",
    "category": "Space Research",
    "image": "https://dummyimage.com/120x80/ff8800/23272f&text=IIRS+AIML",
    "link": "https://www.iirs.gov.in/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/04_Space_Research"
  },
  {
    "title": "Meta Front-End Developer",
    "description": "Meta’s professional certificate for front-end web development including HTML, CSS, and React.",
    "category": "Web Development",
    "image": "https://dummyimage.com/120x80/4267b2/ffffff&text=Meta+FrontEnd",
    "link": "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/05_Web"
  },
  {
    "title": "Meta JavaScript",
    "description": "Meta’s certification focusing on modern JavaScript and advanced front-end logic.",
    "category": "Web Development",
    "image": "https://dummyimage.com/120x80/333333/ffffff&text=Meta+JS",
    "link": "https://www.coursera.org/learn/meta-programming-with-javascript",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/05_Web"
  },
  {
    "title": "Research Paper",
    "description": "Published research paper under SRMIST in the field of computer science and technology.",
    "category": "Research",
    "image": "https://dummyimage.com/120x80/009900/ffffff&text=Research",
    "link": "https://www.srmist.edu.in/",
    "github": "https://github.com/jz6102/CERTIFICATIONS/tree/main/06_Research"
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
