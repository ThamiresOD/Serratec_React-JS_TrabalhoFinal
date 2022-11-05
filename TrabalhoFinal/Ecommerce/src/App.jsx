import './App.css'
import { Routes, Route} from "react-router-dom"
import Login from './components/pages/Login'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import Produto from './components/pages/Produto'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home />}/>
      <Route path="/produto" element={<Produto />}/>
 
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App

