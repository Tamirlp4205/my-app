import "./App.css";
import Main from "./components/main";
import About from "./components/about";
import Skill from "./components/skills";
import EXP from "./components/exp"
import Work from "./components/work";

function App() {
  return (
    <div>
      <div className="md:">
        <Main />
      </div>
      <div>
        <About />
      </div>
      <div className="md:flex justify-center">
        <Skill />
      </div>
      <div>
        <EXP/>
      </div>
      <div>
        <Work/>
      </div>
    </div>
  );
}

export default App;
