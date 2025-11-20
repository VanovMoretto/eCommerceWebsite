import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Feminino from './pages/Feminino'
import Calcados from './pages/Calcados'
import Acessorios from './pages/Acessorios'
import Ofertas from './pages/Ofertas'
import Novidades from './pages/Novidades'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feminino" element={<Feminino />} />
          <Route path="/feminino/:subcategoria" element={<Feminino />} />
          <Route path="/calcados" element={<Calcados />} />
          <Route path="/calcados/:subcategoria" element={<Calcados />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/acessorios/:subcategoria" element={<Acessorios />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/novidades" element={<Novidades />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
