"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const navLinks = [
  { name: "Craft",               path: "/craft"         },
  { name: "Craft + AI",          path: "/craft-ai"      },
  { name: "Deep AI",             path: "/deep-ai"       },
  { name: "Interview Questions", path: "/interviews"    },
  { name: "Case Studies",        path: "/case-studies"  },
  { name: "Blogs",               path: "/blogs"         },
];

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]  = useState(false);
  const popoverRef = useRef(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close popover when clicking outside */
  useEffect(() => {
    const onClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        Aditya K <span>&lt;3</span>
      </Link>

      {/* Desktop navigation */}
      <div className={styles.desktopNav}>
        {navLinks.map((link, i) => (
          <Link key={i} href={link.path} className={styles.navLink}>
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: CTA + hamburger */}
      <div className={styles.navRight} ref={popoverRef}>
        <button className={styles.ctaButton}>Join Community</button>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`} />
        </button>

        {/* Compact popover dropdown */}
        {mobileMenuOpen && (
          <div className={styles.mobilePopover}>
            <div className={styles.mobileMenu}>
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className={styles.mobileLink}
                  style={{ animationDelay: `${i * 40}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className={styles.mobileDivider} />
              <Link
                href="#"
                className={styles.mobileLink}
                style={{ animationDelay: `${navLinks.length * 40}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
