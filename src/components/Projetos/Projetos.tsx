import { useState } from 'react';
import { projetos, nichos } from '../../data/projetos';
import './Projetos.css';

const Projetos = () => {
    const [filtroAtivo, setFiltroAtivo] = useState<typeof nichos[number]>(nichos[0]);
    const projetosFiltrados = projetos.filter(p => p.nicho === filtroAtivo);

    return (
        <section id="projetos" className="projetos">
            <div className="container">
                <h2 className="section-title">Meus Projetos</h2>
                <p className="section-subtitle">Alguns dos projetos que desenvolvi</p>
                <div className="filtros">
                    {nichos.map(nicho => (
                        <button key={nicho} className={`filtro-btn ${filtroAtivo === nicho ? 'active' : ''}`}
                            onClick={() => setFiltroAtivo(nicho)}>{nicho}</button>
                    ))}
                </div>
                <div className="infinite-carousel-wrapper">
                    <div className="infinite-carousel">
                        <div className="infinite-track">
                            {projetosFiltrados.map((projeto) => (
                                <a key={projeto.id} href={projeto.link || projeto.github || '#'}
                                    className="project-card-mini" target="_blank" rel="noopener noreferrer">
                                    <div className="card-image">
                                        <img src={projeto.imagem} alt={projeto.titulo} />
                                    </div>
                                    <div className="card-overlay">
                                        <h4>{projeto.titulo}</h4>
                                    </div>
                                </a>
                            ))}
                            {projetosFiltrados.map((projeto) => (
                                <a key={`dup-${projeto.id}`} href={projeto.link || projeto.github || '#'}
                                    className="project-card-mini" target="_blank" rel="noopener noreferrer">
                                    <div className="card-image">
                                        <img src={projeto.imagem} alt={projeto.titulo} />
                                    </div>
                                    <div className="card-overlay">
                                        <h4>{projeto.titulo}</h4>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projetos;

