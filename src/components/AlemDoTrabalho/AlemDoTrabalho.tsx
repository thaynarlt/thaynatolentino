import { useState } from 'react';
import { hobbies } from '../../data/hobbies';
import { getHobbyIconMinimal } from './HobbyIconsMinimal';
import './AlemDoTrabalho.css';

const AlemDoTrabalho = () => {
    const [activeCard, setActiveCard] = useState<number>(0);

    return (
        <section className="alem-do-trabalho" id="hobbies">
            <div className="container">
                <h2 className="section-title">Além do Trabalho</h2>
                <p className="section-subtitle">
                    Clique para explorar cada momento
                </p>

                <div className="hobbies-container">
                    {hobbies.map((hobby, index) => (
                        <div
                            key={hobby.id}
                            onClick={() => setActiveCard(index)}
                            className={`hobby-card ${activeCard === index ? 'active' : 'inactive'} hobby-${hobby.titulo.toLowerCase()}`}
                        >
                            <div className="hobby-image">
                                <img src={hobby.imagem} alt={hobby.titulo} />
                            </div>
                            <div className="hobby-overlay">
                                <div className="hobby-content">
                                    <div className="hobby-icon-wrapper">
                                        {getHobbyIconMinimal(hobby.titulo, 'hobby-icon-svg')}
                                    </div>
                                    {activeCard === index && (
                                        <>
                                            <h3 className="hobby-titulo">{hobby.titulo}</h3>
                                            <p className="hobby-descricao">{hobby.descricao}</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hobby-indicators">
                    {hobbies.map((hobby, index) => (
                        <button
                            key={hobby.id}
                            onClick={() => setActiveCard(index)}
                            className={`indicator ${activeCard === index ? 'active' : ''}`}
                            aria-label={`Ver ${hobby.titulo}`}
                        >
                            {getHobbyIconMinimal(hobby.titulo, 'indicator-icon')}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AlemDoTrabalho;


