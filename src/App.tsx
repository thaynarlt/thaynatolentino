import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';
import Experiencia from './components/Experiencia/Experiencia';
import AlemDoTrabalho from './components/AlemDoTrabalho/AlemDoTrabalho';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import './App.css';

function App() {
  console.log('App component is rendering');
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Hero />
        <Projetos />
        <Experiencia />
        <Sobre />
        <AlemDoTrabalho />
        <Contato />
      </div>
    </ThemeProvider>
  );
}

export default App;
