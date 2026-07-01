import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const PLANS = [
  { name: 'Starter', price: 'Grátis', desc: 'Para começar a explorar', features: ['Mentor IA limitado', '1 simulado por semana', 'Cronograma básico'], cta: 'Começar grátis', highlight: false },
  { name: 'Pro', price: 'R$ 39', period: '/mês', desc: 'Para quem está focado na aprovação', features: ['Athena ilimitada', 'Simulados ilimitados', 'Mapa da Aprovação completo', 'Sala de Guerra', 'Flashcards e resumos IA'], cta: 'Assinar Pro', highlight: true },
  { name: 'Elite', price: 'R$ 79', period: '/mês', desc: 'Máxima performance, sem limites', features: ['Tudo do Pro', 'Athena por voz', 'Leitor de PDF com IA', 'Prioridade no suporte', 'Análise preditiva avançada'], cta: 'Assinar Elite', highlight: false },
];

const FAQS = [
  { q: 'A Athena substitui um professor?', a: 'Ela atua como mentora, coach e analista — orienta seu estudo com precisão, mas recomendamos sempre combinar com material de qualidade e, se possível, orientação humana complementar.' },
  { q: 'Funciona para qualquer concurso?', a: 'Sim. A plataforma se adapta a concursos policiais, federais, estaduais, ENEM, vestibulares e OAB, calibrando conteúdo e simulados pra banca específica.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim, sem multa e sem burocracia. Você mantém acesso até o fim do período já pago.' },
  { q: 'Os simulados são atualizados?', a: 'Sim, a IA gera questões inéditas a cada simulado, calibradas no estilo da banca escolhida.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left">
        <span className="text-white text-sm font-medium">{q}</span>
        <span className="text-purple-400 text-lg transition-transform" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {open && <p className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export function PricingFaqCta() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      {/* Planos */}
      <section id="planos" ref={ref} className="relative py-28 px-6" style={{ background: 'var(--bg-2)' }}>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-4">Planos para cada fase da sua jornada</h2>
          <p className="reveal text-zinc-400" style={{ transitionDelay: '0.1s' }}>Comece grátis. Evolua quando estiver pronto.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {PLANS.map((p, i) => (
            <div key={p.name}
              className={`reveal rounded-3xl p-7 card-hover ${p.highlight ? '' : 'glass'}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: p.highlight ? 'linear-gradient(160deg, rgba(124,58,237,0.18), rgba(168,85,247,0.06))' : undefined,
                border: p.highlight ? '1px solid rgba(168,85,247,0.4)' : undefined,
                boxShadow: p.highlight ? '0 30px 80px -30px rgba(147,51,234,0.4)' : undefined,
              }}>
              {p.highlight && <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 px-3 py-1 rounded-full glass mb-4 inline-block">Mais popular</span>}
              <h3 className="text-white font-semibold text-lg mb-1">{p.name}</h3>
              <p className="text-zinc-500 text-xs mb-4">{p.desc}</p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">{p.price}</span>
                {p.period && <span className="text-zinc-500 text-sm mb-1">{p.period}</span>}
              </div>
              <ul className="space-y-2.5 mb-7">
                {p.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-zinc-300 text-sm">
                    <span className="text-purple-400 mt-0.5">✓</span>{f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`block text-center text-sm font-semibold py-3 rounded-full transition-all ${p.highlight ? 'btn-primary text-white' : 'btn-ghost text-white'}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-28 px-6" style={{ background: 'var(--bg)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-white text-center mb-12">Perguntas frequentes</h2>
          <div className="space-y-3">
            {FAQS.map(f => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cta" className="relative py-36 px-6 overflow-hidden text-center" style={{ background: 'var(--bg-2)' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full drift" style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(147,51,234,0.25), transparent 70%)', filter: 'blur(60px)' }} />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="reveal text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Sua aprovação começa <span className="text-gradient">com uma decisão.</span>
          </h2>
          <p className="reveal text-zinc-400 text-lg mb-10" style={{ transitionDelay: '0.1s' }}>
            Junte-se a milhares de candidatos que pararam de estudar no escuro.
          </p>
          <a href="#" className="reveal btn-primary inline-block text-white font-bold px-12 py-5 rounded-full text-base" style={{ transitionDelay: '0.2s' }}>
            Criar minha conta grátis →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/[0.06]" style={{ background: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-zinc-500 text-sm">© 2026 AprovaIA. Todos os direitos reservados.</span>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}
