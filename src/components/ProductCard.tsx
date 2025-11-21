import { useNavigate } from 'react-router-dom'
import { Product } from '../data/products'
import './ProductCard.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/produto/${product.id}`)
  }

  const installmentValue = product.price / 9

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
        <p className="product-installment">
          9x de R$ {installmentValue.toFixed(2).replace('.', ',')} s/ juros
        </p>
      </div>
    </div>
  )
}
