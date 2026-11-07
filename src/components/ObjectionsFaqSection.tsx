import React, { useState } from 'react';
import { FAQ_ITEMS, DOCTOR_INFO } from '../data/doctorData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const ObjectionsFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(
      'Olá! Tenho uma dúvida sobre os procedimentos do Dr. Bruno Monte e gostaria de orientação.'
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full">
            <HelpCircle className="w-4 h-4 text-teal-700" />
            <span>Perguntas Frequentes & Esclarecimentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Dúvidas Comuns Sobre Atendimento e Procedimentos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Informações claras e transparentes para que você se sinta seguro e bem orientado antes da sua consulta.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-slate-50/50 hover:border-teal-500/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-teal-50 border-teal-200 text-teal-800' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 font-serif">Ainda tem alguma dúvida específica?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Nossa secretária está disponível no WhatsApp para esclarecer detalhes sobre agendamentos e convênios.
            </p>
          </div>

          <button
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Equipe</span>
          </button>
        </div>
      </div>
    </section>
  );
};
