import './Sobre.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCode, 
    faPalette, 
    faPencilAlt, 
    faVideo, 
    faFilm,
    faImage
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs } from '@fortawesome/free-brands-svg-icons';

// Mapeamento de habilidades para ícones do Font Awesome
const skillIcons: Record<string, any> = {
    'TypeScript': faCode,
    'React': faReact,
    'JavaScript': faJs,
    'UX/UI Design': faPalette,
    'Design Gráfico': faPencilAlt,
    'Edição de Vídeo': faVideo,
    'Motion Graphics': faFilm,
    'Adobe': faImage
};

const Sobre = () => {
    const habilidades = [
        'TypeScript', 'React', 'JavaScript', 'UX/UI Design',
        'Design Gráfico', 'Edição de Vídeo', 'Motion Graphics', 'Adobe'
    ];

    return (
        <section id="sobre" className="sobre">
            <div className="container">
                <h2 className="section-title">Sobre Mim</h2>
                <div className="sobre-content">
                    <div className="sobre-text">
                        <p className="intro">
                            Sou estudante do curso de Sistemas para Internet, com habilidades sólidas em design gráfico, manipulação
                            de imagens e edição de vídeo. Meu foco principal é o UX/UI Design, área na qual busco integrar minhas
                            habilidades criativas e técnicas em novos projetos, com o objetivo de proporcionar experiências digitais
                            de qualidade e centradas no usuário.
                        </p>
                        <p>
                            Além disso, possuo experiência prática em Front-End, onde aplico minha criatividade para desenvolver
                            interfaces intuitivas e visualmente atraentes, sempre com o intuito de melhorar a interação e usabilidade.
                            Durante minha trajetória acadêmica e profissional, participei ativamente de projetos na área de UX/UI Design
                            e Front-End, o que me permitiu aprimorar minha organização, entregas no prazo e habilidades técnicas.
                        </p>

                    </div>
                    <div className="skills">
                        <h3>Habilidades</h3>
                        <div className="skills-grid">
                            {habilidades.map((skill, index) => (
                                <div
                                    key={skill}
                                    className="skill-card"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className="skill-icon">
                                        <FontAwesomeIcon icon={skillIcons[skill] || faCode} />
                                    </span>
                                    <span className="skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;

