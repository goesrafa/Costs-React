import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

/**importações criadas */
import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

/**Importação dos Layouts */
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Sobre />}></Route>
          <Route exact path="/contact" element={<Contato />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>

        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
