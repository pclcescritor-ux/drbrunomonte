import React, { useState } from 'react';
import { DOCTOR_INFO, INSURANCE_LIST } from '../data/doctorData';
import {
  Calendar,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('Hérnia de Disco / Dor na Coluna');
  const [selectedInsurance, setSelectedInsurance] = useState('Bradesco Saúde');
  const [preferredShift, setPreferredShift] = useState('Manhã (08h às 12h)');

  const handleStartBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = patientName ? `Olá! Meu nome é ${patientName}.` : 'Olá!';
    const message = `${greeting} Gostaria de agendar uma consulta com o Dr. Bruno Monte no Diamond Center.
• Motivo / Queixa: ${selectedIssue}
• Convênio ou Particular: ${selectedInsurance}
• Turno preferido: ${preferredShift}
Vim pelo site oficial do Dr. Bruno Monte.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-[#102238] to-[#0d1b2d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/20 border border-teal-400/30 rounded-full text-xs font-semibold text-teal-300">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Agendamento Direto & Ágil</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight text-white">
              Recupere a Sua Liberdade de Movimento com Especialista
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Não conviva com a dor ou com a incerteza de um diagnóstico. Agende sua consulta no Edifício Diamond Center,
              com atendimento pontual, acolhimento humanizado e soluções minimamente invasivas.
            </p>

            {/* Checklist of assurances */}
            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Atendimento presencial no Edifício Diamond Center (Torre Medical)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Confirmação rápida de horário direto pelo WhatsApp da recepção</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Aceita mais de 19 convênios médicos e modalidade particular</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Estacionamento com vagas acessíveis e consultório 100% adaptado</span>
              </div>
            </div>

            {/* Direct contact summary */}
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-teal-400 shrink-0" />
              <div>
                <div className="font-bold text-white">Horário da Recepção:</div>
                <div>Segunda a sexta das 08h às 18h · Sábado das 08h às 12h</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                Pré-Agendamento Inteligente
              </span>
              <h3 className="text-2xl font-bold font-serif text-slate-900">
                Escolha o Motivo da Sua Consulta
              </h3>
              <p className="text-xs text-slate-500">
                Preencha os campos abaixo para que nossa secretária já receba sua solicitação formatada.
              </p>
            </div>

            <form onSubmit={handleStartBooking} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="Como prefere ser chamado(a)?"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Queixa Principal / Motivo da Consulta *
                </label>
                <select
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white font-medium"
                >
                  <option value="Hérnia de Disco / Dor na Coluna">Cirurgia de Coluna / Endoscopia de Coluna</option>
                  <option value="Oncologia Ortopédica / Biópsia / Tumor Ósseo">Oncologia Ortopédica / Biópsia / Tumor Ósseo</option>
                  <option value="Tratamento da Dor Crônica / Bloqueio / Radiofrequência">Tratamento da Dor Crônica / Bloqueio / Radiofrequência</option>
                  <option value="Artrose de Joelho / Quadril / Ombro (Prótese)">Artrose de Joelho / Quadril / Ombro (Prótese)</option>
                  <option value="Traumatologia Geral / Fraturas">Traumatologia Geral / Fraturas</option>
                  <option value="Consulta Ortopédica Geral de Avaliação">Consulta Ortopédica Geral de Avaliação</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Convênio ou Particular *
                  </label>
                  <select
                    value={selectedInsurance}
                    onChange={(e) => setSelectedInsurance(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-xs sm:text-sm font-medium"
                  >
                    {INSURANCE_LIST.map((ins, i) => (
                      <option key={i} value={ins}>
                        {ins}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Turno Preferido
                  </label>
                  <select
                    value={preferredShift}
                    onChange={(e) => setPreferredShift(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-xs sm:text-sm font-medium"
                  >
                    <option value="Manhã (08h às 12h)">Manhã (08h às 12h)</option>
                    <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
                    <option value="Sábado (08h às 12h)">Sábado (08h às 12h)</option>
                    <option value="Primeiro horário disponível">Primeiro horário disponível</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl font-black text-sm tracking-wide shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 uppercase"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>AGENDAR NO WHATSAPP COM ESTES DADOS</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                <span>Canal oficial seguro direto com a equipe médica: (86) 98820-1011</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
