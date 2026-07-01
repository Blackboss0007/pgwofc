export function AthenaOrb({ size = 420 }: { size?: number }) {
  const stars = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    angle: (i / 24) * 360,
    r: 30 + Math.random() * 60,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
  }));

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full drift"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.35) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <svg viewBox="0 0 400 400" width={size} height={size} className="relative orb-core">
        <defs>
          <radialGradient id="orbCore" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#a855f7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.08" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.1" />
          </linearGradient>
          <filter id="orbGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital rings */}
        <g className="orb-ring" opacity="0.5">
          <ellipse cx="200" cy="200" rx="170" ry="60" fill="none" stroke="url(#ringGrad)" strokeWidth="1" />
        </g>
        <g className="orb-ring-rev" opacity="0.35">
          <ellipse cx="200" cy="200" rx="150" ry="95" fill="none" stroke="url(#ringGrad)" strokeWidth="1" />
        </g>

        {/* Core sphere */}
        <circle cx="200" cy="200" r="120" fill="url(#orbCore)" filter="url(#orbGlow)" />

        {/* Neural lines inside */}
        <g opacity="0.6" filter="url(#orbGlow)">
          <path d="M140,160 Q200,140 260,170 Q230,220 200,260 Q160,230 140,160" fill="none" stroke="#f3e8ff" strokeWidth="0.8" />
          <line x1="140" y1="160" x2="260" y2="170" stroke="#f3e8ff" strokeWidth="0.5" />
          <line x1="200" y1="140" x2="200" y2="260" stroke="#f3e8ff" strokeWidth="0.5" />
          <line x1="160" y1="230" x2="260" y2="170" stroke="#f3e8ff" strokeWidth="0.5" />
          <circle cx="140" cy="160" r="2.5" fill="#fff" />
          <circle cx="260" cy="170" r="2.5" fill="#fff" />
          <circle cx="200" cy="140" r="2" fill="#fff" />
          <circle cx="200" cy="260" r="2.5" fill="#fff" />
          <circle cx="160" cy="230" r="2" fill="#fff" />
        </g>

        {/* Orbiting stars */}
        {stars.map(s => {
          const rad = (s.angle * Math.PI) / 180;
          const cx = 200 + Math.cos(rad) * (130 + s.r * 0.4);
          const cy = 200 + Math.sin(rad) * (60 + s.r * 0.25);
          return (
            <circle key={s.id} cx={cx} cy={cy} r={s.size} fill="#e9d5ff" className="star"
              style={{ animationDelay: `${s.delay}s` }} />
          );
        })}
      </svg>
    </div>
  );
}
