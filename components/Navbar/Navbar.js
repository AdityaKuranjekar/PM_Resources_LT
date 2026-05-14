"use client";
import React, { useState, useEffect } from 'react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link href="https://adityakuranjekar.github.io/" target="_blank" rel="noopener noreferrer" className={styles.logo}>
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

      {/* Mobile Menu Toggle (Simplified for minimalism) */}
      <div className={styles.navRight}>
        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`} />
        </button>

        {mobileMenuOpen && (
          <div className={styles.mobilePopover}>
            <div className={styles.mobileMenu}>
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.path}
                  className={styles.mobileLink}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
