import type { Nicho } from '../../types';

interface Props {
  nicho: Nicho;
  variant?: 'solid' | 'soft';
  size?: 'sm' | 'md';
  className?: string;
}

const nichoColors: Record<Nicho, { soft: string; solid: string }> = {
  'Desenvolvimento': { soft: 'bg-indigo-100 text-indigo-700', solid: 'bg-indigo-600 text-white' },
  'UX/UI Design': { soft: 'bg-accent-soft text-accent', solid: 'bg-accent text-accent-fg' },
  'Front-End': { soft: 'bg-cyan-100 text-cyan-700', solid: 'bg-cyan-600 text-white' },
  'Design Gráfico': { soft: 'bg-surface-alt text-text', solid: 'bg-ink-700 text-white' },
  'Edição de Vídeo': { soft: 'bg-magenta-500/10 text-magenta-600', solid: 'bg-magenta-500 text-white' },
  'Outros': { soft: 'bg-surface-alt text-text-muted', solid: 'bg-ink-500 text-white' },
};

const sizes = {
  sm: 'text-xs px-2.5 py-1',
  md: 'text-sm px-3 py-1.5',
};

export default function Badge({ nicho, variant = 'soft', size = 'sm', className = '' }: Props) {
  const colorClass = nichoColors[nicho][variant];
  const sizeClass = sizes[size];

  return (
    <span className={`inline-flex items-center rounded-full font-medium ${colorClass} ${sizeClass} ${className}`}>
      {nicho}
    </span>
  );
}