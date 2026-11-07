import React from 'react';
import { BENEFITS_LIST } from '../data/doctorData';
import {
  Activity,
  Award,
  Crosshair,
  Accessibility,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-teal-700" />;
      case 'Award':
        return <Award className="w-6 h-6 text-teal-700" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-teal-700" />;
      case 'Accessibility':
        return <Accessibility className="w-6 h-6 text-teal-700" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-700" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-teal-700" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full">
            <span>Diferenciais e Benefícios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Por Que Escolher o Atendimento do Dr. Bruno Monte?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Ganhos práticos e emocionais em cada etapa: da precisão cirúrgica de última geração ao conforto e
            respeito à sua mobilidade.
          </p>
        </div>

        {/* Benefits Grid - 6 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_LIST.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-teal-500/40 hover:bg-white hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100/70 border border-teal-200 flex items-center justify-center">
                  {getBenefitIcon(benefit.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-sans">
                  {benefit.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/50 flex items-center gap-2 text-xs font-semibold text-teal-800">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                <span>Padrão de Excelência em Teresina</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
