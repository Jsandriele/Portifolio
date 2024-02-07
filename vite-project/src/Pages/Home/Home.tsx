import "./Home.css";
import Perfil from "./perfil.png";





export const Home = () => {
  return (
    
    <div className="container">
   
      <div className="container-img">
      
        <div className="container-descricao">
          <h1 id="titulo">Olá,</h1>
          <p id="sub-titulo">
            Sou <strong>Jaqueline Sandriele</strong>
          </p>
          <p id="sub-titulo2">Desenvolvedora Front-End, Crio páginas Web.</p>
        </div>
        <img src={Perfil} alt="perfil" />
        
       
      </div>
     
    </div>
  );
};
