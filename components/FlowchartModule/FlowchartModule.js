"use client";
import React, { useState, useRef } from 'react';
import styles from './FlowchartModule.module.css';
import Module1Content from './Module1Content';

const FlowchartModule = ({ data }) => {
  const [expandedId, setExpandedId] = useState(null);
  const headerRefs = useRef({});

  const toggleNode = (id) => {
    const opening = expandedId !== id;
    const switching = opening && expandedId !== null; // a different module was open

    setExpandedId(opening ? id : null);

    if (opening) {
      if (switching) {
        // Wait for the old module's collapse animation (0.42s) to finish
        // before scrolling, otherwise the shrinking page pulls us to the bottom
        setTimeout(() => {
          headerRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 440);
      } else {
        // Nothing was open — scroll immediately after paint
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            headerRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });
      }
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <div className={styles.flowchartContainer}>
      {data.map((module) => {
        const isExpanded = expandedId === module.id;
        
        return (
          <div key={module.id} className={styles.nodeWrapper}>
            <div 
              ref={(el) => { headerRefs.current[module.id] = el; }}
              className={`${styles.nodeHeader} ${isExpanded ? styles.active : ''}`}
              onClick={() => toggleNode(module.id)}
            >
              <div className={styles.nodeBullet}></div>
              <div className={styles.nodeTitleContainer}>
                <h3 className={styles.nodeTitle}>{module.title}</h3>
                <p className={styles.nodeFocus}>{module.focus || "Core concepts and execution strategies."}</p>
              </div>
            </div>

            <div className={`${styles.nodeContentWrapper} ${isExpanded ? styles.expanded : ''}`}>
              <div className={styles.nodeContentInner}>
                <div className={styles.connectorLine}></div>
                
                <div className={styles.contentBlock}>
                  <div className={styles.contentDetails}>
                    {module.id === 'module-1' ? (
                      <Module1Content />
                    ) : (
                      <>
                        <p className={styles.description}>
                          This module covers {module.topics ? module.topics.join(', ') : 'essential PM frameworks'}. 
                          Mastering these concepts is crucial for building a strong product sense and executing effectively with cross-functional teams.
                        </p>
                        
                        <div className={styles.imagePlaceholder}>
                          <div className={styles.placeholderIcon}>🖼️</div>
                          <span>{module.title} Visual Reference</span>
                        </div>

                        <a href="#drive-link" className={styles.driveButton}>
                          View details on Drive
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlowchartModule;
