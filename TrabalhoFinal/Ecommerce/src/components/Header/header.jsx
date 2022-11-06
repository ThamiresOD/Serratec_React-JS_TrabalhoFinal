import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../pages/Images/logo.png";
import "./style.css";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div>
          <img src={Logo} width="80px"></img>
          <Navbar.Brand href={"/home"}>Aquarium</Navbar.Brand>
          </div>
          <div>
          <Nav className="me-auto">
            <Nav.Link href={"/carrinho"}>Carrinho</Nav.Link>
            <Nav.Link href={"/produto"}>Produtos</Nav.Link>
            <Nav.Link href={"/faleconosco"}>Fale Conosco</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
