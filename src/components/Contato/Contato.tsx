import "./Contato.css";

const Contato = () => {
  return (
    <section id="contato" className="contato">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Vamos conversar sobre seu próximo projeto?
        </p>

        <div className="contato-content">
          <div className="contato-info">
            <div className="info-card highlight">
              <div className="info-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>Email</h3>
              <p className="contact-detail">tatarlt7@gmail.com</p>
              <a href="mailto:tatarlt7@gmail.com" className="info-link">
                Enviar Email
              </a>
            </div>

            <div className="info-card highlight">
              <div className="info-icon">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              <h3>Currículo</h3>
              <p className="contact-detail">Veja o meu CV completo</p>
              <a
                href="https://drive.google.com/file/d/1tp0NpsGxWiTyVui9DB63Uuu7okMrdXJf/view?usp=sharing"
                className="info-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver CV
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>&copy; 2024 Thayná Tolentino. Todos os direitos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
