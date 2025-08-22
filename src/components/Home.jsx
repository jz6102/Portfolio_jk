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
              I design and build performant web and mobile experiences using modern stacks (React, Redux, Node). I focus on accessibility, clean architecture, and shipping products that scale.
            </p>
          </article>

          <article className="know-card">
            <h3>AI Enthusiast & Data Analyst</h3>
            <p>
              Passionate about machine learning and data — I prototype models and extract insights to drive smarter decisions. I love merging data science with product-facing features.
            </p>
          </article>

          <article className="know-card">
            <h3>Big Data & Engineering</h3>
            <p>
              Working with Hadoop and Spark for large-scale data processing, I build pipelines and ETL systems to handle terabytes of data reliably and efficiently.
            </p>
          </article>

          <article className="know-card">
            <h3>Vision & Impact</h3>
            <p>
              I’m on a mission to digitize processes and craft next-gen software and apps that improve lives — blending design, data, and AI to create measurable impact.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default Home;
