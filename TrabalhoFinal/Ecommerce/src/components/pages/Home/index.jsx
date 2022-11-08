
import './style.css'
import WaterBg from '../Videos/WaterBg.mp4'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'

import React from 'react'

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

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
            <div className="home col-3 container-fluid">
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
            <div className='videobg'>
                <video src={WaterBg} autoPlay loop muted />
            </div>
            <Footer />
        </>

    )
}

export default Home;
