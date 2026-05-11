"use client";
import React from 'react';
import styles from './InterviewFilter.module.css';

const InterviewFilter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.selectGroup}>
        <select className={styles.dropdown}>
          <option>All Companies</option>
          <option>Google</option>
          <option>Meta</option>
          <option>Stripe</option>
        </select>
        <select className={styles.dropdown}>
          <option>All Types</option>
          <option>Product Sense</option>
          <option>Execution</option>
          <option>Behavioral</option>
        </select>
        <select className={styles.dropdown}>
          <option>All Roles</option>
          <option>PM</option>
          <option>Senior PM</option>
          <option>AI PM</option>
        </select>
      </div>
      <button className={styles.clearButton}>
        <span className={styles.reloadIcon}>↻</span> Clear filters
      </button>
    </div>
  );
};

export default InterviewFilter;
