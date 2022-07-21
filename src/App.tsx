import About from "./components/About";
import Homemain from "./components/Homemain";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <div >
      <Navbar/>
      <Homemain/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
