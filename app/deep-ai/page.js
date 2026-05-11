import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FlowchartModule from '../../components/FlowchartModule/FlowchartModule';
import { modulesData } from '../../data/modules';

export const metadata = { title: 'Deep AI | PM Resources' };

export default function DeepAIPage() {
  const phaseData = modulesData[2]; // Phase 3

  return (
    <main>
      <Navbar />
      <div style={{ padding: '2rem 4rem', textAlign: 'center', marginTop: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{phaseData.phase}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>{phaseData.subtitle}</p>
      </div>
      <FlowchartModule data={phaseData.modules} />
    </main>
  );
}
