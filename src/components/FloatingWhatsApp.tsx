import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá, equipe do Dr. Bruno Monte! Encontrei o site e gostaria de agendar uma consulta.'
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Pop-up bubble helper on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="flex-1">
            <span className="font-bold text-slate-900 block font-serif">Dúvidas ou Agendamento?</span>
            <span className="text-slate-600 text-[11px]">Fale diretamente com nossa recepção</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Abrir conversa no WhatsApp com Dr. Bruno Monte"
      >
        {/* Subtle Pulse Animation Ring */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 group-hover:opacity-0"
          aria-hidden="true"
        />

        <MessageCircle className="w-7 h-7 text-slate-950 fill-current relative z-10" />

        {/* Live Status indicator */}
        <span
          className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full"
          title="Online"
        />
      </button>
    </div>
  );
};
