import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import InterviewFilter from '../../components/InterviewFilter/InterviewFilter';
import InterviewCard from '../../components/InterviewCard/InterviewCard';
import styles from './interviews.module.css';

export const metadata = { title: 'Interview Prep | PM Resources' };

const dummyQuestions = [
  {
    company: 'Stripe',
    question: 'How would you design an API-first payments product for small creators?',
    answer: 'I would start by understanding the target segment (small creators). Their primary pain point is usually easy integration without needing backend developers. I would define the core use cases: payment links, recurring donations, and instant payouts. The GTM strategy would rely on PLG with a self-serve dashboard, simple webhooks, and low initial transaction fees...',
  },
  {
    company: 'Meta',
    question: 'Product Teardown: Why did Instagram launch Reels, and how do they measure its success?',
    answer: 'Instagram launched Reels primarily to counter TikToks rising engagement among Gen Z. Their strategic moat was leveraging their existing massive social graph. The primary success metrics (North Star) would be daily time spent per user on Reels and the number of accounts creating at least one Reel per week. Counter metrics would include cannibalization of Stories engagement...',
  },
  {
    company: 'Google',
    question: 'Estimate the bandwidth required to stream YouTube videos globally in a day.',
    answer: 'This is a classic guesstimate. Let us assume there are 2 billion active users. If 50% watch YouTube daily, that is 1B daily viewers. Assume the average watch time is 30 minutes. If an average 720p video consumes about 15MB per minute, the daily bandwidth per user is 450MB. Total bandwidth = 1B * 450MB = 450 Petabytes per day.',
  },
];

export default function InterviewsPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Interview Prep</span>
        <h1 className={styles.title}>Practice Like It's Real.</h1>
        <p className={styles.subtitle}>
          Verified mock questions from top-tier PM interviews at Stripe, Meta, Google, and more.
        </p>
      </section>
      <div className={styles.content}>
        <InterviewFilter />
        <div className={styles.cardList}>
          {dummyQuestions.map((q, i) => (
            <InterviewCard key={i} company={q.company} question={q.question} answer={q.answer} />
          ))}
        </div>
      </div>
    </main>
  );
}
