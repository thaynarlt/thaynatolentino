import { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import type { Projeto, Nicho } from '../../types';
import { NICHOS } from '../../types';
import ProjectCard from './ProjectCard';

interface Props {
  projetos: Projeto[];
}

type Filter = Nicho | 'Todos';

export default function FilteredProjects({ projetos }: Props) {
  const [filter, setFilter] = useState<Filter>('Todos');

  const filtered = useMemo(() => {
    if (filter === 'Todos') return projetos;
    return projetos.filter(p => p.nicho === filter);
  }, [filter, projetos]);

  const counts = useMemo(() => {
    const byNicho: Record<string, number> = { Todos: projetos.length };
    for (const p of projetos) {
      byNicho[p.nicho] = (byNicho[p.nicho] ?? 0) + 1;
    }
    return byNicho;
  }, [projetos]);

  const filters: Filter[] = ['Todos', ...NICHOS];

  return (
    <div className="space-y-10">
      {/* Chips de filtro */}
      <div className="flex flex-wrap gap-2">
        {filters.map(f => {
          const isActive = filter === f;
          const count = counts[f] ?? 0;
          if (count === 0 && f !== 'Todos') return null;

          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isActive
                  ? 'bg-accent text-accent-fg'
                  : 'bg-surface text-text-muted border border-border hover:border-accent hover:text-text'
                }`}
            >
              <span>{f}</span>
              <span className={`text-xs ${isActive ? 'opacity-80' : 'opacity-60'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid com animação */}
      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          Nenhum projeto nesse nicho ainda.
        </p>
      )}
    </div>
  );
}
