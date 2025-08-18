import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(window.scrollY);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const curr = window.scrollY;
          if (curr > lastScroll.current && curr > 80) {
            setHidden(true); // scroll down
          } else {
            setHidden(false); // scroll up
          }
          lastScroll.current = curr;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [logoHover, setLogoHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // close mobile menu on navigation or resize
    const onResize = () => setMenuOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`navbar glassy-navbar${hidden ? ' navbar-hidden' : ''}`}>
      <a
        href="#home"
        className={`navbar-logo${logoHover ? ' navbar-logo-expanded' : ''}`}
        aria-label="Go to home"
        onMouseEnter={() => setLogoHover(true)}
        onMouseLeave={() => setLogoHover(false)}
        onFocus={() => setLogoHover(true)}
        onBlur={() => setLogoHover(false)}
        tabIndex={0}
      >
        <span className="navbar-logo-text">
          {logoHover ? 'Jaikanna' : 'JK'}
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="navbar-nav" aria-label="Main navigation">
        <ul className="navbar-links navbar-links-centered">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav ${menuOpen ? 'mobile-open' : ''}`} role="menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} onClick={() => setMenuOpen(false)}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
