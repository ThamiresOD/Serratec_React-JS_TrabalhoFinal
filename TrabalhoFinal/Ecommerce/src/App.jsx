import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom"
import Login from './components/pages/Login'


function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login/>} />





      {/* 404 */}
      <Route path="/**" element={<NotFound />} />
    </Routes>
  )
}

export default App

