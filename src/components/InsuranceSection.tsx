import React, { useState } from 'react';
import { INSURANCE_LIST, DOCTOR_INFO } from '../data/doctorData';
import { Search, ShieldCheck, Check, MessageCircle, HelpCircle } from 'lucide-react';

export const InsuranceSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInsurance = INSURANCE_LIST.filter((ins) =>
    ins.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppInsurance = (planName?: string) => {
    const text = encodeURIComponent(
      `Olá! Gostaria de confirmar o atendimento pelo convênio ${
        planName ? `"${planName}"` : 'médico'
      } para consulta com o Dr. Bruno Monte.`
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="convenios" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 border border-teal-200 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            <span>Cobertura de Planos de Saúde</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Convênios Médicos e Atendimento Particular
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Para garantir acessibilidade e comodidade aos pacientes, o Dr. Bruno Monte atende uma ampla gama de
            operadoras de saúde e oferece consultas particulares com suporte a reembolso.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Digite o nome do seu plano (ex: Bradesco, Cassi, SulAmérica)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent shadow-sm"
              aria-label="Buscar convênio atendido"
            />
          </div>
        </div>

        {/* Insurance Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 mb-12">
          {filteredInsurance.map((ins, index) => {
            const isParticular = ins.includes('Particulares');
            return (
              <div
                key={index}
                onClick={() => handleWhatsAppInsurance(ins)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 select-none ${
                  isParticular
                    ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 bg-gradient-to-r from-teal-900 to-slate-900 text-white border-teal-800 shadow-md'
                    : 'bg-white hover:bg-teal-50/70 border-slate-200 hover:border-teal-300 text-slate-800 shadow-sm hover:shadow'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      isParticular ? 'bg-teal-500 text-slate-950' : 'bg-teal-100 text-teal-800'
                    }`}
                  >
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span
                    className={`text-xs sm:text-sm font-semibold ${
                      isParticular ? 'text-teal-200' : 'text-slate-900'
                    }`}
                  >
                    {ins}
                  </span>
                </div>
                {isParticular && (
                  <span className="hidden sm:inline-block text-xs bg-white/10 px-3 py-1 rounded-md text-slate-200">
                    Recibo emitido para reembolso
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {filteredInsurance.length === 0 && (
          <div className="text-center py-8 text-slate-500 text-sm">
            Nenhum convênio encontrado com esse termo. Mas você pode verificar diretamente com nossa secretária pelo WhatsApp.
          </div>
        )}

        {/* Quick Insurance Help Box */}
        <div className="max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
              <HelpCircle className="w-4 h-4 text-teal-700" />
              <span>Não encontrou seu plano na lista?</span>
            </div>
            <p className="text-xs text-slate-600">
              Nossa equipe verifica sua cobertura ou explica como funciona o recibo médico detalhado para solicitação de reembolso.
            </p>
          </div>

          <button
            onClick={() => handleWhatsAppInsurance(searchTerm || undefined)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs rounded-xl shadow-sm whitespace-nowrap shrink-0 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
