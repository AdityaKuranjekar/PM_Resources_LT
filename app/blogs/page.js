import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import styles from './blogs.module.css';

export const metadata = { title: 'Blogs | PM Resources' };

const blogPosts = [
  {
    id: 1,
    tag: 'Strategy',
    title: 'Why Most PMs Confuse Features for Strategy',
    excerpt: 'Strategy is not a roadmap. A well-defined product strategy answers the hardest question in the room — what are we NOT building, and why?',
    date: 'May 10, 2026',
    readTime: '6 min read',
  },
  {
    id: 2,
    tag: 'Frameworks',
    title: 'The CIRCLES Method: A Proper Teardown',
    excerpt: 'Everyone knows CIRCLES. Almost no one uses it correctly. Here is a structured critique and a leaner approach for modern product interviews.',
    date: 'May 3, 2026',
    readTime: '8 min read',
  },
  {
    id: 3,
    tag: 'Leadership',
    title: "Influence Without Authority: The PM's Core Skill",
    excerpt: 'You do not own the engineers, designers, or the data team. But you are accountable for the outcome. This is the fundamental tension of Product Management.',
    date: 'April 25, 2026',
    readTime: '5 min read',
  },
];

export default function BlogsPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Perspectives</span>
        <h1 className={styles.title}>The PM's Notebook</h1>
        <p className={styles.subtitle}>Unfiltered thoughts on product strategy, leadership, and craft.</p>
      </section>
      <section className={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.tag}>{post.tag}</span>
              <span className={styles.meta}>{post.date} · {post.readTime}</span>
            </div>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardExcerpt}>{post.excerpt}</p>
            <div className={styles.cardFooter}>
              <a href="#" className={styles.readLink}>Read article →</a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
