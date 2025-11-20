import { useParams } from 'react-router-dom'
import { getProductsByCategory, getProductsBySubcategory } from '../data/products'
import ProductCard from '../components/ProductCard'
import './CategoryPage.css'

export default function Calcados() {
  const { subcategoria } = useParams<{ subcategoria?: string }>()
  
  const products = subcategoria
    ? getProductsBySubcategory('calcados', subcategoria)
    : getProductsByCategory('calcados')

  const pageTitle = subcategoria
    ? subcategoria.charAt(0).toUpperCase() + subcategoria.slice(1).replace('-', ' ')
    : 'Calçados'

  return (
    <div className="category-page">
      <h1 className="category-title">{pageTitle}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && (
        <p className="no-products">Nenhum produto encontrado nesta categoria.</p>
      )}
    </div>
  )
}
