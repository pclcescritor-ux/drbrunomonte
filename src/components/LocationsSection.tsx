import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Accessibility,
  CheckCircle2,
  Navigation,
  Building,
  Hospital,
} from 'lucide-react';

export const LocationsSection: React.FC = () => {
  const handleOpenRoute = () => {
    window.open(DOCTOR_INFO.primaryAddress.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de saber como chegar ao consultório do Dr. Bruno Monte no Diamond Center.'
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 border border-teal-200 px-3.5 py-1.5 rounded-full">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>Consultório & Hospitais Parceiros</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Localização Privilegiada com Acessibilidade Total em Teresina
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Instalações confortáveis no Bairro Fátima com infraestrutura planejada para receber você e sua família
            com total comodidade e segurança.
          </p>
        </div>

        {/* Primary Clinic Card & Google Maps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Details: 6 Cols */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md border border-teal-200">
                  Consultório Principal
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {DOCTOR_INFO.primaryAddress.building}
                </h3>
                <div className="text-sm font-semibold text-slate-700">
                  {DOCTOR_INFO.primaryAddress.rooms}
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5 text-sm text-slate-600 leading-relaxed">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">{DOCTOR_INFO.primaryAddress.street}</div>
                  <div>{DOCTOR_INFO.primaryAddress.neighborhood} · {DOCTOR_INFO.primaryAddress.city} - {DOCTOR_INFO.primaryAddress.state}</div>
                  <div className="text-xs text-slate-500">CEP: {DOCTOR_INFO.primaryAddress.zip}</div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 text-sm text-slate-600 border-t border-slate-100 pt-5">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 text-xs uppercase tracking-wide">
                    Horários de Atendimento:
                  </div>
                  <div className="text-xs sm:text-sm">{DOCTOR_INFO.workingHours.weekdays}</div>
                  <div className="text-xs sm:text-sm">{DOCTOR_INFO.workingHours.saturday}</div>
                  <div className="text-xs text-slate-400">{DOCTOR_INFO.workingHours.sunday}</div>
                </div>
              </div>

              {/* Accessibility Checklist */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-900">
                  <Accessibility className="w-4 h-4 text-teal-700" />
                  <span>Acessibilidade Plena para Cadeirantes e Idosos:</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  {DOCTOR_INFO.primaryAddress.accessibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOpenRoute}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-400" />
                <span>ABRIR ROTA NO GOOGLE MAPS</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Falar com a Recepção</span>
              </button>
            </div>
          </div>

          {/* Right: Embedded Google Maps (6 Cols) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 min-h-[400px] lg:min-h-full relative flex flex-col">
            <iframe
              title="Localização do Consultório do Dr. Bruno Monte no Diamond Center Teresina"
              src="https://maps.google.com/maps?q=Avenida+Universitaria+750+Diamond+Center+Teresina+PI&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Quick Map Floating Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl p-3 shadow-md text-xs pointer-events-none max-w-xs">
              <div className="font-bold text-slate-900">Edifício Diamond Center</div>
              <div className="text-slate-500 text-[11px]">Avenida Universitária, 750 · Bairro Fátima</div>
            </div>
          </div>
        </div>

        {/* Other Medical Locations in Teresina */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-4">
            <Hospital className="w-4 h-4 text-teal-700" />
            <span>Outros Locais de Atuação Médica em Teresina</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DOCTOR_INFO.otherLocations.map((loc, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">{loc.name}</h4>
                  <p className="text-xs text-slate-600">{loc.description}</p>
                  <span className="inline-block text-[11px] font-semibold text-teal-800">
                    {loc.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
