

import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Contact.css";

const SERVICE_ID = "service_xxxxxxx"; // Replace with your EmailJS service ID
const TEMPLATE_ID = "template_xxxxxxx"; // Replace with your EmailJS template ID
const USER_ID = "user_xxxxxxx"; // Replace with your EmailJS public key

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows={8} maxLength={1000} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <div className="contact-status">{status}</div>}
      <div className="contact-socials">
        <a href="https://www.instagram.com/.jk./" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/jaikanna777" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/jz6102" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/jaikanna777/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <SiLeetcode />
        </a>
      </div>
    </section>
  );
};

export default Contact;
