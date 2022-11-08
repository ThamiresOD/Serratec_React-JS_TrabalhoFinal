import './style.css'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import Navbar from '../../Navbar';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import  {Cartcontext}  from "../../context/Context";

const Home = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("https://63657c20046eddf1baeeb094.mockapi.io/ecommerce/produtos");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
   
  return (
             <>
            <Header />
            <Navbar/>

            {/* <main>
                <div className='caroussel'>
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
                </div> */}
                {/* </main>  */}
                <div className="home">
                        {data.map((item, index) => {
                            item.quantity = 1;
                            return (
                            <div className="card" key={index}>
                                <img src={item.imagUrl} width="180" alt="" />
                                <p>{item.titulo}</p>
                                <p>{item.descricao}</p>
                                <h3>R$. {item.preco}</h3>
                                <button type="button" class="btn btn-dark" onClick={() => dispatch({ type: "ADD", payload: item })}>
                                adicionar
                                </button>
                            </div>
                            );
                })}
                  </div>             
                
                <Footer />
                </> 
    )
}

export default Home;
