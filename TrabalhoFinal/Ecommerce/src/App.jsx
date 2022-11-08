import './App.css'
import { Routes, Route, Navigate } from "react-router-dom"
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Produto from './components/pages/Produto'
import SobreNos from './components/pages/SobreNos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrinho from './components/pages/Carrinho'

import { AuthContext, AuthProvider } from "./components/contexts/auth"
import { useContext } from 'react'




function App() {
  const Private = ({ children }) => {

    const { loading } = useContext(AuthContext);
    
    if(loading){
      return <div className='loading'>Carregando...</div>
    }

    return children;
  }

  return (
    <AuthProvider>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </AuthProvider>
  )
}

export default App

