import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer'; 
import CartProvider from './components/CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <Header />
        <ProductList />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;



