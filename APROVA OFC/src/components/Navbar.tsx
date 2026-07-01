import { useEffect, useState } from 'react';

const LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Athena', href: '#athena' },
  { label: 'Planos', href: '#planos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,5,0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(140%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <svg width="26" height="26" viewBox="0 0 40 40">
            <defs>
              <linearGradient id="navLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <path d="M20 2 L36 12 L32 34 L20 38 L8 34 L4 12 Z" fill="url(#navLogo)" opacity="0.18" />
            <path d="M20 2 L36 12 L32 34 L20 38 L8 34 L4 12 Z" stroke="url(#navLogo)" strokeWidth="1.2" fill="none" />
            <path d="M20 8 L13 28 M20 8 L27 28 M16 21 L24 21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-semibold text-white text-[15px] tracking-tight">AprovaIA</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors px-3 py-2">Entrar</a>
          <a href="#cta" className="btn-primary text-sm font-medium text-white px-5 py-2.5 rounded-full">
            Começar agora
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-xl">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mx-4 mb-4 rounded-2xl p-4 flex flex-col gap-1">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-2.5 px-2">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}
            className="btn-primary text-sm font-medium text-white text-center px-5 py-3 rounded-xl mt-2">
            Começar agora
          </a>
        </div>
      )}
    </header>
  );
}
