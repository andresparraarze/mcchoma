import About from './components/About';
import Contact from './components/Contact';
import Homemain from './components/Homemain';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Homemain />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
