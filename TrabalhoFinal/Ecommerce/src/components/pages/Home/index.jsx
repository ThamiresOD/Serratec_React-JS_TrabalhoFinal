import { useState }from 'react'
import './style.css'
import Header from '../../Header/header'
import Footer from '../../Footer/footer'
import fotoProduto from '../Images/produto.jpg'
import slide1 from '../Images/slide1.jpg'
import slide2 from '../Images/slide2.jpg'
import slide3 from '../Images/slide3.jpg'
import { Stack, Carousel, Card, Button, Container } from 'react-bootstrap'


function Home() {
    const [itemList, setItemList] = useState(item)
      
   
    const item = [
        {
            id: 1,
            titulo: "Produto 1",
            descricao: "Descrição 1",
            valor: 15.00,
            categoria: 2
        },
        {
            id: 2,
            titulo: "Produto 2",
            descricao: "Descrição 2",
            valor: 25.00,
            categoria: 1
        },
        {
            id: 3,
            titulo: "Produto 3",
            descricao: "Descrição 3",
            valor: 35.00,
            categoria: 2
        }
    ]

    const handleItem = () => {
        const newItem = {
            id: id + 1,
            titulo: titulo,
            descricao: descricao,
            valor: valor,
            categoria: categoria
        }
    }

    setItemList([...itemList, newItem])

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

                <Stack>
                    <h1 className='text-center'>Produtos:</h1>
                    {itemList.map(i => {
                        return <h1 key={i.id}>{i.titulo}</h1>
                    })}
                    <Button className='float-center' onClick={() => {}}>Add - Carrinho</Button>
                </Stack>

                <div className='tituloCategoria'>
                    <h1>Menu de Categorias</h1>
                </div>

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
            </main>

            <Footer />
        </>
    )
}

export default Home
