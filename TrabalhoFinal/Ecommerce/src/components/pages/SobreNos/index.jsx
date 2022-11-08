import Header from "../../Header/header";
import thamires from "../Images/thamires.jpg";
import fabio from "../Images/fabio.jpg";
import erick from "../Images/erick.jpg";
import thaisa from "../Images/thaisa.jpg";
import andre from "../Images/andre.jpg";
import "./style.css";

function SobreNos() {
  return (
    <>
      <Header />
      <div className="sobreNos">
        <div className="texto">
          <h1 className="titulo">Sobre Nós</h1>
          <h5>texto</h5>
        </div>
        <div className="contatos">
          <h1 className="titulo">Contatos</h1>
          <div className="informacao">
            <img src={erick} alt="" />
            <a href="https://github.com/ErickNotFound">Erick Viana</a>
          </div>
          <div className="informacao">
            <img src={thamires} alt="" />
            <a href="https://github.com/ThamireOD">Thamires Ouverney</a>
          </div>
          <div className="informacao">
            <img src={fabio} alt="" />
            <a href="https://github.com/Fabio-Gurgel">Fábio Gurgel</a>
          </div>
          <div className="informacao">
            <img src={andre} alt="" />
            <a href="https://github.com/Andre-Toigo">André Roigo</a>
          </div>
          <div className="informacao">
            <img src={thaisa} alt="" />
            <a href="https://github.com/thaisamuniz89">Thaisa Muniz</a>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
export default SobreNos;
