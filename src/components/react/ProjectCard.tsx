import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Projeto } from '../../types';
import Badge from './Badge';

interface Props {
  projeto: Projeto;
}

export default function ProjectCard({ projeto }: Props) {
  const [imgError, setImgError] = useState(false);
  const href = projeto.link ?? projeto.github ?? '#';

  return (
    <motion.a
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-surface border border-border rounded-xl overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-accent transition-[transform,border-color,box-shadow] duration-300"
    >
      <div className="aspect-[4/3] bg-accent-soft relative overflow-hidden">
        {!imgError && (
          <img
            src={projeto.imagem}
            alt={projeto.titulo}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
        <div className="absolute top-3 left-3">
          <Badge nicho={projeto.nicho} variant="solid" />
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-display text-xl text-text-strong leading-tight">
          {projeto.titulo}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2">
          {projeto.descricao}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {projeto.tecnologias.slice(0, 3).map(tec => (
            <span key={tec} className="text-xs px-2 py-0.5 rounded-full bg-surface-alt text-text-muted">
              {tec}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1 text-accent text-sm font-medium pt-2 group-hover:gap-2 transition-all">
          <span>Ver projeto</span>
          <span>→</span>
        </div>
      </div>
    </motion.a>
  );
}
