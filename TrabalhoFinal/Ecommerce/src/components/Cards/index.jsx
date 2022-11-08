import { Card, Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import './style.css'

const CardProduto = ({ produto, deleteProduto, setDescricao, setPreco, setImagUrl, setTitulo, setEditing }) => {
        

    const handleUpdate = () => {
        console.log(produto)
        setDescricao(produto.descricao)
        setPreco(produto.preco)
        setTitulo(produto.titulo)
        setImagUrl(produto.imagUrl)
        setEditing({id: produto.id, edit: true})
    }  
    
      
    return (
      <CardGroup className="teste">
        <Card>
          <Card.Img variant="top" src={produto.imagUrl}/>
          <Card.Body>
            <Card.Title>{produto.titulo}</Card.Title>
            <Card.Text>
            {produto.descricao}
            </Card.Text>
            <Button onClick={() => deleteProduto(produto.id)}>Excluir</Button>
            <Button className="ms-3" onClick={handleUpdate}>Editar</Button>
          </Card.Body>
          <Card.Footer>
          <small className="text-muted">Preço: R$ {produto.preco}</small>
          </Card.Footer>
        </Card>
        </CardGroup>
        
    );
    
  }
  
  export default CardProduto;