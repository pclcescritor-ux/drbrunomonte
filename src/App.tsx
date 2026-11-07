import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AuthoritySection } from './components/AuthoritySection';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { InsuranceSection } from './components/InsuranceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationsSection } from './components/LocationsSection';
import { ObjectionsFaqSection } from './components/ObjectionsFaqSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-700 selection:text-white">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <AuthoritySection />
        <ServicesSection />
        <BenefitsSection />
        <InsuranceSection />
        <TestimonialsSection />
        <LocationsSection />
        <ObjectionsFaqSection />
        <BookingSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
