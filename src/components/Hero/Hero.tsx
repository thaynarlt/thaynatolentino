import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import Plasma from '../Plasma/Plasma';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="plasma-wrapper">
                <Plasma 
                    color="#8b5cf6"
                    speed={0.6}
                    direction="forward"
                    scale={1.1}
                    opacity={0.8}
                    mouseInteractive={typeof window !== 'undefined' && window.innerWidth > 768}
                />
            </div>
            <div className="hero-content">
                <div className="hero-image">
                    <div className="hero-photo">
                        <img src="/perfil.jpg" alt="Thayná Tolentino" />
                    </div>
                </div>
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="gradient-text">Olá, eu sou</span>
                        <br />
                        <span className="hero-name">Thayná Tolentino</span>
                    </h1>
                    <p className="hero-subtitle">UX/UI Designer | Designer/Editor de vídeos | Junior Front-End Developer</p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}>
                            Ver Projetos
                        </button>
                        <button className="btn-secondary" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                            Entrar em Contato
                        </button>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/thaynarlt" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.behance.net/thaynatolentino" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                            <FontAwesomeIcon icon={faBehance} style={{ width: '24px', height: '24px' }} />
                        </a>
                        <a href="https://www.linkedin.com/in/thaynarlt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

