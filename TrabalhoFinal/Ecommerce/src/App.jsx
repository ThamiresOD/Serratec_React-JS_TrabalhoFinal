import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom"
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />

      {/* 404 */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App

