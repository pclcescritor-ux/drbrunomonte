import React, { useState } from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import {
  Calendar,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Sparkles,
  Camera,
  MapPin,
  ChevronRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handleWhatsApp = (service?: string) => {
    const text = encodeURIComponent(
      `Olá, Dr. Bruno Monte! Gostaria de agendar uma consulta ${
        service ? `sobre ${service}` : 'ortopédica'
      }. Vim pelo site.`
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomPhoto(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#102238] to-[#0d1b2d] text-white pt-10 sm:pt-14 pb-16 lg:pb-24">
      {/* Background radial ambient lights for depth */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Trust Marker Ribbon */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-full text-[11px] sm:text-xs font-medium text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>CRM-PI 5809 · RQE 4109</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-[11px] sm:text-xs font-semibold text-teal-300">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>AC Camargo & Mandaqui (SP)</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Diamond Center · Teresina</span>
          </div>
        </div>

        {/* 2-Column Split: Content & Professional Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Content & CTAs): 7 Cols */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.15] font-serif">
              Ortopedista e Cirurgião Oncológico Ortopédico em Teresina - PI
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
              Cuidado especializado pelo <strong className="text-white font-semibold">{DOCTOR_INFO.fullName}</strong>.
              Referência em <strong className="text-white font-semibold">cirurgia de coluna minimamente invasiva por endoscopia</strong> com
              incisão de 1 cm e alta no mesmo dia, alívio preciso de dor crônica e oncologia ortopédica de alta complexidade.
            </p>

            {/* Quick value tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Endoscopia com alta hospitalar no mesmo dia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bloqueios guiados por imagem para dor crônica</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Biópsias e tumores ósseos com formação AC Camargo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atendimento a 19+ convênios e particular</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => handleWhatsApp()}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />
                <span>FALAR NO WHATSAPP</span>
              </button>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all"
              >
                <span>CONHECER TRATAMENTOS</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Proof Google Banner */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <span className="font-bold text-white text-base">4.9</span>
                <span>no Google</span>
                <span className="text-slate-400">({DOCTOR_INFO.googleProof.reviewCount} avaliações reais de pacientes)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Photo Space (id="professional-hero-photo") 5 Cols */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient circle glow behind photo */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl transform scale-95 pointer-events-none"
              aria-hidden="true"
            />

            {/* Reserved container with mandatory id="professional-hero-photo" */}
            <div
              id="professional-hero-photo"
              className="relative w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-white/15 rounded-3xl p-4 sm:p-5 shadow-2xl backdrop-blur-md"
            >
              {/* Doctor Visual Area with Real Portrait */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group shadow-inner">
                <img
                  src={customPhoto || '/assets/dr_bruno_portrait.jpg'}
                  alt="Dr. Bruno Soares Monte - Ortopedista e Cirurgião Oncológico Ortopédico em Teresina - PI"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle dark gradient overlay at bottom for readable badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid Credential Seal on the Photo */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/90 backdrop-blur-md border border-white/15 rounded-xl text-left space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white font-serif">{DOCTOR_INFO.fullName}</span>
                    <span className="text-[10px] bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                      Ativo
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-teal-300">
                    CRM-PI 5809 · RQE 4109
                  </div>
                  <div className="text-[10px] text-slate-300 truncate">
                    Especialista em Coluna & Cirurgia Oncológica Ortopédica
                  </div>
                </div>

                {/* Optional photo change button */}
                <label className="absolute top-3 right-3 p-2 bg-slate-900/80 hover:bg-slate-900 border border-white/20 rounded-lg text-xs text-slate-300 hover:text-white cursor-pointer transition-colors shadow-md flex items-center gap-1.5 backdrop-blur-sm">
                  <Camera className="w-3.5 h-3.5" />
                  <span className="sr-only">Substituir foto</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="sr-only"
                    aria-label="Carregar foto do médico"
                  />
                </label>
              </div>

              {/* Floating Glass Highlight Card 1: Endoscopia */}
              <div className="mt-3.5 p-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Endoscopia de Coluna Minimamente Invasiva</div>
                  <div className="text-slate-300 text-[11px]">Incisão de 1 cm · Alta hospitalar no mesmo dia</div>
                </div>
              </div>

              {/* Floating Glass Highlight Card 2: Consultório e Acessibilidade */}
              <div className="mt-2 p-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl flex items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-white">Diamond Center · Salas 1307 e 1308</div>
                  <div className="text-slate-300 text-[11px]">Torre Medical · Acesso 100% Acessível</div>
                </div>
                <button
                  onClick={() => handleWhatsApp('Diamond Center')}
                  className="px-2.5 py-1 bg-teal-600 hover:bg-teal-500 text-white rounded-lg font-medium text-[11px] whitespace-nowrap"
                >
                  Consultar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Clinical Volume KPI Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif tabular-nums">+9 Anos</div>
            <div className="text-xs sm:text-sm text-slate-400">Atuando na medicina de Teresina</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-serif tabular-nums">+30 Mil</div>
            <div className="text-xs sm:text-sm text-slate-400">Pacientes atendidos e acolhidos</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-serif tabular-nums">+3.000</div>
            <div className="text-xs sm:text-sm text-slate-400">Cirurgias e procedimentos realizados</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-serif tabular-nums">4.9 ★</div>
            <div className="text-xs sm:text-sm text-slate-400">Nota no Google (184 avaliações reais)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
