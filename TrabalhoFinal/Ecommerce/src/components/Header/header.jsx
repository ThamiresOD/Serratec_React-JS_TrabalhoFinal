import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href={"/home"}>Aquarium</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={"/carrinho"}>Carrinho</Nav.Link>
            <Nav.Link href={"/produto"}>Produtos</Nav.Link>
            <Nav.Link href={"/faleconosco"}>Fale Conosco</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
