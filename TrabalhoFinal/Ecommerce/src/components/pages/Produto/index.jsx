
import './style.css'
import Card from 'react-bootstrap/Card'

function Produto() {
    return (
        <main>
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
        </main>
    )
}
export default Produto