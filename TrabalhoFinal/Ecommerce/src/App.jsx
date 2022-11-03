import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom"


function App() {

  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contatos" element={<Contatos />} />
      <Route path="/contatos/:id" element={<ContatoDetalhes />} /> */}
      <Route path="*" element={<h1>Erro 404 - Página não encontrada</h1>} />
    </Routes>
  )
}

export default App
