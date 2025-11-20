import React from 'react';
import './Header.css';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">ClothesShop</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <div className="cart-icon">
            🛒 <span className="cart-badge">{cartItemCount}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
