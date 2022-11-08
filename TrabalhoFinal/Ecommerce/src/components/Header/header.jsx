import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../pages/Images/logo.png";
import "./style.css";
import { AuthContext } from "../contexts/auth";
import { useContext } from "react";

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
            <Navbar.Brand className="nomeLoja" href={"/home"}>Aquarium</Navbar.Brand>
          </div>
          <div>

          <Nav className="me-auto">
            <Nav.Link href={"/carrinho"}>Carrinho</Nav.Link>
            <Nav.Link href={"/produto"}>Produtos</Nav.Link>
            <Nav.Link href={"/sobrenos"}>Sobre Nós</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
          
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
