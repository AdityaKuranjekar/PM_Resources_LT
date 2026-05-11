"use client";
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Expert Resources in Product Management</h1>
        <p className={styles.subtitle}>~ By Aditya Kuranjekar | Credit to - Vikrant Jain (Product Head at Stock Edge)</p>
        
        <div className={styles.jokeContainer}>
          <p className={styles.joke}>
            "A Product Manager is someone who thinks nine women can deliver a baby in one month if they just align their roadmaps."
          </p>
        </div>
      </div>
      
      <div className={styles.heroImageContainer}>
        <div className={styles.imageWrapper}>
          <img 
            src="/swami.jpeg" 
            alt="Swami Vivekananda" 
            className={styles.heroImage}
            onError={(e) => {
              // Fallback if image is not yet moved to public folder
              e.target.src = "https://via.placeholder.com/500x600/0a0a0a/00E5FF?text=Swami+Vivekananda";
            }}
          />
          <div className={styles.quoteWrapper}>
            <p className={styles.imageQuote}>
              "Be the servant while leading. Be unselfish. Have infinite patience, and success is yours."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
