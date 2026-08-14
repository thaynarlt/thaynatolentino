import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Projeto, Tamanho } from '../../types';
import Badge from './Badge';

interface Props {
  projeto: Projeto;
}

const spanBySize: Record<Tamanho, string> = {
  sm: 'md:col-span-3',
  md: 'md:col-span-6',
  lg: 'md:col-span-6',
};

const aspectBySize: Record<Tamanho, string> = {
  sm: 'aspect-[4/3]',
  md: 'aspect-[16/10]',
  lg: 'aspect-[3/2]',
};

const titleSizeBySize: Record<Tamanho, string> = {
  sm: 'text-lg md:text-xl',
  md: 'text-2xl md:text-3xl',
  lg: 'text-3xl md:text-4xl',
};

export default function ProjectCard({ projeto }: Props) {
  const [imgError, setImgError] = useState(false);
  const size: Tamanho = projeto.tamanho ?? 'sm';

  // Projetos de design/vídeo têm link externo (Behance, Figma, YouTube) e abrem em nova aba.
  // Projetos de código (sem link externo, muitos com repo privado) vão para a página de
  // estudo de caso interna, onde a demo ao vivo e o contexto são apresentados.
  const isExternal = Boolean(projeto.link);
  const href = projeto.link ?? `/projetos/${projeto.slug}`;
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  // imagem pode ser string (URL externa, ex.: YouTube) ou ImageMetadata (asset otimizado do Astro)
  const imgSrc = typeof projeto.imagem === 'string'
    ? projeto.imagem
    : projeto.imagem.src;

  return (
    <motion.a
      layout
      initial={false}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      href={href}
      {...externalProps}
      className={`group relative block col-span-12 ${spanBySize[size]} bg-surface border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-accent transition-[border-color,box-shadow] duration-300`}
    >
      {/* Imagem */}
      <div className={`relative overflow-hidden bg-accent-soft ${aspectBySize[size]}`}>
        {!imgError && (
          <img
            src={imgSrc}
            alt={projeto.titulo}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
            onError={() => setImgError(true)}
          />
        )}

        {/* Badge no canto */}
        <div className="absolute top-4 left-4">
          <Badge nicho={projeto.nicho} variant="solid" size={size === 'lg' ? 'md' : 'sm'} />
        </div>

        {/* Seta no hover */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-strong">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className={`font-display text-text-strong leading-tight ${titleSizeBySize[size]} mb-2`}>
            {projeto.titulo}
          </h3>
        </div>

        <p className="text-sm text-text-muted line-clamp-5">
          {projeto.descricao}
        </p>
      </div>
    </motion.a>
  );
}
