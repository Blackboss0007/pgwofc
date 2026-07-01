import { useReveal } from '../hooks/useReveal';

export function DashboardPreview() {
  const ref = useReveal<HTMLDivElement>();
  const bars = [48, 55, 62, 58, 70, 68, 75];

  return (
    <section id="recursos" ref={ref} className="relative py-32 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-5">
          Seu progresso, <span className="text-gradient">visível todos os dias</span>
        </h2>
        <p className="reveal text-zinc-400 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
          XP, sequência de estudos, chance de aprovação e evolução — tudo em um painel que parece feito por uma equipe de design de ponta.
        </p>
      </div>

      <div className="reveal max-w-5xl mx-auto glass rounded-3xl p-6 md:p-8" style={{ transitionDelay: '0.15s', boxShadow: '0 40px 100px -30px rgba(124,58,237,0.25)' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Chance de aprovação', value: '76%', color: '#a855f7' },
            { label: 'Dias estudados', value: '47', color: '#22d3ee' },
            { label: 'XP total', value: '12.840', color: '#facc15' },
            { label: 'Sequência', value: '14 dias', color: '#34d399' },
          ].map(s => (
            <div key={s.label} className="glass rounded-xl p-4 card-hover">
              <p className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-zinc-500 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 glass rounded-xl p-5">
            <p className="text-zinc-400 text-xs mb-4">Evolução semanal</p>
            <div className="flex items-end gap-2 h-24">
              {bars.map((b, i) => (
                <div key={i} className="flex-1 rounded-t-md transition-all" style={{
                  height: `${(b / 80) * 100}%`,
                  background: i === bars.length - 1 ? 'linear-gradient(180deg,#c084fc,#7c3aed)' : 'rgba(168,85,247,0.25)'
                }} />
              ))}
            </div>
          </div>
          <div className="glass rounded-xl p-5 flex flex-col items-center justify-center">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 100 100" className="w-full">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#dashGrad)" strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42} strokeDashoffset={2 * Math.PI * 42 * 0.24} transform="rotate(-90 50 50)" />
                <defs>
                  <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">76%</div>
            </div>
            <p className="text-zinc-500 text-xs mt-2 text-center">Nível Intermediário</p>
          </div>
        </div>
      </div>
    </section>
  );
}
