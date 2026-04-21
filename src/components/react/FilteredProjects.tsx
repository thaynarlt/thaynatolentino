import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import type { Projeto, Nicho } from '../../types';
import { NICHOS } from '../../types';
import ProjectCard from './ProjectCard';

interface Props {
  projetos: Projeto[];
}

type Filter = Nicho | 'Todos' | 'Destaques';

export default function FilteredProjects({ projetos }: Props) {
  const [filter, setFilter] = useState<Filter>('Destaques');

  const filtered = useMemo(() => {
    if (filter === 'Todos') return projetos;
    if (filter === 'Destaques') return projetos.filter(p => p.destaque);
    return projetos.filter(p => p.nicho === filter);
  }, [filter, projetos]);

  const counts = useMemo(() => {
    const byNicho: Record<string, number> = {
      Todos: projetos.length,
      Destaques: projetos.filter(p => p.destaque).length,
    };
    for (const p of projetos) {
      byNicho[p.nicho] = (byNicho[p.nicho] ?? 0) + 1;
    }
    return byNicho;
  }, [projetos]);

  const filters: Filter[] = ['Destaques', 'Todos', ...NICHOS];

  return (
    <div className="space-y-10">
      {/* Chips minimalistas */}
      <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
        {filters.map((f, i) => {
          const isActive = filter === f;
          const count = counts[f] ?? 0;
          if (count === 0 && f !== 'Todos' && f !== 'Destaques') return null;

          return (
            <div key={f} className="flex items-center">
              {i > 0 && (
                <span className="text-text-muted/40 mx-2 select-none">·</span>
              )}
              <button
                onClick={() => setFilter(f)}
                className={`inline-flex items-baseline gap-1.5 px-2 py-1 rounded-md text-sm font-medium transition-colors ${isActive
                    ? 'text-text-strong'
                    : 'text-text-muted hover:text-text'
                  }`}
              >
                <span className={isActive ? 'underline decoration-accent decoration-2 underline-offset-4' : ''}>
                  {f}
                </span>
                <span className="text-xs opacity-60">{count}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Grid bento 12 colunas */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-12 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(projeto => (
              <ProjectCard key={projeto.id} projeto={projeto} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {/* Estado vazio */}
      {filtered.length === 0 && (
        <p className="text-text-muted text-center py-12">
          Nenhum projeto nesse filtro ainda.
        </p>
      )}
    </div>
  );
}
