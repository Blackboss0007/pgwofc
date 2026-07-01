import { useReveal } from '../hooks/useReveal';

const CONCURSOS = ['PC-SP', 'PM', 'TJ', 'TRF', 'AGU', 'TCU', 'INSS', 'OAB', 'ENEM'];

const STEPS = [
  { n: '01', title: 'Conte seu objetivo', desc: 'Concurso, data da prova, horas disponíveis e matérias difíceis. Leva 2 minutos.' },
  { n: '02', title: 'Athena cria seu plano', desc: 'Cronograma personalizado, priorizando o que mais cai e o que você mais precisa revisar.' },
  { n: '03', title: 'Estude com direção', desc: 'Simulados, flashcards e revisões geradas por IA, calibradas pra sua banca.' },
  { n: '04', title: 'Acompanhe sua evolução', desc: 'O Mapa da Aprovação mostra sua chance real de passar, atualizada todos os dias.' },
];

export function LogosAndHowItWorks() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-24 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="reveal text-center text-zinc-600 text-xs uppercase tracking-widest mb-8">
          Preparação para as principais bancas e provas do Brasil
        </p>
        <div className="reveal flex flex-wrap justify-center gap-x-10 gap-y-4 mb-28" style={{ transitionDelay: '0.1s' }}>
          {CONCURSOS.map(c => (
            <span key={c} className="text-zinc-500 font-semibold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity">
              {c}
            </span>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-4">Como funciona</h2>
          <p className="reveal text-zinc-400 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
            Quatro passos entre você e um plano de estudos pensado por inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <div key={s.n} className="reveal glass card-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="text-purple-400/60 text-sm font-mono">{s.n}</span>
              <h3 className="text-white font-semibold mt-3 mb-2">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
