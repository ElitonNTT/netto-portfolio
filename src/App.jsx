import About from "./sections/About";
import Contato from "./sections/Contato";
import Inicio from "./sections/Inicio";
import Projetos from "./sections/Projetos";

function App() {
  return (
    <div className="App">
      <Inicio />
      <About />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
