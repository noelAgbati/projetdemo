import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { motion } from 'framer-motion';
import logo from '../../assets/images/home-interior.svg'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../styles/footer.css";

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' className="mb-4">
          <div className="logo">
            <div>
              <h1>Home Interior</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. I
          psum voluptatem aliquid accusantium?
          </p>
          <div className="footer__social">
            <motion.a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaFacebook />
            </motion.a>
            <motion.a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaTwitter />
            </motion.a>
            <motion.a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
              <FaInstagram />
            </motion.a>
          </div>
        </Col>
        <Col lg='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/shop"><span><i class="ri-armchair-line"></i></span></Link></li>
                <p class="text-white">Chaises</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/shop"><span><i class="ri-sofa-line"></i></span></Link></li>
                <p class="text-white">Canapés Modernes</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/shop"><span><i class="ri-hotel-bed-line"></i></span></Link></li>
                <p class="text-white">Lits</p>
              </ListGroupItem> 
            </ListGroup>
          </div>
        </Col>
        <Col lg='2' className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Liens Utiles</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/shop"><span><i class="ri-store-2-line"></i></span></Link></li>
                <p class="text-white">Boutique</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/cart"><span><i class="ri-shopping-cart-line"></i></span></Link></li>
                <p class="text-white">Panier</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/login"><span><i class="ri-login-box-line"></i></span></Link></li>
                <p class="text-white">Se connecter</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <li><Link to="/login"><span><i class="ri-contract-line"></i></span></Link></li>
                <p class="text-white">Politique de confidentialité</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacts Informations</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-map-pin-line text-white"></i></span>
                <p class="text-white">Adresse : 88 Rue Doufelgou, Lomé</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-phone-line text-white"></i></span>
                <p class="text-white">Téléphone : (+228) 90 19 56 78</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                <span><i class="ri-mail-line text-white"></i></span>
                <p class="text-white">Email : info@homeinterior.tg</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
        <Col lg='12' className="mb-4">
          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} Home Interior Lomé, TG. Tous droits réservés.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer;
