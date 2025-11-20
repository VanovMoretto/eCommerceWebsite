import Header from './components/Header'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main-content">
        {/* Conteúdo será adicionado aqui */}
      </main>
    </div>
  )
}

export default App
