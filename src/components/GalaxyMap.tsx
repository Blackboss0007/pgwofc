import { useReveal } from '../hooks/useReveal';

const PLANETS = [
  { name: 'Constitucional', color: '#a855f7', size: 30, x: 18, y: 30 },
  { name: 'Penal', color: '#22d3ee', size: 24, x: 38, y: 14 },
  { name: 'Administrativo', color: '#facc15', size: 34, x: 58, y: 26 },
  { name: 'Português', color: '#34d399', size: 22, x: 78, y: 18 },
  { name: 'Raciocínio Lógico', color: '#f472b6', size: 20, x: 28, y: 62 },
  { name: 'Informática', color: '#60a5fa', size: 26, x: 68, y: 60 },
];

export function GalaxyMap() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-5">
          Cada matéria, <span className="text-gradient">um universo próprio</span>
        </h2>
        <p className="reveal text-zinc-400 max-w-xl mx-auto" style={{ transitionDelay: '0.1s' }}>
          O Mapa da Aprovação transforma seu progresso em um sistema de planetas — cada um brilhando conforme você domina o conteúdo.
        </p>
      </div>

      <div className="reveal relative max-w-4xl mx-auto h-96 glass rounded-3xl overflow-hidden" style={{ transitionDelay: '0.15s' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {PLANETS.map((p, i) =>
            PLANETS.slice(i + 1).map(p2 => (
              <line key={`${p.name}-${p2.name}`} x1={p.x} y1={p.y} x2={p2.x} y2={p2.y}
                stroke="rgba(168,85,247,0.15)" strokeWidth="0.2" />
            ))
          )}
        </svg>
        {PLANETS.map((p, i) => (
          <div key={p.name} className="absolute float-slow" style={{ left: `${p.x}%`, top: `${p.y}%`, animationDelay: `${i * 0.5}s` }}>
            <div className="rounded-full" style={{
              width: p.size, height: p.size,
              background: `radial-gradient(circle at 35% 30%, ${p.color}cc, ${p.color}33)`,
              boxShadow: `0 0 24px ${p.color}66`,
            }} />
            <span className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400 whitespace-nowrap">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
