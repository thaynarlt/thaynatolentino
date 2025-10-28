# 🚀 Landing Page - Thayna Tolentino

Landing page interativa e moderna criada para apresentar projetos, habilidades e informações profissionais.

## ✨ Características

- **Design Moderno**: Interface limpa e elegante com gradientes e animações suaves
- **Totalmente Responsivo**: Adaptável a todos os tamanhos de tela
- **Performance Otimizada**: CSS nativo sem bibliotecas pesadas
- **Filtros Dinâmicos**: Sistema de filtros por nicho para projetos
- **Animações Fluidas**: Transições suaves e elementos animados
- **Navegação Intuitiva**: Scroll suave entre seções

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- CSS3 (Animações nativas)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho fixo com navegação
│   ├── Hero.tsx        # Seção hero com apresentação
│   ├── Sobre.tsx       # Sobre mim e habilidades
│   ├── Projetos.tsx    # Grid de projetos com filtros
│   └── Contato.tsx     # Informações de contato
├── data/
│   └── projetos.ts     # Dados dos projetos
├── types/
│   └── index.ts        # Tipos TypeScript
├── App.tsx             # Componente principal
└── index.css           # Estilos globais
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🎨 Personalização

### Adicionar Projetos

Edite o arquivo `src/data/projetos.ts` para adicionar seus projetos:

```typescript
{
  id: 1,
  titulo: 'Meu Projeto',
  descricao: 'Descrição do projeto',
  nicho: 'Web',
  tecnologias: ['React', 'TypeScript'],
  imagem: 'url-da-imagem',
  link: 'https://projeto.com',  // opcional
  github: 'https://github.com/user/repo'  // opcional
}
```

### Alterar Informações Pessoais

Edite os componentes `Hero.tsx`, `Sobre.tsx` e `Contato.tsx` para atualizar suas informações.

### Personalizar Cores

Os gradientes principais estão definidos em diversos arquivos CSS:
- `#667eea` (azul)
- `#764ba2` (roxo)

## 📱 Seções

1. **Hero**: Apresentação inicial com call-to-action
2. **Sobre**: Informações pessoais e habilidades
3. **Projetos**: Grid de projetos com filtros por nicho
4. **Contato**: Links para redes sociais e download de currículo

## 🎯 Performance

- Sem dependências externas desnecessárias
- CSS otimizado
- Imagens lazy loading ready
- Animações com `transform` e `opacity` para melhor performance

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
