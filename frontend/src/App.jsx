// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './pages/CartContext.jsx';
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
import PaymentPage from './pages/PaymentPage.jsx';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header
          onOpenCart={() => {
            // agora o CartSidebar pega o estado do contexto
          }}
        />
        <main className="flex-1 bg-gray-50 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<CartPage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/lojas" element={<Stores />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/pagamento" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
        {/* CartSidebar pode usar o CartContext por dentro */}
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default App;
