import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

export const metadata = { title: 'Blogs | PM Resources' };

export default function BlogsPage() {
  return (
    <main>
      <Navbar />
      <ComingSoon title="Blogs" />
    </main>
  );
}
