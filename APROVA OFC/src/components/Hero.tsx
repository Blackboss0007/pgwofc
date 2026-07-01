import { useEffect, useRef, useState } from 'react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/3378c6e_948052';

const FLOAT_CARDS = [
  { icon: '🧠', title: 'IA Preditiva', desc: 'Prevê o que vai cair na prova', pos: 'top-[12%] right-[4%]', delay: '0s' },
  { icon: '📊', title: 'Base de Dados', desc: '+100k questões analisadas', pos: 'top-[38%] right-[1%]', delay: '1.2s' },
  { icon: '🎯', title: 'Foco Inteligente', desc: 'Estude só o que importa', pos: 'bottom-[28%] right-[5%]', delay: '2.1s' },
  { icon: '📈', title: 'Alta Precisão', desc: '92% de assertividade', pos: 'bottom-[10%] right-[22%]', delay: '0.7s' },
];

const BENEFITS = [
  { icon: '🧠', text: 'IA treinada em milhares de provas e editais' },
  { icon: '🎯', text: 'Estude apenas o que tem mais chance de cair' },
  { icon: '⚡', text: 'Economize centenas de horas de estudo' },
];

const AVATARS = ['#a855f7','#8b5cf6','#7c3aed','#6d28d9','#5b21b6'];

function EnergyOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width = 520;
    const H = canvas.height = 520;
    const cx = W / 2, cy = H / 2;
    let frame = 0;

    // Particles
    const particles = Array.from({ length: 70 }, () => ({
      angle: Math.random() * Math.PI * 2,
      r: 100 + Math.random() * 130,
      speed: 0.002 + Math.random() * 0.004,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Outer nebula
      const n1 = ctx.createRadialGradient(cx, cy, 60, cx, cy, 240);
      n1.addColorStop(0, 'rgba(168,85,247,0.12)');
      n1.addColorStop(1, 'rgba(124,58,237,0.00)');
      ctx.fillStyle = n1;
      ctx.fillRect(0, 0, W, H);

      // Pulsing glow
      const pulse = Math.sin(frame * 0.02) * 0.08 + 0.25;
      const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, 180);
      g2.addColorStop(0, `rgba(200,132,252,${pulse + 0.15})`);
      g2.addColorStop(0.35, `rgba(168,85,247,${pulse})`);
      g2.addColorStop(1, 'rgba(124,58,237,0.00)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      // Core sphere
      const core = ctx.createRadialGradient(cx - 30, cy - 30, 5, cx, cy, 100);
      core.addColorStop(0, 'rgba(245,230,255,0.95)');
      core.addColorStop(0.3, 'rgba(192,132,252,0.75)');
      core.addColorStop(0.7, 'rgba(139,92,246,0.35)');
      core.addColorStop(1, 'rgba(109,40,217,0.00)');
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();

      // Rotating ring 1
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.012);
      ctx.scale(1, 0.35);
      ctx.beginPath();
      ctx.arc(0, 0, 165, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(192,132,252,0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Rotating ring 2
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-frame * 0.008 + 1.2);
      ctx.scale(0.4, 1);
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168,85,247,0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Neural triangle
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.006);
      ctx.beginPath();
      const pts = [0, 1, 2].map(i => {
        const a = (i / 3) * Math.PI * 2 - Math.PI / 2;
        return { x: Math.cos(a) * 78, y: Math.sin(a) * 78 };
      });
      ctx.moveTo(pts[0].x, pts[0].y);
      pts.forEach((p, i) => {
        const next = pts[(i + 1) % 3];
        ctx.lineTo(next.x, next.y);
      });
      ctx.closePath();
      ctx.strokeStyle = 'rgba(245,230,255,0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      pts.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fill();
      });
      ctx.restore();

      // Orbiting particles
      particles.forEach(p => {
        p.angle += p.speed;
        const px = cx + Math.cos(p.angle) * p.r;
        const py = cy + Math.sin(p.angle) * (p.r * 0.38);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,132,252,${p.opacity})`;
        ctx.fill();
      });

      frame++;
      requestAnimationFrame(draw);
    }

    const raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={canvasRef} width={520} height={520}
      className="w-full max-w-[420px] lg:max-w-[500px] xl:max-w-[520px] mx-auto" />
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Stars
  const stars = Array.from({ length: 90 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100,
    size: Math.random() * 1.6 + 0.3, delay: Math.random() * 6,
  }));

  // Parallax on mouse move
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width - 0.5) * 20,
        y: ((e.clientY - r.top) / r.height - 0.5) * 12,
      });
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg,#050505 0%,#090910 60%,#0d0810 100%)' }}>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(s => (
          <div key={s.id} className="star absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
        ))}
      </div>

      {/* Atmosphere blobs — parallax */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ transform: `translate(${mouse.x * 0.4}px,${mouse.y * 0.4}px)`, transition: 'transform 0.6s ease-out' }}>
        <div className="absolute rounded-full"
          style={{ width: 600, height: 600, top: '-15%', right: '-5%', background: 'radial-gradient(circle,rgba(124,58,237,0.22),transparent 70%)', filter: 'blur(70px)' }} />
        <div className="absolute rounded-full drift"
          style={{ width: 400, height: 400, bottom: '-10%', left: '0%', background: 'radial-gradient(circle,rgba(168,85,247,0.14),transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── LEFT column ── */}
        <div className="flex flex-col items-start">

          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full text-xs font-medium text-purple-200"
            style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(168,85,247,0.35)', boxShadow: '0 0 20px rgba(147,51,234,0.18)' }}>
            <span>✨</span>
            <span>IA que antecipa o que cai — você aprova</span>
          </div>

          {/* Headline */}
          <h1 className="reveal text-5xl sm:text-6xl font-black leading-[1.04] mb-6 tracking-tight" style={{ transitionDelay: '0.08s' }}>
            <span className="text-white">Prepare-se hoje.</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg,#c084fc 0%,#a855f7 50%,#8b5cf6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Aprove amanhã.</span>
          </h1>

          {/* Sub */}
          <p className="reveal text-zinc-400 text-base lg:text-lg leading-relaxed max-w-lg mb-8" style={{ transitionDelay: '0.16s' }}>
            AprovaIA usa Inteligência Artificial para analisar milhares de provas anteriores, identificar padrões e prever os assuntos com maior chance de cair no seu concurso.
          </p>

          {/* Benefits */}
          <div className="reveal flex flex-col gap-2.5 mb-9" style={{ transitionDelay: '0.22s' }}>
            {BENEFITS.map(b => (
              <div key={b.text} className="flex items-center gap-3 text-sm text-zinc-300">
                <span className="text-base w-6 text-center">{b.icon}</span>
                <span>{b.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="reveal flex flex-col sm:flex-row gap-4 mb-9" style={{ transitionDelay: '0.28s' }}>
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg,#8b5cf6,#a855f7)' }}>
              <span className="relative z-10">Começar agora →</span>
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg,#a855f7,#c084fc)', boxShadow: '0 0 40px rgba(168,85,247,0.6)' }} />
            </a>
            <a href="#athena"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-all hover:text-purple-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <span>▶</span> Ver demonstração
            </a>
          </div>

          {/* Social proof */}
          <div className="reveal flex flex-col sm:flex-row sm:items-center gap-4" style={{ transitionDelay: '0.34s' }}>
            <div className="flex -space-x-2">
              {AVATARS.map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: c, borderColor: '#050505' }}>
                  {['C','R','A','L','M'][i]}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[9px] font-bold text-purple-300"
                style={{ background: 'rgba(139,92,246,0.3)', borderColor: '#050505' }}>+10k</div>
            </div>
            <div>
              <div className="flex items-center gap-1">
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i} className="text-yellow-400 text-sm">{s}</span>
                ))}
                <span className="text-white font-bold text-sm ml-1">4.9/5</span>
              </div>
              <p className="text-zinc-500 text-xs">+10.000 estudantes · +1.000 aprovações</p>
            </div>
          </div>
        </div>

        {/* ── RIGHT column ── */}
        <div className="relative flex items-center justify-center">
          {/* Parallax layer */}
          <div className="relative"
            style={{ transform: `translate(${mouse.x * -0.5}px,${mouse.y * -0.5}px)`, transition: 'transform 0.5s ease-out' }}>
            <EnergyOrb />

            {/* Floating cards */}
            {FLOAT_CARDS.map((c, i) => (
              <div key={c.title}
                className={`absolute ${c.pos} hidden lg:flex items-start gap-3 p-3.5 rounded-2xl max-w-[180px]`}
                style={{
                  background: 'rgba(13,8,20,0.82)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  backdropFilter: 'blur(16px)',
                  animation: `float-slow 6s ease-in-out infinite`,
                  animationDelay: c.delay,
                  boxShadow: '0 8px 32px rgba(124,58,237,0.2)',
                }}>
                <span className="text-xl flex-shrink-0">{c.icon}</span>
                <div>
                  <p className="text-white text-xs font-semibold">{c.title}</p>
                  <p className="text-zinc-400 text-[10px] mt-0.5 leading-snug">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating CTA button — fixed bottom right */}
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-50 group flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-bold text-sm shadow-2xl"
        style={{
          background: 'linear-gradient(135deg,#8b5cf6,#a855f7)',
          boxShadow: '0 0 30px rgba(168,85,247,0.45), 0 8px 32px rgba(0,0,0,0.4)',
          animation: 'float-slow 4s ease-in-out infinite',
        }}>
        <span className="relative flex w-2.5 h-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-white" />
        </span>
        <span>Começar por R$ 97,90</span>
        <span className="text-purple-200 group-hover:translate-x-0.5 transition-transform">→</span>
      </a>
    </section>
  );
}
