// e:\Professional Work\Business\Product Management\Website\PM_Resources\app\interviews\page.js
"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InterviewFilter from '../../components/InterviewFilter/InterviewFilter';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import { interviewQuestions } from '../../data/interviewQuestions';
import styles from './interviews.module.css';

export default function InterviewsPage() {
  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');

  // Dynamic Filtering Logic
  const filteredQuestions = interviewQuestions.filter((q) => {
    const matchCompany = selectedCompany === 'All' || q.company === selectedCompany;
    const matchType = selectedType === 'All' || q.type === selectedType;
    const matchRole = selectedRole === 'All' || q.role === selectedRole;
    return matchCompany && matchType && matchRole;
  });

  const handleClearFilters = () => {
    setSelectedCompany('All');
    setSelectedType('All');
    setSelectedRole('All');
  };

  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Interview Prep</span>
        <h1 className={styles.title}>Practice Like It's Real.</h1>
        <p className={styles.subtitle}>
          Verified mock questions from top-tier PM interviews at Spotify, Meta, Google, and more.
        </p>
      </section>
      <div className={styles.content}>
        <InterviewFilter
          selectedCompany={selectedCompany}
          selectedType={selectedType}
          selectedRole={selectedRole}
          onCompanyChange={setSelectedCompany}
          onTypeChange={setSelectedType}
          onRoleChange={setSelectedRole}
          onClear={handleClearFilters}
          questions={interviewQuestions}
        />
        <div className={styles.cardList}>
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <InterviewCard
                key={q.id}
                company={q.company}
                question={q.question}
                answer={q.answer}
                type={q.type}
                role={q.role}
              />
            ))
          ) : (
            <div className={styles.noResults}>
              <h3>No questions match your current filters.</h3>
              <p>Try clearing your filters or selecting a different combination.</p>
              <button className={styles.clearBtnInline} onClick={handleClearFilters}>
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
