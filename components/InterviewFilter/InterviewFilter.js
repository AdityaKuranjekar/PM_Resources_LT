// e:\Professional Work\Business\Product Management\Website\PM_Resources\components\InterviewFilter\InterviewFilter.js
"use client";

import React from 'react';
import styles from './InterviewFilter.module.css';

const InterviewFilter = ({
  selectedCompany,
  selectedType,
  selectedRole,
  onCompanyChange,
  onTypeChange,
  onRoleChange,
  onClear,
  questions = []
}) => {
  // Dynamically extract unique values from the questions array
  const companies = ['All', ...new Set(questions.map((q) => q.company))].sort();
  const types = ['All', ...new Set(questions.map((q) => q.type))].sort();
  const roles = ['All', ...new Set(questions.map((q) => q.role))].sort();

  return (
    <div className={styles.filterContainer}>
      <div className={styles.selectGroup}>
        {/* Company Dropdown */}
        <select 
          className={styles.dropdown}
          value={selectedCompany}
          onChange={(e) => onCompanyChange(e.target.value)}
        >
          <option value="All">All Companies</option>
          {companies
            .filter((c) => c !== 'All')
            .map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
        </select>

        {/* Type Dropdown */}
        <select 
          className={styles.dropdown}
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="All">All Types</option>
          {types
            .filter((t) => t !== 'All')
            .map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
        </select>

        {/* Role Dropdown */}
        <select 
          className={styles.dropdown}
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
        >
          <option value="All">All Roles</option>
          {roles
            .filter((r) => r !== 'All')
            .map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      {(selectedCompany !== 'All' || selectedType !== 'All' || selectedRole !== 'All') && (
        <button className={styles.clearButton} onClick={onClear}>
          <span className={styles.reloadIcon}>↻</span> Clear filters
        </button>
      )}
    </div>
  );
};

export default InterviewFilter;
