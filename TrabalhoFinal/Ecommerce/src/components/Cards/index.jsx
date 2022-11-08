import { Card, Button } from 'react-bootstrap';

const CardProduto = ({ produto }) => {
    return (
        <Card className="mb-2">
            <Card.Header as="h5">{produto.titulo}</Card.Header>
            <Card.Body>
                <Card.Text>
                {produto.descricao}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardProduto
