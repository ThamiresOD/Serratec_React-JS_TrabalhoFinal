import "./style.css";
import { useState, useContext } from "react";
import Header from "../../Header/header";
import React from "react";
import { AuthContext } from "../../contexts/auth";
import WaterBg from '../Videos/WaterBg.mp4';

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clique = () => { };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login efetuado", { email, password });

    login(email, password);
  };

  return (
    <>
      <Header />
      <div id="login">
        <h1 className="title">Acesse sua conta:</h1>
        <form className="form" onSubmit={handleLogin}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="actions">
            <button className="entrar" type="submit">
              Entrar como Cliente
            </button>
            <a className="vendedor" href="/admin">Entrar como Vendedor</a>
          </div>
        </form>
      </div>
      <div className='videobg'>
        <video src={WaterBg} autoPlay loop muted />
      </div>
    </>
  );
};

export default Login;
