import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './case-studies.module.css';

export const metadata = { title: 'Case Studies | PM Resources' };

const caseStudies = [
  {
    id: 1,
    tag: 'Growth',
    company: 'Fintech Startup',
    title: 'From 0 to 10K: Building a Retention Loop for a Student Finance App',
    excerpt: 'How a two-person PM team diagnosed a 40% Day-7 drop-off, redesigned the onboarding funnel, and doubled retention in 60 days without a single new feature.',
    metrics: ['40% → 22% Churn', '2x D7 Retention', '60-day sprint'],
  },
  {
    id: 2,
    tag: 'EdTech',
    company: 'Skillify Me',
    title: 'Rebuilding the Course Discovery Experience at an EdTech Platform',
    excerpt: 'A deep dive into how we ran a 3-week discovery sprint, identified a critical search intent mismatch, and shipped a new discovery module that lifted course starts by 35%.',
    metrics: ['+35% Course Starts', '3-week sprint', 'Discovery Research'],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Case Studies</span>
        <h1 className={styles.title}>Where Theory Meets Execution</h1>
        <p className={styles.subtitle}>Real product problems, real decisions, real outcomes.</p>
      </section>
      <section className={styles.list}>
        {caseStudies.map((cs) => (
          <article key={cs.id} className={styles.card}>
            <div className={styles.cardLeft}>
              <div className={styles.cardTop}>
                <span className={styles.tag}>{cs.tag}</span>
                <span className={styles.company}>{cs.company}</span>
              </div>
              <h2 className={styles.cardTitle}>{cs.title}</h2>
              <p className={styles.cardExcerpt}>{cs.excerpt}</p>
              <a href="#" className={styles.readLink}>Read full case study →</a>
            </div>
            <div className={styles.cardRight}>
              {cs.metrics.map((m, i) => (
                <div key={i} className={styles.metricChip}>{m}</div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
