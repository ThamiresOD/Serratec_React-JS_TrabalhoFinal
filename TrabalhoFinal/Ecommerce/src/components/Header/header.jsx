import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../pages/Images/logo.png";
import "./style.css";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout();
    navigate("/");
  }
  

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <div className="logo">
            <img src={Logo} width="80px"></img>
            <Navbar.Brand className="nomeLoja" as={Link} to={"/home"}>Aquarium</Navbar.Brand>
          </div>
          <div>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/carrinho"}>Carrinho</Nav.Link>
            <Nav.Link as={Link} to={"/sobrenos"}>Sobre Nós</Nav.Link>
            <Nav.Link className="logout" onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
