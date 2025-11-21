import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { getProductById } from '../data/products'
import './ProductDetail.css'

const colorMap: { [key: string]: string } = {
  'Branca': '#FFFFFF',
  'Bege': '#F5F5DC',
  'Azul': '#4169E1',
  'Rosa': '#FFB6C1',
  'Preta': '#000000',
  'Vermelho': '#DC143C',
  'Marrom': '#8B4513',
  'Nude': '#E3BC9A',
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = id ? getProductById(id) : undefined

  const [cep, setCep] = useState('')
  const [isZoomed, setIsZoomed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedSize, setSelectedSize] = useState(product?.size || 'M')
  const [selectedImage, setSelectedImage] = useState(0)

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

  const installmentValue = product.price / 9
  const colorCode = colorMap[product.color] || '#CCCCCC'
  
  // Define tamanhos baseado na categoria
  const sizes = product.category === 'calcados' ? ['34', '35', '36', '37', '38', '39', '40'] : ['P', 'M', 'G']
  
  // Simular múltiplas imagens (por enquanto usamos a mesma)
  const images = [product.image, product.image, product.image]

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        {/* Image Section */}
        <div className="product-detail-image-section">
          <div className="image-thumbnails">
            {images.map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
          <div
            className={`product-detail-image-container ${isZoomed ? 'zoomed' : ''}`}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={images[selectedImage]}
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

          <div className="product-detail-price-section">
            <div className="product-detail-price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
            <p className="product-detail-installment">
              9x de R$ {installmentValue.toFixed(2).replace('.', ',')} s/ juros
            </p>
          </div>

          <div className="product-detail-color-row">
            <span className="product-detail-label">Cor: {product.color}</span>
            <div className="color-circle" style={{ backgroundColor: colorCode }}></div>
          </div>

          <div className="product-detail-row size-selection">
            <span className="product-detail-label">Tamanho:</span>
            <div className="size-buttons">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="action-buttons">
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
