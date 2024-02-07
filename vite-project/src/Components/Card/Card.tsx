import "./Card.css";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";

export const Card = () => {
  return (
    <div className="container-Card-Skills">
      <h2 id="titulo-skills">Skills</h2>
      <div className="container-card">
        
          <div className="card-html">
            <TbBrandHtml5 style={{ 
                
                fontSize: "200px" }} />
            <h3>HTML5</h3>
          </div>
          <div className="card-css">
            <TbBrandCss3 style={{ fontSize: "200px" }} />
            <h3>Css3</h3>
          </div>
          <div className="card-javascript">
            <TbBrandJavascript style={{ fontSize: "200px" }} />
            <h3>JavaScript</h3>
          </div>
          <div className="card-react">
            <TbBrandReact style={{ fontSize: "200px" }} />
            <h3>React</h3>
          </div>
          <div className="card-typescript">
            <TbBrandTypescript style={{ fontSize: "200px" }} />
            <h3>TypeScript</h3>
          </div>
        
      </div>
    </div>
  );
};
