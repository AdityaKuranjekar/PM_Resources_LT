import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export const metadata = { title: 'Case Studies | PM Resources' };

export default function CaseStudiesPage() {
  return (
    <main>
      <Navbar />
      <ComingSoon title="Case Studies" />
    </main>
  );
}
