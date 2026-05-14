import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
