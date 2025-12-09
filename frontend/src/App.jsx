import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CartSidebar from './components/CartSidebar.jsx';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import CartPage from './pages/CartPage.jsx';
import About from './pages/About.jsx';
import Stores from './pages/Stores.jsx';
import Contact from './pages/Contact.jsx';


export const CartContext = React.createContext();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [...prev, { ...product, qty }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev =>
        prev.map(item => (item.id === id ? { ...item, qty } : item))
      );
    }
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const contextValue = {
    cartItems,
    addToCart,
    updateQty,
    clearCart,
    cartTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gray-100">
        <Header onOpenCart={() => setCartOpen(true)} />
        <main className="flex-1 bg-gray-50 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/lojas" element={<Stores />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartContext.Provider>
  );

}

export default App;
