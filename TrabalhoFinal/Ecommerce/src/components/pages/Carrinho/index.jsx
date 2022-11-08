import Header from '../../Header/header'
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
    <Header/>
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
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total" color='black'>
          <h2>Total: R$ {total}</h2>
        </div>
      )}
    </div>
   
    </>
  );
};

export default Carrinho;