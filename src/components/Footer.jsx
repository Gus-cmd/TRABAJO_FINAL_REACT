import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/fav-icons/shop-window.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer seccion-oscura d-flex flex-column align-items-center text-center">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center">
            <img className="logo" src={Logo} width="50" alt="Logo de mi página" />
            <p>GusShop | Tech</p>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#laptops" className="footer-link">Laptops</a></li>
              <li><a href="#accesorios" className="footer-link">Accesorios</a></li>
              <li><a href="#iniciar-sesion" className="footer-link">Iniciar sesión</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/Gus.huachacabellido?mibextid=LQQJ4d" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/GustaveHB" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/gustav.art_t/" className="footer-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="w-100 text-center mt-3">
        <p>&copy; 2024 GusShop | Tech. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
