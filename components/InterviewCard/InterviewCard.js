"use client";
import React, { useState } from 'react';
import styles from './InterviewCard.module.css';

const InterviewCard = ({ company, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.companyBadge} data-company={company}>{company}</div>
        <h3 className={styles.questionText}>{question}</h3>
        <button 
          className={styles.toggleBtn}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Hide Answer' : 'Show Answer'}
        </button>
      </div>
      
      <div className={`${styles.answerContainer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.answerOverflow}>
          <div className={styles.answerContent}>
            <h4 className={styles.answerLabel}>Mock Solution:</h4>
            <p className={styles.answerText}>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
