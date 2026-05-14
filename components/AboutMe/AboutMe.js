'use client';
import React, { useState, useRef } from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');
  const [glare, setGlare] = useState({ x: '50%', y: '50%', opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((rect.height / 2 - y) / rect.height) * 12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
    setGlare({ x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%`, opacity: 0.12 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    setGlare({ x: '50%', y: '50%', opacity: 0 });
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div
          ref={cardRef}
          className={styles.card}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transform }}
        >
          {/* Glare overlay */}
          <div
            className={styles.glare}
            style={{
              background: `radial-gradient(circle at ${glare.x} ${glare.y}, rgba(255,255,255,${glare.opacity}), transparent 60%)`,
            }}
          />

          <div className={styles.cardContent}>
            <div className={styles.imageSide}>
              <img 
                src="/Aditya_Face_Profile.jpeg" 
                alt="Aditya Kuranjekar" 
                className={styles.profileImage}
              />
            </div>
            
            <div className={styles.textSide}>
              <div className={styles.cardHeader}>
                <span className={styles.eyebrow}>Meet the Architect</span>
                <h2 className={styles.title}>Aditya Kuranjekar</h2>
              </div>

              <div className={styles.divider} />

              <ul className={styles.detailsList}>
                <li className={styles.detailItem}>
                  <span className={styles.bullet} />
                  <p>PM Coordinator @ <strong>Finance Club, IIT Patna</strong></p>
                </li>
                <li className={styles.detailItem}>
                  <span className={styles.bullet} />
                  <p>Technical PM Intern @ <strong>Inditronix AI Labs</strong></p>
                </li>
                <li className={styles.detailItem}>
                  <span className={styles.bullet} />
                  <p>Product Brand Management Intern @ <strong>Skillify Me</strong></p>
                </li>
                <li className={styles.detailItem}>
                  <span className={styles.bullet} />
                  <p>B.Tech CSE (5th Semester) @ <strong>IIT Patna</strong></p>
                </li>
              </ul>

              <div className={styles.socialRow}>
                <a href="https://www.linkedin.com/in/aditya-kuranjekar-ba572130b/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>LinkedIn</a>
                <a href="https://github.com/adityakuranjekar" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>GitHub</a>
                <a href="https://www.instagram.com/_aditya.k._12/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Instagram</a>
                <a href="https://adityakuranjekar.github.io/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
