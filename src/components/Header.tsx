import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Especialidades', href: '#servicos' },
    { label: 'Cirurgia da Coluna', href: '#coluna-endoscopia' },
    { label: 'Sobre o Médico', href: '#sobre' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Olá, equipe do Dr. Bruno Monte! Gostaria de agendar uma consulta ortopédica.'
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">

      {/* Main navigation - Top Bar 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark (Single clean element) */}
        <a href="#" className="flex flex-col group shrink-0">
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors font-serif leading-tight">
            {DOCTOR_INFO.shortName}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-teal-800 font-semibold font-sans">
            Ortopedia · Coluna · Oncologia
          </span>
        </a>

        {/* Zone 2: Desktop Nav Links (Visible on lg and above) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-800 transition-colors whitespace-nowrap shrink-0 py-1 hover:border-b-2 hover:border-teal-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions for Desktop & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick WhatsApp button */}
          <button
            onClick={handleWhatsAppClick}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs transition-all transform active:scale-95 whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4" />
            <span>AGENDAR CONSULTA</span>
          </button>

          {/* Quick Call icon on small screens */}
          <button
            onClick={handleWhatsAppClick}
            className="sm:hidden p-2.5 text-white bg-teal-700 hover:bg-teal-800 rounded-xl shadow-xs min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            aria-label="Falar no WhatsApp"
            title="Agendar pelo WhatsApp"
          >
            <Phone className="w-5 h-5" />
          </button>

          {/* Hamburger Menu Button (Three lines / três tracinhos) - Visible on all screens < lg */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/90 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação (três tracinhos)'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer (Visible on all screens < lg when toggled) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop dimming layer */}
          <div
            className="fixed inset-0 top-20 bg-slate-950/40 backdrop-blur-xs z-30 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="relative z-40 lg:hidden bg-white border-b border-slate-200 px-5 pt-4 pb-7 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-teal-700 hover:bg-teal-50/50 px-3 py-3 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsAppClick();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>AGENDAR NO WHATSAPP</span>
                </button>

                <div className="text-center text-xs text-slate-500 pt-1">
                  Avenida Universitária, 750 · Diamond Center · Salas 1307 e 1308
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
