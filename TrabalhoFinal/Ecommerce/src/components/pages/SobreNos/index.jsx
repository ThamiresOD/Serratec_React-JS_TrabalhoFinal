import Header from "../../Header/header";
import thamires from "../Images/thamires.jpg";
import fabio from "../Images/fabio.jpg";
import erick from "../Images/erick.jpg";
import thaisa from "../Images/thaisa.jpg";
import andre from "../Images/andre.jpg";
import slide1 from '../Images/slide1.jpg';
import slide2 from '../Images/slide2.jpg';
import slide3 from '../Images/slide3.jpg';
import WaterBg from '../Videos/WaterBg.mp4';
import { Carousel } from "react-bootstrap";
import Navbar from '../../Navbar'
import "./style.css";

function SobreNos() {
  return (
    <>
      <Header />
      <Navbar/>
      <div className="sobreNos">
        <div className="texto">
          <h1 className="titulo">Sobre Nós</h1>
          <div className='carousel'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>Um pescador sempre vê outro pescador de longe!</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Rio bom é o que a gente não sabe o peixe que tem!</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>O peixe mesmo na rede do pescador, ainda carrega o cheiro do mar!</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
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
            <a href="https://github.com/Andre-Toigo">André Toigo</a>
          </div>
          <div className="informacao">
            <img src={thaisa} alt="" />
            <a href="https://github.com/thaisamuniz89">Thaisa Muniz</a>
          </div>
        </div>
      </div>
      <div className='videobg'>
        <video src={WaterBg} autoPlay loop muted />
      </div>
    </>
  );
}
export default SobreNos;
