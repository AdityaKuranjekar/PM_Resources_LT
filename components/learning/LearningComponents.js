"use client";
import React, { useState } from 'react';
import s from '../FlowchartModule/Module1Content.module.css';

export const Section = ({ label, children }) => (
  <div className={s.section}>
    <span className={s.sectionLabel}>{label}</span>
    {children}
  </div>
);

export const MindmapGrid = ({ children }) => (
  <div className={s.mindmapGrid}>{children}</div>
);

export const MindmapNode = ({ title, items = [], defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  const parsedItems = typeof items === 'string' ? JSON.parse(items) : items;
  return (
    <div className={`${s.mindmapNode} ${open ? s.nodeOpen : ''}`}>
      <button className={s.nodeToggle} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={s.nodeIndicator}>{open ? '−' : '+'}</span>
        <span className={s.nodeTitle}>{title}</span>
      </button>
      {open && (
        <ul className={s.nodeItems}>
          {parsedItems.map((item, i) => (
            <li key={i} className={s.nodeItem}>
              <span className={s.dot} />
              {typeof item === 'object' ? (
                <span>{item.text} {item.note && <span className={s.itemNote}>{item.note}</span>}</span>
              ) : item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Badge = ({ variant = 'default', children }) => (
  <span className={`${s.badge} ${s[variant]}`}>{children}</span>
);

export const FlowStep = ({ steps = [] }) => {
  const parsedSteps = typeof steps === 'string' ? JSON.parse(steps) : steps;
  return (
    <div className={s.flowColumn}>
      {parsedSteps.map((step, i) => (
        <React.Fragment key={i}>
          <div className={s.flowStep}>
            <div className={s.flowStepInner}>
              <span className={s.flowStepTitle}>{step.title}</span>
              {step.sub && <span className={s.flowStepSub}>{step.sub}</span>}
            </div>
          </div>
          {i < parsedSteps.length - 1 && <div className={s.flowArrow}>↓</div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export const FlowWrapper = ({ children }) => (
  <div className={s.flowWrapper}>{children}</div>
);

export const Insight = ({ type, text }) => {
  const labels = {
    insight: 'PM Insight',
    tradeoff: 'Tradeoff',
    reality: 'Reality Check',
    mistake: 'Common Mistake',
  };
  return (
    <div className={`${s.insight} ${s[`insight_${type}`]}`}>
      <span className={s.insightLabel}>{labels[type]}</span>
      <p className={s.insightText}>{text}</p>
    </div>
  );
};

export const TripleIntersect = ({ left, center, right }) => (
  <div className={s.tripleIntersect}>
    <div className={s.intersectPill}>{left}</div>
    <div className={s.intersectCenter}>
      <span className={s.intersectX}>×</span>
    </div>
    <div className={s.intersectPill}>{center}</div>
    <div className={s.intersectCenter}>
      <span className={s.intersectX}>×</span>
    </div>
    <div className={s.intersectPill}>{right}</div>
  </div>
);

export const CoreGoalRow = ({ goals = [] }) => {
  const parsedGoals = typeof goals === 'string' ? JSON.parse(goals) : goals;
  return (
    <div className={s.coreGoalRow}>
      {parsedGoals.map((goal, i) => (
        <div key={i} className={s.coreGoalItem}>
          <span className={s.goalArrow}>→</span>
          <span>{goal}</span>
        </div>
      ))}
    </div>
  );
};

export const CompareGrid = ({ left = { title: '', items: [] }, right = { title: '', items: [] } }) => {
  const parsedLeft = typeof left === 'string' ? JSON.parse(left) : left;
  const parsedRight = typeof right === 'string' ? JSON.parse(right) : right;
  return (
    <div className={s.compareGrid}>
      <div className={s.compareCol}>
        <div className={s.compareHeader}>
          <Badge variant="accent">{parsedLeft.title}</Badge>
        </div>
        <ul className={s.compareList}>
          {parsedLeft.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
      <div className={s.compareDivider} />
      <div className={s.compareCol}>
        <div className={s.compareHeader}>
          <Badge variant="muted">{parsedRight.title}</Badge>
        </div>
        <ul className={s.compareList}>
          {parsedRight.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ReferenceCard = ({ title, sub, note, link, linkText = 'Read →' }) => (
  <div className={s.referenceCard}>
    <div className={s.referenceLeft}>
      <span className={s.referenceTitle}>{title}</span>
      <span className={s.referenceSub}>{sub}</span>
      <p className={s.referenceNote}>{note}</p>
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className={s.referenceLink}>
      {linkText}
    </a>
  </div>
);

export const DriveButton = ({ link }) => (
  <div className={s.driveRow}>
    <a href={link} target="_blank" rel="noopener noreferrer" className={s.driveButton}>
      View Details On Drive
    </a>
  </div>
);
