import { useRef, useState } from 'react'
import { FiUser, FiHeart, FiShoppingBag, FiSearch, FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'
import './Header.css'

export default function Header() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearchIconClick = () => {
    searchInputRef.current?.focus()
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('mobile-menu-open')
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <FiMenu size={24} />
          </button>

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

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  )
}
