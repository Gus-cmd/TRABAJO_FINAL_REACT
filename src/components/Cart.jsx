import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Button, ListGroup, Modal } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ show, handleClose }) => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const discount = total * 0.1; // 10% de descuento
  const totalToPay = total - discount;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.nombre}</h5>
                    <p>S/.{item.precio.toFixed(2)}</p>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div>
                    <Button
                      variant="outline-secondary"
                      onClick={() => decreaseQuantity(item.id)}
                      className="me-2"
                    >
                      -
                    </Button>
                    <Button
                      variant="outline-secondary"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
        <div className="mt-3">
          <h5>Total: S/.{total.toFixed(2)}</h5>
          <h5>Descuento (10%): -S/.{discount.toFixed(2)}</h5>
          <h4>Total a Pagar: S/.{totalToPay.toFixed(2)}</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CartIcon = ({ handleShow }) => (
  <Button onClick={handleShow} variant="outline-light" className="ms-auto">
    <FaShoppingCart size={24} />
  </Button>
);

export { Cart, CartIcon };
