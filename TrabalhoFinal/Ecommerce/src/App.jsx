import './App.css'
import { Routes, Route} from "react-router-dom"
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Produto from './components/pages/Produto'
import FaleConosco from './components/pages/FaleConosco'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrinho from './components/pages/Carrinho'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/carrinho" element={<Carrinho/>} />
      <Route path="/home" element={<Home />}/>
      <Route path="/produto" element={<Produto />}/>
      <Route path="*" element={<NotFound />} />
      <Route path="/faleconosco" element={<FaleConosco />} />
    </Routes>
  )
}

export default App

