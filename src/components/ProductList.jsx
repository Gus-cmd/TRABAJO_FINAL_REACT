import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import UltrabookImage from '../assets/img/productos/Ultrabook.jpeg';
import DellImage from '../assets/img/productos/Dell.jpeg';
import LenovoGamerImage from '../assets/img/productos/lenovo.jpeg';
import LenovoIdeapadImage from '../assets/img/productos/Lenovo ideapad.jpeg';
import AcerImage from '../assets/img/productos/LaptopAcer.jpeg';
import Ultrabook1Image from '../assets/img/productos/UltrabookM13.jpeg';
import DualSenseEdgeImage from '../assets/img/productos/MANDO-DUALSENSE-EDGE-PARA-PS5-BLANCO.jpeg';
import AirPodsMaxImage from '../assets/img/productos/airpodsmax.jpg';
import iPhone14Pro256Image from '../assets/img/productos/Iphone14pro256gb.jpeg';
import iPhone14ProMaxImage from '../assets/img/productos/iphone14promax.jpeg';
import iPhone14Pro512Image from '../assets/img/productos/iphone14pro.jpeg';
import MacBookAir13Image from '../assets/img/productos/macbook-air-13-m1.jpeg';

const productos = [
  {
    id: 1,
    categoria: 'laptops',
    nombre: 'Laptop Ultrabook',
    descripcion: 'Procesador Intel Core i7, 16GB RAM, SSD 512GB',
    precio: 1899.00,
    imagen: UltrabookImage
  },
  {
    id: 2,
    categoria: 'laptops',
    nombre: 'Laptop Gaming Dell',
    descripcion: 'Intel Core i5-10Gen RAM 32GB SSD 1TB 4GB GTX1650 15.6"',
    precio: 5000.00,
    imagen: DellImage
  },
  {
    id: 3,
    categoria: 'laptops',
    nombre: 'Laptop Gamer Lenovo',
    descripcion: 'Laptop Gamer Lenovo IdeaPad Gaming 3 15ARH 7000 16GB RAM 512GB SSD',
    precio: 3800.00,
    imagen: LenovoGamerImage
  },
  {
    id: 4,
    categoria: 'laptops',
    nombre: 'Laptop Lenovo Ideapad',
    descripcion: 'Laptop Lenovo IdeaPad Gaming 3 15ARH7 15.6 pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 3500.00,
    imagen: LenovoIdeapadImage
  },
  {
    id: 5,
    categoria: 'laptops',
    nombre: 'Laptop Acer',
    descripcion: 'Laptop Acer A3 15ARH7 15.6 pulgadas 16:9 R7 7000 16GB RAM 512GB SSD',
    precio: 2000.00,
    imagen: AcerImage
  },
  {
    id: 6,
    categoria: 'laptops',
    nombre: 'Laptop Ultrabook Surface 5',
    descripcion: 'Laptop UltrabookM13 Surface 5 Gen12 15ARH7 7000 16GB RAM 512GB SSD',
    precio: 4300.00,
    imagen: Ultrabook1Image
  },
  {
    id: 7,
    categoria: 'accesorios',
    nombre: 'Control PS5 DualSense Edge',
    descripcion: 'Controlador inalámbrico',
    precio: 755.25,
    imagen: DualSenseEdgeImage
  },
  {
    id: 8,
    categoria: 'accesorios',
    nombre: 'AirPods Max',
    descripcion: 'Controlador inalámbrico',
    precio: 1016.90,
    imagen: AirPodsMaxImage
  },
  {
    id: 9,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro',
    descripcion: '256GB 8GB RAM',
    precio: 4531.51,
    imagen: iPhone14Pro256Image
  },
  {
    id: 10,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro Max',
    descripcion: '512GB 12GB RAM',
    precio: 5286.77,
    imagen: iPhone14ProMaxImage
  },
  {
    id: 11,
    categoria: 'accesorios',
    nombre: 'iPhone 14 Pro',
    descripcion: '512GB 12GB RAM',
    precio: 4909.14,
    imagen: iPhone14Pro512Image
  },
  {
    id: 12,
    categoria: 'accesorios',
    nombre: 'MacBook Air 13',
    descripcion: 'Apple M1 8GB RAM 256GB SSD',
    precio: 6042.00,
    imagen: MacBookAir13Image
  }
];

const ProductList = () => {
  const laptops = productos.filter((producto) => producto.categoria === 'laptops');
  const accesorios = productos.filter((producto) => producto.categoria === 'accesorios');

  return (
    <Container>
      <section id="laptops">
        <h2 className="my-4">Laptops</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {laptops.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </section>

      <section id="accesorios">
        <h2 className="my-4">Accesorios</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {accesorios.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default ProductList;
