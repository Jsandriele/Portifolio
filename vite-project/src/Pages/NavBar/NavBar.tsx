import { Toggle } from "../../Components/Toggle/Toggle";
import "./Nav.css";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

export const NavBar = () => {
  return (
    <nav 
      className="header"
      id="header"
      
      >
      <h1 className="header-logo">
        <a href="home">JS</a>
      </h1>
      <div className="header-links">
        <ul>
          <li>
            <a href="home" id="home">Home</a>
          </li>
          <li>
            <a href="SobreMim">Sobre Mim</a>
          </li>
          <li>
            <a href="skills">Skills</a>
          </li>
          <li>
            <a href="projetos">Projetos</a>
          </li>
        </ul>
      </div>
      <div className="header-toggle">
        <FiSun 
            style={{marginRight: '10px'}}
        />
        <Toggle  />
        <FiMoon 
             style={{marginLeft: '10px'}}
        />
      </div>
    </nav>
  );
};
