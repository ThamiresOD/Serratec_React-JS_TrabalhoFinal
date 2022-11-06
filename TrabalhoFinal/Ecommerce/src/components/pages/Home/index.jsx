import './style.css'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import fotoProduto from '../Images/produto.jpg'
import slide1 from '../Images/slide1.jpg'
import slide2 from '../Images/slide2.jpg'
import slide3 from '../Images/slide3.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion';


function Home() {
    return (
        <>
            <Header />

            <header>
                <h3>Home 🦑</h3>
            </header>

            <main>

                <div className='caroussel'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5>Um pescador sempre vê outro pescador de longe!</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide2}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Rio bom é o que a gente não sabe o peixe que tem!</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide3}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>O peixe mesmo na rede do pescador, ainda carrega o cheiro do mar!</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='tituloCategoria'>
                    <h1>Menu de Categorias</h1>
                </div>

                <div className='accordion'>

                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Categoria 1</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Categoria 2</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                <div className='categorias'>
                                    <Card className="categoria" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={fotoProduto} />
                                        <Card.Body>
                                            <Card.Title>Card Title: categoria 1</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="Dark">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                    <Card className="categoria" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={fotoProduto} />
                                        <Card.Body>
                                            <Card.Title>Card Title: categoria 2</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="Dark">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>





            </main>

            <Footer />
        </>
    )
}

export default Home
