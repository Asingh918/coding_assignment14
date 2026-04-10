import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Work from './components/Work/Work';
import Skills from './components/Skills/Skills';
import Resources from './components/Resources/Resources';
import DeveloperSetup from './components/DeveloperSetup/DeveloperSetup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Resources />
        <DeveloperSetup />
      </main>
      <Footer />
    </>
  );
}

export default App;
