import { useState } from 'react';
import { AthenaOrb } from './AthenaOrb';
import { useReveal } from '../hooks/useReveal';

const CAPS = [
  { icon: '🧠', label: 'Memória', desc: 'Lembra de toda sua jornada de estudos' },
  { icon: '💬', label: 'Chat', desc: 'Tira dúvidas com explicações didáticas' },
  { icon: '🎙️', label: 'Voz', desc: 'Converse naturalmente, como no ChatGPT' },
  { icon: '📄', label: 'Resumos', desc: 'Transforma PDFs em material de estudo' },
  { icon: '✅', label: 'Correções', desc: 'Explica cada erro, não só o gabarito' },
  { icon: '📅', label: 'Planejamento', desc: 'Reorganiza seu cronograma automaticamente' },
  { icon: '📊', label: 'Insights', desc: 'Detecta padrões de erro antes de você' },
];

export function AthenaSection() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="athena" ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
        <AthenaOrb size={520} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center mb-16">
        <span className="reveal inline-block text-xs font-medium tracking-widest uppercase text-purple-300 px-4 py-1.5 rounded-full glass mb-6">
          A inteligência por trás do AprovaIA
        </span>
        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-5" style={{ transitionDelay: '0.1s' }}>
          Conheça a Athena
        </h2>
        <p className="reveal text-zinc-400 max-w-xl mx-auto" style={{ transitionDelay: '0.2s' }}>
          Não é um chatbot. É um sistema vivo que aprende com cada decisão sua e age como mentora, coach e analista de desempenho.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
        {CAPS.map((c, i) => (
          <button
            key={c.label}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="reveal glass rounded-2xl p-5 text-left transition-all duration-300"
            style={{
              transitionDelay: `${i * 0.06}s`,
              borderColor: active === i ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.08)',
              boxShadow: active === i ? '0 0 30px rgba(147,51,234,0.25)' : 'none',
              transform: active === i ? 'translateY(-3px)' : 'none',
            }}
          >
            <span className="text-2xl block mb-2">{c.icon}</span>
            <p className="text-white text-sm font-semibold">{c.label}</p>
            <p className="text-zinc-500 text-xs mt-1 leading-snug">{c.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
