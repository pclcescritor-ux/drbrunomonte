import React from 'react';
import { DOCTOR_INFO } from '../data/doctorData';
import {
  GraduationCap,
  Award,
  BookOpen,
  ShieldCheck,
  Stethoscope,
  Building2,
  CheckCircle,
} from 'lucide-react';

export const AuthoritySection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full">
            <GraduationCap className="w-4 h-4 text-teal-700" />
            <span>Formação Acadêmica & Credenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Trajetória Cirúrgica e Rigor Técnico a Serviço da Sua Saúde
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            A união entre o aprendizado prático nos mais exigentes polos médicos de São Paulo e o compromisso
            diário com o acolhimento humano em Teresina há mais de 9 anos.
          </p>
        </div>

        {/* Doctor Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left: Professional Visual & Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#102a45] to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-slate-800">
            <div
              className="absolute -right-10 -bottom-10 w-64 h-64 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Embedded Real Clinical Banner / Presentation Card */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-white/15 shadow-md bg-slate-800">
              <img
                src="/assets/dr_bruno_credentials_card.jpg"
                alt="Dr. Bruno Monte - Ortopedia, Traumatologia e Cirurgia Oncológica Ortopédica em Teresina"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-teal-300 font-semibold">
                  Médico Responsável
                </span>
                <h3 className="text-2xl font-bold font-serif text-white">
                  {DOCTOR_INFO.fullName}
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 bg-white/10 rounded-md text-xs font-semibold text-slate-200 border border-white/10">
                    CRM-PI 5809
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-md text-xs font-semibold text-slate-200 border border-white/10">
                    RQE 4109
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-6">
                <p>
                  Com uma carreira construída com base em rigor científico e dedicação ao paciente, o Dr. Bruno Soares Monte
                  é especialista em <strong className="text-white">Ortopedia, Traumatologia e Cirurgia Oncológica Ortopédica</strong>.
                </p>
                <p>
                  Sua prática é pautada em intervenções minimamente invasivas que priorizam a rápida recuperação funcional,
                  o alívio duradouro da dor e a preservação da qualidade de vida de quem confia em seu trabalho.
                </p>
              </div>

              {/* Pillars of Medical Practice */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Decisões clínicas fundamentadas em evidências científicas</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Procedimentos minimamente invasivos com menor tempo de repouso</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Escuta atenta e respeito absoluto ao tempo e história do paciente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Milestones & Credentials */}
          <div className="lg:col-span-7 space-y-4">
            {DOCTOR_INFO.academicBackground.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-md flex items-start gap-4"
              >
                <div className="p-3 bg-teal-100/70 text-teal-800 rounded-xl shrink-0 mt-0.5">
                  {index === 0 && <GraduationCap className="w-5 h-5" />}
                  {index === 1 && <Building2 className="w-5 h-5" />}
                  {index === 2 && <Award className="w-5 h-5" />}
                  {index === 3 && <Stethoscope className="w-5 h-5" />}
                  {index === 4 && <BookOpen className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                      {item.tag}
                    </span>
                    <span className="text-slate-400 text-xs font-sans">·</span>
                    <span className="text-xs font-medium text-slate-500">{item.institution}</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Teaching Impact */}
        <div className="bg-teal-50/70 border border-teal-200/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Formação de Futuros Médicos
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 font-serif">
              Docente e Coordenador Adjunto de Medicina na Uninovafapi Afya
            </div>
            <p className="text-sm text-slate-600 max-w-2xl">
              A atuação no ambiente universitário mantém o Dr. Bruno em constante atualização com os protocolos
              médicos mais modernos do mundo, refletindo diretamente na segurança e na excelência de cada conduta cirúrgica.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl font-semibold text-sm transition-all shadow-sm"
            >
              VER ESPECIALIDADES CLÍNICAS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
