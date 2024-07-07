import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer'; // Importa el componente Footer

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer /> {/* Añade el Footer aquí */}
    </div>
  );
};

export default App;
