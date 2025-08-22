import React, { useEffect, useRef, useState } from "react";
import "./Home.css";



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
            <span className="hero-keywords">React.js • Node.js • Python • Sql • AI/ML • Cloud</span>
          </p>
          <div className="hero-cta">
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="#contact" className="hero-btn secondary">Contact Me</a>
          </div>
        </div>
          <div className="hero-img-wrapper" style={{ background: 'rgba(10,10,10,0.92)' }}>
          <img src={heroImages[imgIdx]} alt="Profile" className="hero-img" />
          <div className="hero-glow"></div>
        </div>
      </div>
      <section className="know-section" id="know">
        <h2 className="section-title">Know Me Little.....</h2>
        <div className="know-cards">
          <article className="know-card">
  <h3>Software Developer</h3>
  <p>
    I build web applications using React and Python with a focus on clean code,
    usability, and scalability. I am continuously improving my craft by exploring
    modern tools and frameworks to deliver impactful solutions.
  </p>
</article>

<article className="know-card">
  <h3>AI Learner & Enthusiast</h3>
  <p>
    Currently learning the foundations of artificial intelligence and machine learning.
    I experiment with models and workflows to understand how AI can be applied in
    real-world applications that solve problems and create value.
  </p>
</article>

<article className="know-card">
  <h3>Tech Integration Explorer</h3>
  <p>
    My core interest lies in connecting different technologies — from front-end to
    back-end — to build complete systems. I aim to create software that drives
    innovation and makes a meaningful difference in business and daily life.
  </p>
</article>

<article className="know-card">
  <h3>Vision & Growth</h3>
  <p>
    I believe in lifelong learning as a developer. Every project I work on is a step
    toward building better products and preparing for the future of tech. My goal is
    to craft software that not only works but inspires and scales with impact.
  </p>
</article>
        </div>
      </section>
    </section>
  );
}

export default Home;
