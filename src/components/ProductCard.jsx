import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>{product.descripcion}</Card.Text>
        <Card.Text>${product.precio.toFixed(2)}</Card.Text>
        <Button onClick={() => addToCart(product)} variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;


