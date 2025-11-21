import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiX, FiChevronDown, FiUser, FiHeart } from 'react-icons/fi'
import './MobileMenu.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navigate = useNavigate()
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const handleNavigate = (path: string) => {
    navigate(path)
    onClose()
  }

  const toggleExpand = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu)
  }

  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h2>CARMENERE</h2>
          <button className="close-button" onClick={onClose}>
            <FiX size={24} />
          </button>
        </div>

        <div className="mobile-menu-icons">
          <button className="mobile-icon-button" title="Login">
            <FiUser size={22} />
            <span>Minha Conta</span>
          </button>
          <button className="mobile-icon-button" title="Favoritos">
            <FiHeart size={22} />
            <span>Favoritos</span>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <button className="mobile-menu-item" onClick={() => handleNavigate('/')}>
            Home
          </button>

          <button className="mobile-menu-item" onClick={() => handleNavigate('/ofertas')}>
            Ofertas
          </button>

          <button className="mobile-menu-item" onClick={() => handleNavigate('/novidades')}>
            Novidades
          </button>

          <div className="mobile-menu-dropdown">
            <button
              className="mobile-menu-item has-dropdown"
              onClick={() => toggleExpand('feminino')}
            >
              <span>Feminino</span>
              <FiChevronDown className={`chevron ${expandedMenu === 'feminino' ? 'rotated' : ''}`} />
            </button>
            {expandedMenu === 'feminino' && (
              <div className="mobile-submenu">
                <button onClick={() => handleNavigate('/feminino/blusas')}>Blusas</button>
                <button onClick={() => handleNavigate('/feminino/cachecois')}>Cachecóis</button>
                <button onClick={() => handleNavigate('/feminino/calcas')}>Calças</button>
                <button onClick={() => handleNavigate('/feminino/camisas')}>Camisas</button>
                <button onClick={() => handleNavigate('/feminino/camisetas')}>Camisetas</button>
                <button onClick={() => handleNavigate('/feminino/macacoes')}>Macacões</button>
                <button onClick={() => handleNavigate('/feminino/saias')}>Saias</button>
                <button onClick={() => handleNavigate('/feminino/shorts')}>Shorts</button>
                <button onClick={() => handleNavigate('/feminino/vestidos')}>Vestidos</button>
                <button className="view-all" onClick={() => handleNavigate('/feminino')}>
                  Ver todos
                </button>
              </div>
            )}
          </div>

          <div className="mobile-menu-dropdown">
            <button
              className="mobile-menu-item has-dropdown"
              onClick={() => toggleExpand('calcados')}
            >
              <span>Calçados</span>
              <FiChevronDown className={`chevron ${expandedMenu === 'calcados' ? 'rotated' : ''}`} />
            </button>
            {expandedMenu === 'calcados' && (
              <div className="mobile-submenu">
                <button onClick={() => handleNavigate('/calcados/botas')}>Botas</button>
                <button onClick={() => handleNavigate('/calcados/rasteiras')}>Rasteiras</button>
                <button onClick={() => handleNavigate('/calcados/salto-alto')}>Salto alto</button>
                <button onClick={() => handleNavigate('/calcados/tamancos')}>Tamancos</button>
                <button onClick={() => handleNavigate('/calcados/tenis')}>Tênis</button>
                <button className="view-all" onClick={() => handleNavigate('/calcados')}>
                  Ver todos
                </button>
              </div>
            )}
          </div>

          <div className="mobile-menu-dropdown">
            <button
              className="mobile-menu-item has-dropdown"
              onClick={() => toggleExpand('acessorios')}
            >
              <span>Acessórios</span>
              <FiChevronDown className={`chevron ${expandedMenu === 'acessorios' ? 'rotated' : ''}`} />
            </button>
            {expandedMenu === 'acessorios' && (
              <div className="mobile-submenu">
                <button onClick={() => handleNavigate('/acessorios/aneis')}>Anéis</button>
                <button onClick={() => handleNavigate('/acessorios/bolsas')}>Bolsas</button>
                <button onClick={() => handleNavigate('/acessorios/brincos')}>Brincos</button>
                <button onClick={() => handleNavigate('/acessorios/carteiras')}>Carteiras</button>
                <button onClick={() => handleNavigate('/acessorios/chapeus')}>Chapéus</button>
                <button onClick={() => handleNavigate('/acessorios/cintos')}>Cintos</button>
                <button onClick={() => handleNavigate('/acessorios/colares')}>Colares</button>
                <button onClick={() => handleNavigate('/acessorios/pulseiras')}>Pulseiras</button>
                <button className="view-all" onClick={() => handleNavigate('/acessorios')}>
                  Ver todos
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  )
}
