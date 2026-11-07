import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  Navigation,
  Accessibility,
  ArrowUp,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer: Main Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Doctor Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="text-xl font-bold text-white font-serif tracking-tight">
                {DOCTOR_INFO.fullName}
              </span>
              <div className="text-xs text-teal-400 font-semibold uppercase tracking-wider">
                {DOCTOR_INFO.title}
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Especialista em cirurgia de coluna minimamente invasiva (endoscopia), tratamento intervencionista da
              dor e cirurgia oncológica ortopédica em Teresina - PI. Formado no Conjunto Hospitalar do Mandaqui e
              A.C. Camargo Cancer Center (SP).
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                CRM-PI: 5809
              </span>
              <span className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded text-slate-300 font-mono text-[11px]">
                RQE: 4109
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              Navegação
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#coluna-endoscopia" className="hover:text-white transition-colors">
                  Endoscopia de Coluna
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre o Dr. Bruno
                </a>
              </li>
              <li>
                <a href="#convenios" className="hover:text-white transition-colors">
                  Convênios Médicos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos Reais
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Como Chegar
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Address & Accessibility (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              Consultório Principal
            </div>
            <div className="space-y-2 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{DOCTOR_INFO.primaryAddress.building}</div>
                  <div>{DOCTOR_INFO.primaryAddress.rooms}</div>
                  <div>{DOCTOR_INFO.primaryAddress.street}</div>
                  <div>{DOCTOR_INFO.primaryAddress.neighborhood} · {DOCTOR_INFO.primaryAddress.city} - {DOCTOR_INFO.primaryAddress.state}</div>
                  <div className="text-[11px] text-slate-500">CEP: {DOCTOR_INFO.primaryAddress.zip}</div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-emerald-400 text-[11px]">
                <Accessibility className="w-4 h-4 shrink-0" />
                <span>Rampa, elevador e banheiro adaptado PCD</span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              Contato & Horários
            </div>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${DOCTOR_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-sm">{DOCTOR_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div>{DOCTOR_INFO.workingHours.weekdays}</div>
                  <div>{DOCTOR_INFO.workingHours.saturday}</div>
                  <div className="text-slate-500">{DOCTOR_INFO.workingHours.sunday}</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={DOCTOR_INFO.primaryAddress.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 rounded-lg text-[11px] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-teal-400" />
                  <span>Traçar rota no Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar: Partner Hospitals */}
      <div className="border-t border-slate-900 bg-black/30 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            <strong className="text-slate-300">Outros locais de atuação médica em Teresina:</strong> Hospital São Marcos e Oncoclínica (Edifício Prime).
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal & Regulatory Bottom Bar */}
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            Informações em estrita conformidade com o Código de Ética Médica e a Resolução CFM nº 2.336/2023 do Conselho
            Federal de Medicina. O conteúdo disponibilizado neste site possui caráter exclusivamente informativo e
            educativo, não devendo ser utilizado como autoavaliação ou substituto da consulta médica individualizada.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-900 text-slate-500">
            <div>
              © {new Date().getFullYear()} Dr. Bruno Soares Monte (CRM-PI 5809 · RQE 4109). Todos os direitos reservados.
            </div>
            <div>
              Privacidade em conformidade com a LGPD (Lei Geral de Proteção de Dados - Lei nº 13.709/2018).
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
