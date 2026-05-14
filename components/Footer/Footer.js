import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.leftCol}>
          <h2 className={styles.hook}>Master the Craft.</h2>
          <p className={styles.bio}>
            <strong>Aditya Kailash Kuranjekar</strong><br />
            Building resources for the next generation of AI-first product managers.<br /><br />
            <span style={{opacity: 0.8, fontSize: '0.9em', lineHeight: '1.8'}}>
              • PM Coordinator @ Finance Club<br />
              • Technical PM Intern @ Inditronix AI Labs<br />
              • Product Brand Management Intern @ Skillify Me
            </span>
          </p>
        </div>

        <div className={styles.rightCols}>
          <div className={styles.linkCol}>
            <span className={styles.colTitle}>Resources</span>
            <Link href="/craft" className={styles.link}>Craft</Link>
            <Link href="/craft-ai" className={styles.link}>Craft + AI</Link>
            <Link href="/deep-ai" className={styles.link}>Deep AI</Link>
            <Link href="/case-studies" className={styles.link}>Case Studies</Link>
            <Link href="/blogs" className={styles.link}>Blogs</Link>
          </div>

          <div className={styles.linkCol}>
            <span className={styles.colTitle}>Connect</span>
            <div className={styles.horizontalLinks}>
              <a href="https://www.linkedin.com/in/aditya-kuranjekar-ba572130b/" target="_blank" rel="noopener noreferrer" className={styles.pillLink}>LinkedIn</a>
              <a href="https://www.instagram.com/_aditya.k._12/" target="_blank" rel="noopener noreferrer" className={styles.pillLink}>Instagram</a>
              <a href="https://github.com/adityakuranjekar" target="_blank" rel="noopener noreferrer" className={styles.pillLink}>GitHub</a>
              <a href="https://adityakuranjekar.github.io/" target="_blank" rel="noopener noreferrer" className={styles.pillLink}>Portfolio</a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section: Editorial Split Typography */}
      <div className={styles.middleSection}>
        <div className={styles.editorialBlock}>
          {/* Left: PRODU — massive */}
          <span className={styles.massiveProd}>PRODU</span>

          {/* Right: CT stacked above MANAGEMENT */}
          <div className={styles.stackedRight}>
            <span className={styles.massiveCt}>CT</span>
            <span className={styles.managementText}>MANAGEMENT</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <a href="https://adityakuranjekar.github.io/" target="_blank" rel="noopener noreferrer" className={styles.brand} style={{textDecoration: 'none'}}>
          Aditya K <span>&lt;3</span>
        </a>
        <div className={styles.copyright}>© 2026. Built in India.</div>
      </div>
    </footer>
  );
};

export default Footer;
