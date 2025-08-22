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

  // Smooth offset-aware scrolling for in-page links inside the navbar
  useEffect(() => {
    const navbarSelector = '.glassy-navbar';
    const navLinksSelector = `${navbarSelector} a[href^="#"]`;
    const links = Array.from(document.querySelectorAll(navLinksSelector));

    function getNavHeight() {
      const nav = document.querySelector(navbarSelector);
      return nav ? Math.round(nav.getBoundingClientRect().height) : 86;
    }

    function onLinkClick(e) {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const offset = getNavHeight() + 8; // small gap under the header
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });

      // close mobile menu if open
      setMenuOpen(false);
    }

    links.forEach(l => l.addEventListener('click', onLinkClick));
    return () => links.forEach(l => l.removeEventListener('click', onLinkClick));
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
