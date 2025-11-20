import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import LoadingSpinner from './components/LoadingSpinner';
import type { Product } from './types/Product';
import { productsApi } from './api/products';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productsApi.getAllProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to load products. Please make sure the backend server is running.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    setCartItemCount(prev => prev + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="app">
      <Header cartItemCount={cartItemCount} />
      <main className="main-content">
        <div className="hero">
          <h1>Welcome to ClothesShop</h1>
          <p>Discover the latest trends in fashion</p>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="error-message">
            <h2>⚠️ {error}</h2>
            <button onClick={fetchProducts} className="retry-btn">Retry</button>
          </div>
        ) : (
          <ProductList products={products} onAddToCart={handleAddToCart} />
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2024 ClothesShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
