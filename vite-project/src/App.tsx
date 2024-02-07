import "./App.css";
import { NavBar } from "./Pages/NavBar/NavBar";
import { Home } from "./Pages/Home/Home";
import { SobreMim } from "./Pages/SobreMim/SobreMim";
import { Skills } from "./Pages/Skills/Skills";
import { Projetos } from "./Pages/Projetos/Projetos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "./Components/Button/Button";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Button />
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<SobreMim />} path="/sobremim" />
          <Route element={<Skills />} path="/skills" />
          <Route element={<Projetos />} path="/projetos" />
        </Routes>
      </div>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
