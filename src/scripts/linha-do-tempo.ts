// Desenha as linhas do tempo (Experiência e Formação) conforme a rolagem:
// a linha de destaque cresce até a altura em que a tela está.
// Sem JS ou com movimento reduzido, a linha aparece inteira (--progresso padrão = 1).

const linhas = [...document.querySelectorAll<HTMLElement>("[data-linha-tempo]")];
const movimentoReduzido = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (linhas.length > 0 && !movimentoReduzido) {
  let agendado = false;

  const atualizar = () => {
    agendado = false;
    // A ponta da linha acompanha um ponto a 60% da altura da tela.
    const alvo = window.innerHeight * 0.6;
    for (const linha of linhas) {
      const trilho = linha.parentElement;
      if (!trilho) continue;
      const { top, height } = trilho.getBoundingClientRect();
      const progresso = Math.min(1, Math.max(0, (alvo - top) / height));
      linha.style.setProperty("--progresso", progresso.toFixed(4));
    }
  };

  const agendar = () => {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(atualizar);
  };

  addEventListener("scroll", agendar, { passive: true });
  addEventListener("resize", agendar);
  // A altura muda quando "Ver detalhes" abre ou fecha.
  const observador = new ResizeObserver(agendar);
  linhas.forEach((l) => l.parentElement && observador.observe(l.parentElement));

  atualizar();
}
