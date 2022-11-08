import Header from '../../Header/header'
import Navbar from '../../Navbar'
import WaterBg from '../Videos/WaterBg.mp4';
import './style.css'

import { useContext } from "react";
import { Cartcontext } from "../../context/Context";


const Carrinho = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.preco * item.quantity;
  }, 0);
  return (
    <>
      <Header />
      <Navbar />
      <div className="cart">
        {state.map((item, index) => {
          return (
            <div className="card" key={index}>
              <img src={item.imagUrl} width="150" alt="" />
              <p>Produto: {item.titulo}</p>
              <p>Valor: R$ {item.quantity * item.preco}</p>
              <div className="quantity">
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => {
                    if (item.quantity > 1) {
                      dispatch({ type: "DECREASE", payload: item });
                    } else {
                      dispatch({ type: "REMOVE", payload: item });
                    }
                  }}>
                  -
                </button>
              </div>
              <button className='remover' onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                x
              </button>
            </div>
          );
        })}
        {state.length > 0 && (
          <div className="total" color='black'>
            <h2>Total: R$ {total}</h2>
          </div>
        )}
      </div>
      <div className='finalizar'>
        <button className='finalizar'>Finalizar compra e partir dar um tibum! 🐳</button>
      </div>
      <div className='videobg'>
        <video src={WaterBg} autoPlay loop muted />
      </div>

    </>
  );
};

export default Carrinho;