import React from 'react';
import styles from './ComingSoon.module.css';
import Link from 'next/link';

const ComingSoon = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>🚧</div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          We are currently crafting this premium experience. Check back soon for highly curated, elite PM resources.
        </p>
        <Link href="/" className={styles.backBtn}>Return Home</Link>
      </div>
    </div>
  );
};

export default ComingSoon;
