import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Projeto } from '../../types';

interface Props {
  projetos: Projeto[];
}

// imagem pode ser string (URL externa) ou ImageMetadata (asset otimizado do Astro)
const posterSrc = (img: Projeto['imagem']) =>
  typeof img === 'string' ? img : img.src;

function domain(url?: string): string {
  if (!url) return '';
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}

type Device = 'desktop' | 'mobile';

export default function LiveShowcase({ projetos }: Props) {
  const [activeId, setActiveId] = useState<number>(projetos[0]?.id);
  const [live, setLive] = useState(false); // o embed/vídeo do projeto ativo foi ativado?
  const [loaded, setLoaded] = useState(false); // iframe/vídeo terminou de carregar?
  const [device, setDevice] = useState<Device>('desktop');
  const frameRef = useRef<HTMLDivElement>(null);

  const active = projetos.find((p) => p.id === activeId) ?? projetos[0];
  const hasVideo = Boolean(active?.video);

  // Ativa o embed automaticamente quando a vitrine entra na tela (efeito "uau"),
  // mas carrega só o projeto ativo — nunca os 5 de uma vez.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  function select(id: number) {
    if (id === activeId) return;
    setActiveId(id);
    setLoaded(false);
    setLive(true);
  }

  if (!active) return null;

  return (
    <div className="space-y-6">
      {/* Barra de controles */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-sm font-medium text-text-strong">
            {active.titulo}
          </span>
          <span className="hidden sm:inline text-sm text-text-muted">
            — rodando ao vivo
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle desktop / celular */}
          <div className="inline-flex rounded-lg border border-border bg-surface p-0.5">
            {(['desktop', 'mobile'] as Device[]).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDevice(d)}
                aria-pressed={device === d}
                title={d === 'desktop' ? 'Ver em desktop' : 'Ver em celular'}
                className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                  device === d
                    ? 'bg-surface-alt text-text-strong'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {d === 'desktop' ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
                )}
                <span className="hidden sm:inline">{d === 'desktop' ? 'Desktop' : 'Celular'}</span>
              </button>
            ))}
          </div>

          {active.demo && (
            <a
              href={active.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text hover:border-accent hover:text-accent transition-colors"
            >
              Tela cheia
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
            </a>
          )}
        </div>
      </div>

      {/* Moldura de navegador */}
      <div
        ref={frameRef}
        className="rounded-2xl border border-border bg-surface overflow-hidden shadow-accent"
      >
        {/* Chrome do navegador */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-surface-alt/50">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#F87171]" />
            <span className="h-3 w-3 rounded-full bg-[#FBBF24]" />
            <span className="h-3 w-3 rounded-full bg-[#34D399]" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="inline-flex items-center gap-2 max-w-full rounded-full bg-bg px-3 py-1 text-xs text-text-muted truncate">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              <span className="truncate">{domain(active.demo)}</span>
            </div>
          </div>
          <span className="hidden sm:inline text-xs text-text-muted">
            {hasVideo ? 'Demonstração' : 'Ao vivo'}
          </span>
        </div>

        {/* Corpo — embed ao vivo, vídeo ou poster */}
        <div className="relative bg-bg">
          <div
            className={`mx-auto transition-all duration-500 ease-out ${
              device === 'mobile' ? 'max-w-[390px]' : 'max-w-full'
            }`}
          >
            <div className="relative w-full h-[440px] md:h-[600px] overflow-hidden bg-accent-soft">
              {/* Poster (mostrado até o conteúdo ao vivo carregar) */}
              <img
                src={posterSrc(active.imagem)}
                alt={active.titulo}
                className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
                  loaded ? 'opacity-0' : 'opacity-100'
                }`}
                onError={(e) => ((e.currentTarget.style.display = 'none'))}
              />

              {/* Selo de carregando */}
              <AnimatePresence>
                {live && !loaded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-bg/90 backdrop-blur px-4 py-2 text-sm text-text-muted shadow">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                      Carregando o app…
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Conteúdo ao vivo */}
              {live &&
                (hasVideo ? (
                  <video
                    key={`vid-${active.id}`}
                    src={active.video}
                    poster={posterSrc(active.imagem)}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    onLoadedData={() => setLoaded(true)}
                    className="relative w-full h-full object-cover object-top"
                  />
                ) : (
                  <iframe
                    key={`frame-${active.id}`}
                    src={active.demo}
                    title={active.titulo}
                    loading="lazy"
                    onLoad={() => setLoaded(true)}
                    className="relative w-full h-full border-0"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seletor de projetos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {projetos.map((p) => {
          const isActive = p.id === activeId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => select(p.id)}
              aria-pressed={isActive}
              className={`group text-left rounded-xl border overflow-hidden transition-all duration-300 ${
                isActive
                  ? 'border-accent ring-2 ring-accent/30'
                  : 'border-border hover:border-border-strong'
              }`}
            >
              <div className="aspect-[16/10] bg-accent-soft overflow-hidden relative">
                <img
                  src={posterSrc(p.imagem)}
                  alt={p.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={(e) => ((e.currentTarget.style.display = 'none'))}
                />
                {p.video && (
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-bg/85 px-1.5 py-0.5 text-[10px] font-medium text-text-strong">
                    ▶ vídeo
                  </span>
                )}
              </div>
              <div className="px-2.5 py-2">
                <p
                  className={`text-xs font-medium leading-tight line-clamp-1 ${
                    isActive ? 'text-accent' : 'text-text'
                  }`}
                >
                  {p.titulo}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Link pro estudo de caso do projeto ativo */}
      <div className="flex justify-center pt-2">
        <a
          href={`/projetos/${active.slug}`}
          className="inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:gap-2.5 transition-all"
        >
          Ver o estudo de caso de {active.titulo}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
