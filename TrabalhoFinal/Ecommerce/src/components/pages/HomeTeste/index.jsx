import { useState } from 'react'
import './style.css'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import slide1 from '../Images/slide1.jpg'
import slide2 from '../Images/slide2.jpg'
import slide3 from '../Images/slide3.jpg'

function HomeTeste() {


    return (
        <>
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

        </>
    )
}
export default HomeTeste