import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PainPoints from './components/PainPoints.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import LeadForm from './components/LeadForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo"><Hero /><PainPoints /><HowItWorks /><LeadForm /></main>
      <Footer />
    </>
  );
}
