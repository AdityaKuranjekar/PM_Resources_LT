"use client";
import React, { useState } from 'react';
import s from './Module1Content.module.css';

const Section = ({ label, children }) => (
  <div className={s.section}>
    <span className={s.sectionLabel}>{label}</span>
    {children}
  </div>
);

const MindmapNode = ({ title, items, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${s.mindmapNode} ${open ? s.nodeOpen : ''}`}>
      <button className={s.nodeToggle} onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className={s.nodeIndicator}>{open ? '−' : '+'}</span>
        <span className={s.nodeTitle}>{title}</span>
      </button>
      {open && (
        <ul className={s.nodeItems}>
          {items.map((item, i) => (
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

const Badge = ({ variant = 'default', children }) => (
  <span className={`${s.badge} ${s[variant]}`}>{children}</span>
);

const FlowStep = ({ steps }) => (
  <div className={s.flowColumn}>
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className={s.flowStep}>
          <div className={s.flowStepInner}>
            <span className={s.flowStepTitle}>{step.title}</span>
            {step.sub && <span className={s.flowStepSub}>{step.sub}</span>}
          </div>
        </div>
        {i < steps.length - 1 && <div className={s.flowArrow}>↓</div>}
      </React.Fragment>
    ))}
  </div>
);

const Insight = ({ type, text }) => {
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

const Module1Content = () => {
  return (
    <div className={s.root}>

      {/* ── Section 1: What is PM ── */}
      <Section label="01 — DEFINITION">
        <h3 className={s.sectionTitle}>What is Product Management?</h3>
        <p className={s.sectionSub}>
          PM sits at the intersection of three disciplines — not as a coordinator, but as the person accountable for the outcome.
        </p>

        <div className={s.tripleIntersect}>
          <div className={s.intersectPill}>Business</div>
          <div className={s.intersectCenter}>
            <span className={s.intersectX}>×</span>
          </div>
          <div className={s.intersectPill}>Technology</div>
          <div className={s.intersectCenter}>
            <span className={s.intersectX}>×</span>
          </div>
          <div className={s.intersectPill}>User Experience</div>
        </div>

        <div className={s.coreGoalRow}>
          <div className={s.coreGoalItem}>
            <span className={s.goalArrow}>→</span>
            <span>Identify real user problems</span>
          </div>
          <div className={s.coreGoalItem}>
            <span className={s.goalArrow}>→</span>
            <span>Decide what to build and why</span>
          </div>
          <div className={s.coreGoalItem}>
            <span className={s.goalArrow}>→</span>
            <span>Drive measurable business outcomes</span>
          </div>
        </div>

        <Insight type="insight" text="The PM's job is not to have all the answers. It's to ask the right questions before anyone starts building." />
      </Section>

      {/* ── Section 2: Core Responsibilities ── */}
      <Section label="02 — RESPONSIBILITIES">
        <h3 className={s.sectionTitle}>What PMs Actually Do</h3>
        <p className={s.sectionSub}>
          The role is broad, ambiguous, and context-dependent. These are the five consistent pillars across companies and product stages.
        </p>

        <div className={s.mindmapGrid}>
          <MindmapNode defaultOpen title="Vision & Strategy" items={[
            { text: 'Define a clear product direction', note: '— not a feature list' },
            'Maintain and communicate the roadmap',
            'Make long-term bets with incomplete information',
            'Align the team on the "why" before the "what"',
          ]} />
          <MindmapNode title="Customer Understanding" items={[
            'Run structured user interviews',
            'Map behavior, not just opinion',
            'Distinguish pain points from preferences',
            { text: 'Build and maintain user empathy', note: '— continuously, not once' },
          ]} />
          <MindmapNode title="Cross-Functional Leadership" items={[
            'Work with engineers without dictating',
            'Partner with design to protect UX quality',
            'Equip marketing and sales with context',
            'Manage stakeholder expectations proactively',
          ]} />
          <MindmapNode title="Data-Driven Decisions" items={[
            'Define metrics that reflect real value',
            'Read funnels for drop-off and friction signals',
            'Use retention data to judge product health',
            'Run experiments, but respect sample size',
          ]} />
          <MindmapNode title="Execution & Iteration" items={[
            'Write clear specs and acceptance criteria',
            'Remove blockers before they become delays',
            'Ship, observe, and adjust — repeatedly',
            { text: 'Treat each launch as a learning event', note: '— not a finish line' },
          ]} />
        </div>
      </Section>

      {/* ── Section 3: PM Lifecycle ── */}
      <Section label="03 — WORKFLOW">
        <h3 className={s.sectionTitle}>The Product Thinking Loop</h3>
        <p className={s.sectionSub}>
          PM work is not linear. This loop is how great product teams continuously close the gap between user problems and shipped solutions.
        </p>

        <div className={s.flowWrapper}>
          <FlowStep steps={[
            { title: 'Problem Discovery', sub: 'Research · Interviews · Signal collection' },
            { title: 'Insight & Framing', sub: 'Define the real problem worth solving' },
            { title: 'Prioritization', sub: 'RICE · MoSCoW · Opportunity sizing' },
            { title: 'Execution', sub: 'Specs · Engineering · Design reviews' },
            { title: 'Launch & Measure', sub: 'Metrics · Funnels · Retention signals' },
            { title: 'Iterate', sub: 'Learn fast · Adjust · Repeat' },
          ]} />
        </div>

        <Insight type="tradeoff" text="Speed vs. quality is rarely the right tradeoff. The real tradeoff is between solving the right problem slowly and solving the wrong one fast." />
      </Section>

      {/* ── Section 4: Product vs Project ── */}
      <Section label="04 — ROLE CLARITY">
        <h3 className={s.sectionTitle}>Product Manager vs. Project Manager</h3>
        <p className={s.sectionSub}>
          Often confused, rarely interchangeable. The difference is not hierarchy — it's orientation.
        </p>

        <div className={s.compareGrid}>
          <div className={s.compareCol}>
            <div className={s.compareHeader}>
              <Badge variant="accent">Product Manager</Badge>
            </div>
            <ul className={s.compareList}>
              <li>Owns the <em>why</em> and <em>what</em></li>
              <li>Defines problems, not just tasks</li>
              <li>Accountable for outcomes, not outputs</li>
              <li>Works backward from user value</li>
              <li>Comfortable with ambiguity</li>
            </ul>
          </div>
          <div className={s.compareDivider} />
          <div className={s.compareCol}>
            <div className={s.compareHeader}>
              <Badge variant="muted">Project Manager</Badge>
            </div>
            <ul className={s.compareList}>
              <li>Owns the <em>how</em> and <em>when</em></li>
              <li>Coordinates execution across teams</li>
              <li>Accountable for timelines and delivery</li>
              <li>Manages dependencies and risk</li>
              <li>Keeps processes running smoothly</li>
            </ul>
          </div>
        </div>

        <Insight type="reality" text="In early-stage startups, one person often does both. In large orgs, confusing the two roles leads to shipping fast without shipping right." />
      </Section>

      {/* ── Section 5: PM Mindset ── */}
      <Section label="05 — MINDSET">
        <h3 className={s.sectionTitle}>How Good PMs Think</h3>
        <p className={s.sectionSub}>
          Product sense is not a skill you can acquire from frameworks. It develops through observation, judgment, and repeated iteration.
        </p>

        <div className={s.mindmapGrid}>
          <MindmapNode defaultOpen title="First-Principles Thinking" items={[
            'Break problems down to fundamental truths',
            'Avoid reasoning by analogy alone',
            'Question why things are done a certain way',
          ]} />
          <MindmapNode title="Outcome Orientation" items={[
            'Measure success by user impact, not ship count',
            'Resist the pull of the feature factory',
            'Define done as "user problem solved"',
          ]} />
          <MindmapNode title="Structured Curiosity" items={[
            'Ask questions before jumping to solutions',
            'Build hypotheses, then test them cheaply',
            'Be wrong early and often — on purpose',
          ]} />
        </div>

        <Insight type="mistake" text="Most PMs prioritize what's requested over what's needed. Stakeholder asks are inputs, not requirements." />
      </Section>

      {/* ── Agile Reference ── */}
      <Section label="06 — FOUNDATIONAL READING">
        <div className={s.referenceCard}>
          <div className={s.referenceLeft}>
            <span className={s.referenceTitle}>The Agile Manifesto</span>
            <span className={s.referenceSub}>4 values · 12 principles · Written in 2001, still relevant.</span>
            <p className={s.referenceNote}>
              The document that reoriented software development from heavy process to people and iteration. PMs working in any Agile environment should know what it actually says — not just the buzzwords.
            </p>
          </div>
          <a
            href="https://agilemanifesto.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.referenceLink}
          >
            Read →
          </a>
        </div>
      </Section>

      {/* ── Drive Button ── */}
      <div className={s.driveRow}>
        <a
          href="https://docs.google.com/document/d/1xSjcvgAKQd-eZiQcOzolK-wPKTzWIXRkWb98fTNNenM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={s.driveButton}
        >
          View Details On Drive
        </a>
      </div>

    </div>
  );
};

export default Module1Content;
