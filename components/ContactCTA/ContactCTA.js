'use client';
import React, { useState } from 'react';
import styles from './ContactCTA.module.css';

const ContactCTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Get in Touch</span>
          <h2 className={styles.title}>Let's Talk Product.</h2>
          <p className={styles.subtitle}>
            Looking to collaborate, discuss strategy, or just connect?
          </p>
        </div>

        {status === 'success' ? (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>✓</span>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Message Sent!</strong>
              <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
                Thank you. Your message has been successfully routed. I'll get back to you shortly.
              </p>
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'error' && (
              <div style={{ color: '#ef4444', fontSize: '14px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.15)', padding: '0.875rem 1rem', borderRadius: 'var(--radius-md)', fontWeight: 500 }}>
                ⚠️ Something went wrong. Please try again or reach out via social links in the footer.
              </div>
            )}

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
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
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
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
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                placeholder="What's on your mind?"
                className={styles.textarea}
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={status === 'submitting'}
              style={status === 'submitting' ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactCTA;
