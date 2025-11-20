import { useRef } from 'react'
import { FiUser, FiHeart, FiShoppingBag, FiSearch } from 'react-icons/fi'
import './Header.css'

export default function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSearchIconClick = () => {
    searchInputRef.current?.focus()
  }

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
            ref={searchInputRef}
            type="text" 
            placeholder="O que você procura?" 
            className="search-input"
          />
          <button 
            className="search-button"
            onClick={handleSearchIconClick}
            title="Pesquisar"
            type="button"
          >
            <FiSearch className="search-icon" />
          </button>
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
