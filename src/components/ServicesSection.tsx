import React, { useState } from 'react';
import { SERVICES_LIST, ServiceItem, DOCTOR_INFO } from '../data/doctorData';
import {
  Activity,
  Award,
  Crosshair,
  Shield,
  Layers,
  ChevronRight,
  Clock,
  Sparkles,
  CheckCircle2,
  X,
  MessageCircle,
  HelpCircle,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleConsultService = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Dr. Bruno Monte! Gostaria de agendar uma consulta sobre ${serviceTitle}. Vim através do site oficial.`
    );
    window.open(`https://wa.me/${DOCTOR_INFO.phoneClean}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'coluna-endoscopia':
        return <Activity className="w-6 h-6 text-teal-600" />;
      case 'oncologia-ortopedica':
        return <Award className="w-6 h-6 text-teal-600" />;
      case 'tratamento-dor-cronica':
        return <Crosshair className="w-6 h-6 text-teal-600" />;
      case 'artrose-desgaste':
        return <Shield className="w-6 h-6 text-teal-600" />;
      default:
        return <Layers className="w-6 h-6 text-teal-600" />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/70 border border-teal-200 px-3.5 py-1.5 rounded-full">
            <span>Especialidades e Tratamentos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Cuidados Médicos de Alta Precisão em Ortopedia
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Diagnóstico minucioso e procedimentos cirúrgicos modernos desenhados para aliviar o sofrimento,
            restabelecer a função articular e devolver a sua independência.
          </p>
        </div>

        {/* Flagship Highlight: Cirurgia Endoscópica de Coluna */}
        {SERVICES_LIST.filter((s) => s.isFlagship).map((flagship) => (
          <div
            id="coluna-endoscopia"
            key={flagship.id}
            className="mb-14 bg-gradient-to-br from-slate-900 via-[#132c48] to-[#0e2035] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-white/10"
          >
            <div
              className="absolute -right-20 -top-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-md">
                    Procedimento Carro-Chefe
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-teal-200 text-xs font-semibold rounded-md border border-white/15">
                    Endoscopia de Coluna
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white leading-tight">
                  {flagship.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {flagship.shortDescription}
                </p>

                {/* Micro-metrics list */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                    <div className="text-xl font-extrabold text-emerald-400 font-serif tabular-nums">1 cm</div>
                    <div className="text-xs text-slate-300">Incisão milimétrica precisa</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                    <div className="text-xl font-extrabold text-teal-300 font-serif">Mesmo Dia</div>
                    <div className="text-xs text-slate-300">Alta hospitalar precoce</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-3">
                    <div className="text-xl font-extrabold text-white font-serif">Preservação</div>
                    <div className="text-xs text-slate-300">Músculos e ligamentos intactos</div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleConsultService(flagship.title)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold rounded-xl text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>CONSULTAR SOBRE ENDOSCOPIA</span>
                  </button>

                  <button
                    onClick={() => setActiveModalService(flagship)}
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-sm border border-white/20 transition-all"
                  >
                    <span>Ver Detalhes do Procedimento</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Key indications & benefits checklist */}
              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4">
                <div className="text-sm font-bold uppercase tracking-wider text-teal-300 font-sans">
                  Quando a Endoscopia é Recomendada:
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  {flagship.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                  Também abrange tratamento avançado para <strong className="text-slate-200">fraturas vertebrais</strong> e{' '}
                  <strong className="text-slate-200">artrodese</strong> quando clinicamente indicada.
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 4 Additional Specialty Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_LIST.filter((s) => !s.isFlagship).map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-8 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="p-3 bg-teal-50 border border-teal-100 rounded-2xl group-hover:bg-teal-700 group-hover:text-white transition-colors duration-200">
                    {getServiceIcon(service.id)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-teal-100/70 text-teal-900 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif mt-1">
                    {service.title}
                  </h4>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                    Principais Indicações:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.indications.slice(0, 3).map((ind, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Saiba Mais</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleConsultService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-teal-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Agendar Consulta</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Real Clinical Showcase: Image-Guided Pain Management & Ultrasound */}
        <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Real Photo of Dr. Bruno Performing Ultrasound Procedure */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-[3/4] max-h-[440px] bg-slate-900 group">
                <img
                  src="/assets/dr_bruno_ultrasound.jpg"
                  alt="Dr. Bruno Soares Monte realizando procedimento ortopédico guiado por ultrassom"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-md rounded-xl text-white text-xs border border-white/10">
                  <span className="font-bold block text-sm font-serif">Exame e Bloqueio Guiado por Ultrassom</span>
                  <span className="text-slate-300 text-[11px]">Procedimento minimamente invasivo no consultório</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Explanation & Benefits */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                <Crosshair className="w-3.5 h-3.5 text-teal-700" />
                <span>Medicina Intervencionista em Ação</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif leading-tight">
                Máxima Precisão com Visualização Anatômica em Tempo Real
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Diferente de punções às cegas, os procedimentos intervencionistas do Dr. Bruno Monte contam com
                apoio de <strong className="text-slate-900 font-semibold">ultrassonografia musculoesquelética de alta resolução</strong> e radioscopia.
                Isso possibilita identificar com exatidão a raiz nervosa, tendão ou articulação inflamada,
                depositando a medicação exatamente no foco da dor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Sem cortes e sem necessidade de internação</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Alívio imediato para dores crônicas refratárias</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Capacitação avançada pela Interpain (CE)</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>Preservação de tecidos e retorno imediato</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleConsultService('Tratamento da Dor Guiado por Ultrassom')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>AGENDAR AVALIAÇÃO DE DOR NO WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Full Clinical Details */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  {activeModalService.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
                  {activeModalService.title}
                </h3>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3">
                <p>{activeModalService.fullDescription}</p>
              </div>

              {/* Indications */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Quando Procurar Este Tratamento:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeModalService.indications.map((ind, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Benefícios para o Paciente:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {activeModalService.benefits.map((ben, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery note */}
              <div className="flex items-center gap-3 p-4 bg-teal-50 border border-teal-200 rounded-xl text-xs sm:text-sm text-teal-950">
                <Clock className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <span className="font-bold">Tempo e Recuperação: </span>
                  <span>{activeModalService.recovery}</span>
                </div>
              </div>

              {/* CTA in modal */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    handleConsultService(activeModalService.title);
                    setActiveModalService(null);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta Sobre {activeModalService.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
