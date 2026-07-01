import { useReveal } from '../hooks/useReveal';

const BADGES = [
  { icon: '🔥', label: '30 dias seguidos' },
  { icon: '🎯', label: '1000 questões' },
  { icon: '🌙', label: 'Madrugador' },
  { icon: '⚡', label: 'Maratona' },
  { icon: '👑', label: 'Liga Diamante' },
];

const TESTIMONIALS = [
  { name: 'Camila R.', role: 'Aprovada — PC-SP', text: 'A Athena identificou que eu sempre errava as mesmas pegadinhas em Processo Penal. Corrigi isso em duas semanas.' },
  { name: 'Lucas M.', role: 'Aprovado — TJ-SP', text: 'O Mapa da Aprovação me mostrou exatamente onde eu estava perdendo pontos. Nunca tive tanta clareza estudando.' },
  { name: 'Beatriz A.', role: 'OAB 1ª Fase', text: 'Os simulados gerados por IA pareciam ter sido escritos pela própria banca. Foco total no que realmente cai.' },
];

const COMPARISON = [
  { label: 'Cronograma personalizado por IA', us: true, others: false },
  { label: 'Diagnóstico de padrões de erro', us: true, others: false },
  { label: 'Mentor disponível 24/7', us: true, others: false },
  { label: 'Chance de aprovação calculada', us: true, others: false },
  { label: 'Apostilas genéricas', us: false, others: true },
];

export function GamificationAndSocial() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <>
      {/* Gamificação */}
      <section ref={ref} className="relative py-28 px-6" style={{ background: 'var(--bg)' }}>
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-5">
            Estudar também pode ser <span className="text-gradient">viciante</span>
          </h2>
          <p className="reveal text-zinc-400 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            XP, ligas, conquistas e sequências — sua disciplina vira progresso visível, todos os dias.
          </p>
        </div>
        <div className="reveal flex flex-wrap justify-center gap-4 max-w-3xl mx-auto" style={{ transitionDelay: '0.15s' }}>
          {BADGES.map(b => (
            <div key={b.label} className="glass card-hover rounded-2xl px-6 py-5 flex flex-col items-center gap-2 min-w-[120px]">
              <span className="text-3xl">{b.icon}</span>
              <span className="text-zinc-300 text-xs text-center font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="relative py-28 px-6" style={{ background: 'var(--bg-2)' }}>
        <div className="max-w-5xl mx-auto text-center mb-14">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white">Quem já está aprovado</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="reveal glass card-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#a855f7,#7c3aed)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-zinc-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparativo */}
      <section className="relative py-28 px-6" style={{ background: 'var(--bg)' }}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white">A diferença é a inteligência</h2>
        </div>
        <div className="reveal max-w-2xl mx-auto glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.08] text-xs text-zinc-500 font-medium uppercase tracking-wider">
            <span>Recurso</span><span className="text-center text-purple-300">AprovaIA</span><span className="text-center">Métodos tradicionais</span>
          </div>
          {COMPARISON.map(row => (
            <div key={row.label} className="grid grid-cols-3 px-6 py-4 border-b border-white/[0.04] items-center">
              <span className="text-zinc-300 text-sm">{row.label}</span>
              <span className="text-center">{row.us ? '✅' : '—'}</span>
              <span className="text-center text-zinc-600">{row.others ? '✅' : '—'}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
