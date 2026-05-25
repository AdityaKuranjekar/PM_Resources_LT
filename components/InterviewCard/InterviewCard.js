// e:\Professional Work\Business\Product Management\Website\PM_Resources\components\InterviewCard\InterviewCard.js
"use client";

import React, { useState } from 'react';
import styles from './InterviewCard.module.css';

const InterviewCard = ({ company, question, answer, type, role }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.companyBadge} data-company={company}>{company}</div>
        <div className={styles.questionSection}>
          <h3 className={styles.questionText}>{question}</h3>
          <div className={styles.metaRow}>
            <span className={styles.metaTag}>{type}</span>
            <span className={styles.metaDivider}>•</span>
            <span className={styles.metaTag}>{role}</span>
          </div>
        </div>
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
            <div className={styles.answerText} dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
