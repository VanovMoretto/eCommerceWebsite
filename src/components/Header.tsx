import { FiUser, FiHeart, FiShoppingBag, FiSearch } from 'react-icons/fi'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <h1>CARMENERE</h1>
        </div>

        {/* Search Bar */}
        <div className="header-search">
          <input 
            type="text" 
            placeholder="O que você procura?" 
            className="search-input"
          />
          <FiSearch className="search-icon" />
        </div>

        {/* Right Icons */}
        <div className="header-icons">
          <button className="icon-button" title="Login">
            <FiUser size={24} />
          </button>
          <button className="icon-button" title="Favoritos">
            <FiHeart size={24} />
          </button>
          <button className="icon-button" title="Carrinho">
            <FiShoppingBag size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}
