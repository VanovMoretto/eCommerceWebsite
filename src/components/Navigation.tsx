import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navigation.css'

interface DropdownItem {
  label: string
  path?: string
  isBold?: boolean
}

interface NavItem {
  label: string
  path: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Ofertas',
    path: '/ofertas',
  },
  {
    label: 'Novidades',
    path: '/novidades',
  },
  {
    label: 'Feminino',
    path: '/feminino',
    dropdown: [
      { label: 'Blusas', path: '/feminino/blusas' },
      { label: 'Cachecóis', path: '/feminino/cachecois' },
      { label: 'Calças', path: '/feminino/calcas' },
      { label: 'Camisas', path: '/feminino/camisas' },
      { label: 'Camisetas', path: '/feminino/camisetas' },
      { label: 'Macacões', path: '/feminino/macacoes' },
      { label: 'Saias', path: '/feminino/saias' },
      { label: 'Shorts', path: '/feminino/shorts' },
      { label: 'Vestidos', path: '/feminino/vestidos' },
      { label: 'Ver todos', path: '/feminino', isBold: true },
    ],
  },
  {
    label: 'Calçados',
    path: '/calcados',
    dropdown: [
      { label: 'Botas', path: '/calcados/botas' },
      { label: 'Rasteiras', path: '/calcados/rasteiras' },
      { label: 'Salto alto', path: '/calcados/salto-alto' },
      { label: 'Tamancos', path: '/calcados/tamancos' },
      { label: 'Tênis', path: '/calcados/tenis' },
      { label: 'Ver todos', path: '/calcados', isBold: true },
    ],
  },
  {
    label: 'Acessórios',
    path: '/acessorios',
    dropdown: [
      { label: 'Anéis', path: '/acessorios/aneis' },
      { label: 'Bolsas', path: '/acessorios/bolsas' },
      { label: 'Brincos', path: '/acessorios/brincos' },
      { label: 'Carteiras', path: '/acessorios/carteiras' },
      { label: 'Chapéus', path: '/acessorios/chapeus' },
      { label: 'Cintos', path: '/acessorios/cintos' },
      { label: 'Colares', path: '/acessorios/colares' },
      { label: 'Pulseiras', path: '/acessorios/pulseiras' },
      { label: 'Ver todos', path: '/acessorios', isBold: true },
    ],
  },
]

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleDropdownEnter = (label: string) => {
    setOpenDropdown(label)
  }

  const handleDropdownLeave = () => {
    setOpenDropdown(null)
  }

  const handleItemClick = (path: string) => {
    navigate(path)
    setOpenDropdown(null)
  }

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="nav-item-wrapper"
            onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className="nav-link"
              onClick={() => handleItemClick(item.path)}
            >
              {item.label}
            </button>

            {item.dropdown && openDropdown === item.label && (
              <div className="dropdown-menu">
                {item.dropdown.map((dropdownItem, index) => (
                  <div key={dropdownItem.label}>
                    {index > 0 && <div className="dropdown-divider" />}
                    <button
                      className={`dropdown-item ${
                        dropdownItem.isBold ? 'dropdown-item-bold' : ''
                      }`}
                      onClick={() =>
                        handleItemClick(dropdownItem.path || item.path)
                      }
                    >
                      {dropdownItem.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}
