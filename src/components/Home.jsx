import React, { useEffect, useRef, useState } from "react";
import "./Home.css";



import RotatingNumbers from "./RotatingNumbers";
import jkImg from "../assets/jk.jpeg";
import jk1Img from "../assets/jk1.jpeg";
import jk2Img from "../assets/jai.jpg"


const heroImages = [jkImg, jk1Img, jk2Img];
const Home = () => {

  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="home-section" id="home">
      <div className="hero-modern" style={{ marginBottom: '120px' }}>
        <div className="hero-intro">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">JAIKANNA</span>
          </h1>
          <p className="hero-desc">
            I build <span className="highlight">world-class digital products</span> with a focus on performance, accessibility, and design. <br />
            <span className="hero-keywords">React.js • Redux • Vite • TypeScript • UI/UX • Cloud</span>
          </p>
          <div className="hero-cta">
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="#contact" className="hero-btn secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-img-wrapper" style={{ background: 'rgba(10,10,10,0.92)' }}>
          <img src={heroImages[imgIdx]} alt="Profile" className="hero-img" />
          <div className="hero-glow"></div>
          {/* Rotating number overlay */}
          <RotatingNumbers numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} interval={3000} />
        </div>
      </div>
      <div className="about-modern about-centered">
        <h2 className="about-title-centered" style={{ borderBottom: 'none' }}>About Me</h2>
        <div className="about-cards about-cards-story">
          <div className="about-card">
            <h3 className="about-card-title">Background</h3>
            <p>
              My fascination with technology began at a young age, fueled by an insatiable curiosity to understand how things work beneath the surface. From dismantling gadgets to writing my first lines of code, I was captivated by the endless possibilities of the digital world. This passion led me to pursue a degree in Computer Science, where I immersed myself in the study of algorithms, data structures, and software engineering principles. My academic journey was marked by hands-on projects, hackathons, and internships that challenged me to think critically and creatively. These experiences not only honed my technical skills but also instilled in me a deep appreciation for collaboration, perseverance, and the transformative power of technology. Today, I carry forward this spirit of exploration and learning, always eager to tackle new challenges and push the boundaries of what’s possible.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Professional Journey</h3>
            <p>
              My professional path has been a dynamic blend of innovation, leadership, and continuous growth. I have had the privilege of working with diverse teams across startups and established enterprises, where I specialized in building robust, scalable web applications. Leveraging technologies like React, Redux, TypeScript, and Node.js, I have architected solutions that prioritize performance, security, and user experience. My approach is deeply rooted in agile methodologies, fostering a culture of collaboration, transparency, and rapid iteration. I am passionate about UI/UX design, believing that intuitive interfaces are the cornerstone of great digital products. Whether leading a team or contributing as an individual developer, I am committed to delivering solutions that not only meet business objectives but also delight users. My journey is a testament to the power of adaptability, resilience, and a relentless pursuit of excellence.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Passions & Interests</h3>
            <p>
              Beyond the realm of code, I am deeply passionate about the intersection of technology, design, and human behavior. I believe that truly impactful products are born from empathy and a genuine understanding of user needs. This philosophy drives my involvement in open source projects, tech communities, and mentorship programs, where I strive to share knowledge and inspire others. I am fascinated by emerging fields such as artificial intelligence, cloud computing, and digital accessibility, constantly seeking ways to integrate these advancements into my work. Outside of technology, I enjoy exploring art, music, and travel, drawing inspiration from diverse cultures and experiences. For me, creativity and curiosity are the driving forces behind both personal and professional growth.
            </p>
          </div>
          <div className="about-card">
            <h3 className="about-card-title">Values & Vision</h3>
            <p>
              At the core of my work lies a commitment to quality, innovation, and user-centricity. I believe that technology should empower and uplift, breaking down barriers and creating opportunities for all. My vision is to build products that are not only functional and beautiful but also accessible and sustainable. I approach every project with a growth mindset, embracing challenges as opportunities to learn and evolve. Collaboration, integrity, and a relentless focus on the user experience guide my decisions and actions. As I look to the future, I am excited to continue learning, building, and contributing to a world where technology serves as a force for positive change. Every line of code is a step toward that vision—a vision of a more connected, inclusive, and innovative world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
