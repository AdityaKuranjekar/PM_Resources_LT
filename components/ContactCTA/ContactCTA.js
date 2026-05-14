'use client';
import React, { useState } from 'react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // We do NOT prevent default here so the browser can natively submit the form to FormSubmit
    // We just set submitted to true so we can show a UI change if needed, 
    // though the page will redirect to FormSubmit.
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h2 className={styles.title}>Let's Talk Product.</h2>
          <p className={styles.subtitle}>
            Looking to collaborate, discuss strategy, or just connect?
          </p>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <p>Redirecting to secure submission...</p>
          </div>
        ) : (
          <form 
            className={styles.form} 
            action="https://formsubmit.co/f09ecae8bddc8554152dadf79dfd0799" 
            method="POST"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Message from PM Resources Site!" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className={styles.input}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactCTA;
