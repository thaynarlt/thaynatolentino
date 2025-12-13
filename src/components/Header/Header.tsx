import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMenuOpen) setIsMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="logo" onClick={() => scrollToSection('hero')}>
                    Thayná Tolentino
                </div>
                {/* Botão mobile (hambúrguer) */}
                <button
                    className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
                    aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-sidebar"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </button>

                <nav className="nav">
                    <button onClick={() => scrollToSection('projetos')}>Projetos</button>
                    <button onClick={() => scrollToSection('experiencia')}>Experiência</button>
                    <button onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button onClick={() => scrollToSection('hobbies')}>Além do Trabalho</button>
                    <button onClick={() => scrollToSection('contato')}>Contato</button>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
                        {theme === 'light' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>
                </nav>
            </div>
            {/* Sidebar mobile */}
            <div
                id="mobile-sidebar"
                className={`sidebar ${isMenuOpen ? 'open' : ''}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="sidebar-header">
                    <div className="logo" onClick={() => scrollToSection('hero')}>
                        Thayná Tolentino
                    </div>
                    <button
                        className="close-button"
                        aria-label="Fechar menu"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <div className="sidebar-content">
                    <button onClick={() => scrollToSection('projetos')}>Projetos</button>
                    <button onClick={() => scrollToSection('experiencia')}>Experiência</button>
                    <button onClick={() => scrollToSection('sobre')}>Sobre</button>
                    <button onClick={() => scrollToSection('hobbies')}>Além do Trabalho</button>
                    <button onClick={() => scrollToSection('contato')}>Contato</button>
                </div>
                <div className="sidebar-footer">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
                        {theme === 'light' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5"></circle>
                                <line x1="12" y1="1" x2="12" y2="3"></line>
                                <line x1="12" y1="21" x2="12" y2="23"></line>
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                <line x1="1" y1="12" x2="3" y2="12"></line>
                                <line x1="21" y1="12" x2="23" y2="12"></line>
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Backdrop */}
            {isMenuOpen && <div className="backdrop" onClick={() => setIsMenuOpen(false)} />}
        </header>
    );
};

export default Header;
