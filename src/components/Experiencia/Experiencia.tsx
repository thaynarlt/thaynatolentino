import { useEffect, useRef, useState } from 'react';
import { experiencias } from '../../data/experiencias';
import './Experiencia.css';

const Experiencia = () => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="experiencia" id="experiencia">
            <div className="container">
                <h2 className="section-title">Experiência Profissional</h2>
                <p className="section-subtitle">
                    Minha jornada no mundo do desenvolvimento
                </p>

                <div className="timeline">
                    {experiencias.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => { itemRefs.current[index] = el; }}
                            data-index={index}
                            className={`timeline-item ${visibleItems.includes(index) ? 'visible' : ''}`}
                        >
                            <div className="timeline-marker">
                                <div className={`timeline-dot ${exp.atual ? 'current' : ''}`}>
                                    {exp.atual && <div className="pulse"></div>}
                                </div>
                                {index < experiencias.length - 1 && (
                                    <div className="timeline-line"></div>
                                )}
                            </div>

                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-cargo">{exp.cargo}</h3>
                                        <h4 className="timeline-empresa">{exp.empresa}</h4>
                                    </div>
                                    <span className={`timeline-periodo ${exp.atual ? 'atual' : ''}`}>
                                        {exp.periodo}
                                    </span>
                                </div>
                                <p className="timeline-descricao">{exp.descricao}</p>
                                <div className="timeline-tecnologias">
                                    {exp.tecnologias.map((tech, i) => (
                                        <span key={i} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiencia;

