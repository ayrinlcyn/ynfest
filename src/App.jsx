import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Intro from './components/Intro';
import Alur from './components/Alur';
import WhyUs from './components/WhyUs';
import Programs from './components/Programs';
import Campus from './components/Campus';
import StudentLife from './components/StudentLife';
import Routine from './components/Routine';
import Matcher from './components/Matcher';
import Requirements from './components/Requirements';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <Stats />
      <Intro />
      <Alur />
      <WhyUs />
      <Programs />
      <Campus />
      <StudentLife />
      <Routine />
      <Matcher />
      <Requirements />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}