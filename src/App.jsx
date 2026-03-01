import Navbar from "./assets/components/Navbar";
import "./App.css";
import Hero from "./assets/components/Hero";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;