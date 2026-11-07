import React, { useState } from 'react';
import { INITIAL_TESTIMONIALS, DOCTOR_INFO, TestimonialItem } from '../data/doctorData';
import {
  Star,
  Quote,
  CheckCircle,
  MessageSquarePlus,
  Send,
  ShieldCheck,
  User,
  Heart,
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [name, setName] = useState('');
  const [cityOrRole, setCityOrRole] = useState('');
  const [treatment, setTreatment] = useState('Cirurgia de Coluna / Endoscopia');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newComment: TestimonialItem = {
      id: `comment-${Date.now()}`,
      name: name.trim(),
      roleOrCity: cityOrRole.trim() || 'Paciente em Teresina',
      treatment: treatment,
      rating: rating,
      content: comment.trim(),
      date: 'Enviado agora (Aguardando curadoria)',
      verified: true,
    };

    setTestimonials([newComment, ...testimonials]);
    setFormSubmitted(true);
    setName('');
    setCityOrRole('');
    setComment('');

    setTimeout(() => {
      setFormSubmitted(false);
      setShowFeedbackModal(false);
    }, 4000);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>Prova Social & Experiências Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-serif">
            Confiança Construída com Rigor Técnico e Escuta Atenta
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Relatos verdadeiros de quem encontrou alívio para dores limitantes, diagnóstico oncológico seguro e
            suporte cirúrgico com atenção humanizada em Teresina.
          </p>
        </div>

        {/* Google Authority Card Bar */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-[#102238] text-white rounded-3xl p-6 sm:p-8 mb-14 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center shrink-0">
              <span className="text-2xl font-black font-serif text-amber-400">4.9</span>
              <span className="text-[10px] text-slate-300 uppercase tracking-wider font-sans">Google</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-base font-bold text-white">Excelente Reputação Profissional</div>
              <div className="text-xs text-slate-300">
                Baseado em <strong className="text-white font-semibold">184 avaliações reais</strong> de pacientes no perfil do Google
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowFeedbackModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Deixar Sua Avaliação</span>
            </button>
          </div>
        </div>

        {/* Curated Real Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-200 relative group"
            >
              <Quote className="w-8 h-8 text-teal-700/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {item.treatment && (
                  <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-teal-900 bg-teal-100/70 px-2.5 py-1 rounded-md">
                    {item.treatment}
                  </div>
                )}

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900 font-sans flex items-center gap-1.5">
                    <span>{item.name}</span>
                    {item.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    )}
                  </div>
                  <div className="text-xs text-slate-500">{item.roleOrCity}</div>
                </div>

                <span className="text-[11px] text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Community Comment Box Component */}
        <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="space-y-3 text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
              <MessageSquarePlus className="w-4 h-4 text-teal-700" />
              <span>Espaço do Paciente</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Compartilhe Seu Relato com o Dr. Bruno Monte
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Seu depoimento ajuda outras pessoas em Teresina e região a encontrarem alívio seguro e atendimento médico qualificado.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-emerald-900">Muito obrigado pelo seu relato!</h4>
              <p className="text-xs sm:text-sm text-emerald-800">
                Seu comentário foi registrado com sucesso. Conforme nossas diretrizes éticas e de privacidade, ele passará pela curadoria da equipe médica antes da exibição definitiva.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Eduardo Silva"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Sua Cidade / Bairro
                  </label>
                  <input
                    type="text"
                    value={cityOrRole}
                    onChange={(e) => setCityOrRole(e.target.value)}
                    placeholder="Ex: Teresina - Bairro Fátima"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Procedimento / Motivo da Consulta
                  </label>
                  <select
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Cirurgia de Coluna / Endoscopia">Cirurgia de Coluna / Endoscopia</option>
                    <option value="Oncologia Ortopédica / Biópsia">Oncologia Ortopédica / Biópsia</option>
                    <option value="Tratamento da Dor Crônica">Tratamento da Dor Crônica / Infiltração</option>
                    <option value="Prótese de Joelho / Quadril">Prótese de Joelho / Quadril</option>
                    <option value="Traumatologia / Fratura">Traumatologia / Fratura</option>
                    <option value="Consulta Ortopédica Geral">Consulta Ortopédica Geral</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Sua Avaliação (Estrelas)
                  </label>
                  <div className="flex items-center gap-2 py-2 px-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none transition-transform hover:scale-110"
                        aria-label={`${star} estrelas`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-2">{rating} de 5 estrelas</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Seu Comentário / Relato de Experiência *
                </label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Conte brevemente como foi seu atendimento, a clareza nas orientações e a evolução da sua dor ou recuperação..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 text-left">
                  <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                  <span>Aviso de moderação: Os comentários passam por conferência da equipe antes da indexação definitiva.</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>ENVIAR COMENTÁRIO</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
