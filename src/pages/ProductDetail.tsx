import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProductById } from '../data/products'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = id ? getProductById(id) : undefined

  const [cep, setCep] = useState('')
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  if (!product) {
    return (
      <div className="product-detail-container">
        <div className="product-not-found">
          <h2>Produto não encontrado</h2>
          <button onClick={() => navigate('/')} className="back-button">
            Voltar para a página inicial
          </button>
        </div>
      </div>
    )
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  const handleAddToCart = () => {
    alert('Funcionalidade será implementada em breve!')
  }

  const handleCalculateCep = () => {
    if (cep.length === 8) {
      alert('Funcionalidade de cálculo de frete será implementada em breve!')
    } else {
      alert('Por favor, insira um CEP válido com 8 dígitos')
    }
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        {/* Image Section */}
        <div className="product-detail-image-section">
          <div
            className={`product-detail-image-container ${isZoomed ? 'zoomed' : ''}`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
              style={
                isZoomed
                  ? {
                      transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                    }
                  : {}
              }
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="product-detail-info-section">
          <h1 className="product-detail-title">{product.name}</h1>

          <div className="product-detail-row">
            <span className="product-detail-label">Cor:</span>
            <span className="product-detail-value">{product.color}</span>
          </div>

          <div className="product-detail-row">
            <span className="product-detail-label">Tamanho:</span>
            <span className="product-detail-value">{product.size}</span>
          </div>

          <div className="product-detail-price">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </div>

          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Adicionar ao carrinho
          </button>

          <div className="cep-section">
            <label className="cep-label">Calcular frete:</label>
            <div className="cep-input-group">
              <input
                type="text"
                placeholder="Digite seu CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                className="cep-input"
                maxLength={8}
              />
              <button onClick={handleCalculateCep} className="cep-button">
                Calcular
              </button>
            </div>
          </div>

          <div className="product-description">
            <h3 className="description-title">Descrição</h3>
            <p className="description-text">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
