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

                <div>
                    <h1>Menu de Categorias</h1>
                </div>

                <div className='Categorias'>
                    <Card className="categoria1" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={fotoProduto} />
                        <Card.Body>
                            <Card.Title>Card Title: categoria 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className="categoria2" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={fotoProduto} />
                        <Card.Body>
                            <Card.Title>Card Title: categoria 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
                
            </main>

            <Footer />
        </>
    )
}

export default Home
