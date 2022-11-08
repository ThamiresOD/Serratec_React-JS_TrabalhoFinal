import "./style.css";
import { useState, useContext } from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
  from 'mdb-react-ui-kit';

import { AuthContext } from "../../contexts/auth";




const Login = () => {
  const { authenticated, login } = useContext
  (AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Login efetuado", { email, password });

    login(email, password);
  };

  return (
    <>
      <Header />

      <div id="login">
        <h1 className="title">Acesse sua conta:</h1>
        <p>{String(authenticated)}</p>
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
            <button className="entrar" type="submit">Entrar</button>
          </div>
        </form>
      </div>



      {/* <MDBContainer fluid>
        <MDBRow>

          <MDBCol sm='6' className="login">

            <div className='d-flex flex-row ps-5 pt-5'>
              <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
            </div>

            <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

              <h3 className="fw-normal mb-3 ps-5 pb-3" style={{ letterSpacing: '1px' }}>Log in</h3>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Senha' id='formControlLg' type='password' size="lg" />

              <Button variant="primary" className="botao">ENTRAR</Button>{' '}


            </div>

          </MDBCol>

          <MDBCol sm='6' className='d-none d-sm-block px-0'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
              alt="Login image" className="w-100 imagem" style={{ objectFit: 'cover', objectPosition: 'left' }} />
          </MDBCol>

        </MDBRow>

      </MDBContainer> */}



    </>
  );
};

export default Login;
