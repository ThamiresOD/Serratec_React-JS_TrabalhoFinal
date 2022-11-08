
import './style.css'
import { Card, Button } from 'react-bootstrap'

const card = [
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

const Produto = ({ item }) => {
    return (
        <Card className="mb-2">
            {/* <Card.Img variant="top" src={""} /> */}
            <Card.Body>
                <Card.Title>{card.titulo}</Card.Title>
                <Card.Text>{card.descricao}</Card.Text>
                <Card.Value>{card.valor}</Card.Value>
                <Button variant="Dark">Adicionar ao Carrinho</Button>
            </Card.Body>
        </Card>
    )
}
export default Produto