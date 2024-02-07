import "./Sobre.css";


export const SobreMim = () => {
  return (
    <div className="container-sobre">
      <h2 id="container-titulo">Sobre Mim</h2>
      <div className="container-2">
        <img src='' alt="descricao" id="descricao-foto" />
        <div className="container-3">
          <div className="container-descricao1">
            <div className="container-descricao2">
              <p>
                <span id="oi">Oi,</span>
                <br />
                <span>
                  é com imenso prazer que quero te contar um pouco da minha
                  história. Sou <strong>Jaqueline Sandriele</strong>{" "}
                  desenvolvedora front-end, formada pela SOFTEX-RECIFE(FAP) em
                  janeiro de 2024, empreendedora, instrutora voluntária de
                  música do projeto social (Musicos Adoradores).
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
