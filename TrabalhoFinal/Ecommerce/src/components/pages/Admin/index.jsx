import { useState, useEffect } from 'react'
import './style.css'
import api from  '../../../service/api'; 
import { Button, Container, Form, Stack } from 'react-bootstrap';
import CardProduto from '../../../components/Cards';


function Admin() {
  const [produto, setProduto] = useState([]);
  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState("")
   const [produtoList, setProdutoList] = useState([])
  
  useEffect(() => {
    const getProduto = async () => {
      const { data } = await api.get("/produtos");
      setProdutoList(data);      
    }
    getProduto();
  }, []);
  
  const handleProduto = async () => {
    if(titulo == "" || preco == "" || descricao == "" ) {
      alert("Preencha todos os campos")
      return
    }
const newProduto = {
titulo: titulo,
descricao: descricao,
preco: preco,

}

const {data} = await api.post("/produtos", newProduto)
setProdutoList([...produtoList, data])
console.log(data)


setTitulo("")
setDescricao("")
setPreco("")


  }

  return (
    
    <>
    <Container className="bg-secondary">
   <h1 className="text-center">Lista de Produtos</h1>

   <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Título:</Form.Label>
          <Form.Control type="text" placeholder="Insira o título" onChange={ e => setTitulo(e.target.value)} value={titulo} />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Preço:</Form.Label> 
        <Form.Control type="text" placeholder="Insira o Preço" onChange={ e => setPreco(e.target.value)} value={preco} /> 
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrição: </Form.Label>
          <Form.Control as="textarea" rows={3} onChange={ e => setDescricao(e.target.value)} value={descricao} />
        </Form.Group>
        <Stack className="mb-3">
        <Button className="float-end" onClick={handleProduto}>Cadastrar novo produto</Button>
        </Stack>
      </Form>

      <Stack>
            {produtoList.length > 0 && produtoList.map( item => {
            return <CardProduto key={item.id} produto={item}/>
          })}
      </Stack>


      </Container>

      </>
  )
}

export default Admin;
