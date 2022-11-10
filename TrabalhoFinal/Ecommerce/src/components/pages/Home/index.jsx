import "./style.css";
import WaterBg from "../Videos/WaterBg.mp4";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import Navbar from "../../Navbar";
import Busca from "../Busca/index";
import React from "react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Home = () => {
  const [data, setdata] = useState([]);
  const [itemFiltrado, setItemFiltrado] = useState(data);
  const [busca, setBusca] = useState("");
  const [index, setIndex] = useState(0)

  const fetchData = async () => {
    const response = await axios.get(
      "https://63657c20046eddf1baeeb094.mockapi.io/ecommerce/produtos"
    );
    setdata(response.data);
    setItemFiltrado(response.data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  // console.log(Globalstate);

  useEffect(() => {
    const resultados = itemFiltrado.filter((produto) =>
      produto.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setdata(resultados);
    console.log(resultados);
  }, [busca]);

  return (
    <>
      <Header />
      <Navbar />
      <Busca value={busca} onChange={(value) => setBusca(value)} />
      <div className="home row container-fluid">
        {data.map((item, index) => (
          <div className="card col-3" key={index}>
            <img src={item.imagUrl} width="180" alt="" />
            <p>{item.titulo}</p>
            <p>{item.descricao}</p>
            <h3>R$. {item.preco}</h3>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => dispatch({ type: "ADD", payload: item })}
            >
              adicionar
            </button>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
