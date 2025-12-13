import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/header.css";
import { motion } from 'framer-motion';
import logo from '../../assets/images/home-interior.svg';
import userIcon from '../../assets/images/user-icon.png';
import { Container, Row } from "reactstrap";
import { useSelector } from 'react-redux';

const nav__links = [
  { path: 'home', display: 'Accueil' },
  { path: 'shop', display: 'Boutique' },
  { path: 'cart', display: 'Panier' },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 80) {
          headerRef.current.classList.add("sticker__header");
        } else {
          headerRef.current.classList.remove("sticker__header");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuToggle = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle('active__menu');
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Home Interior</h1>
              </div>
            </div>

            <div className="navigation" ref={menuRef}>
              <ul className="menu">
                {nav__links.map(item => (
                  <li className="nav__item" key={item.path}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav__active" : ""}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className='fav__icon'>
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className='cart__icon'>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.1 }} src={userIcon} alt="userIcon" />
              </span>
              <div className="mobile__menu" onClick={menuToggle}>
                <span><i className="ri-menu-line"></i></span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;