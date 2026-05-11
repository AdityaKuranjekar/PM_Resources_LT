"use client";
import React, { useState } from 'react';
import styles from './MindmapAccordion.module.css';
import { modulesData } from '../../data/modules';
import VideoModal from '../VideoModal/VideoModal';

const MindmapAccordion = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className={styles.accordionContainer}>
      {modulesData.map((phaseData, phaseIndex) => (
        <div key={phaseIndex} className={styles.phaseSection}>
          <div className={styles.phaseHeader}>
            <h2 className={styles.phaseTitle}>{phaseData.phase}</h2>
            <p className={styles.phaseSubtitle}>{phaseData.subtitle}</p>
          </div>

          <div className={styles.modulesList}>
            {phaseData.modules.map((module) => {
              const isExpanded = expandedId === module.id;

              return (
                <div key={module.id} className={styles.moduleCard}>
                  <div 
                    className={styles.moduleHeader}
                    onClick={() => toggleAccordion(module.id)}
                  >
                    <div className={styles.moduleTitleContainer}>
                      <h3 className={styles.moduleTitle}>{module.title}</h3>
                      <p className={styles.moduleFocus}>{module.focus}</p>
                    </div>
                    <div className={`${styles.expandIcon} ${isExpanded ? styles.expanded : ''}`}>
                      +
                    </div>
                  </div>

                  <div className={`${styles.moduleContent} ${isExpanded ? styles.expanded : ''}`}>
                    <div className={styles.contentInner}>
                      
                      <div className={styles.infoSection}>
                        <h4>Key Topics</h4>
                        <div className={styles.badgeList}>
                          {module.topics.map((topic, i) => (
                            <span key={i} className={styles.badge}>{topic}</span>
                          ))}
                        </div>

                        <h4>Key Outcomes</h4>
                        <ul className={styles.outcomeList}>
                          {module.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                          ))}
                        </ul>

                        <h4>Tools</h4>
                        <div className={styles.badgeList}>
                          {module.tools.map((tool, i) => (
                            <span key={i} className={styles.badge}>{tool}</span>
                          ))}
                        </div>

                        <h4>Deliverable</h4>
                        <div className={styles.deliverableBox}>
                          {module.deliverable}
                        </div>
                      </div>

                      <div className={styles.videoSection}>
                        <VideoModal videoUrl={module.videoUrl} title={module.title} />
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MindmapAccordion;
