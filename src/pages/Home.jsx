import React, { useState, useEffect } from 'react';
import Helmet from '../components/helmet/Helmet';
import "../styles/home.css";
import { Container, Row, Col } from 'reactstrap';
//import heroImg01 from '../assets/images/hero-img-01.png'
import heroImg02 from '../assets/images/hero-img-02.png';
import heroImg03 from '../assets/images/hero-img-03.png';
import counterImg from '../assets/images/counter-timer-img.png';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'; 
import products from '../assets/data/products';
import Services from '../services/Services';
import ProductsList from '../components/ui/ProductsList';
import Clock from '../components/ui/Clock';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      x: [0, -20, 20, -20, 20, 0], // Animation de va-et-vient sur l'axe X
      transition: {
        duration: 5, // Durée de l'animation
        repeat: Infinity, // Répéter l'animation indéfiniment
        repeatType: "reverse", // Inverser l'animation lorsqu'elle se répète
      }
    });
  }, [controls]);

  useEffect(() => {
    controls.start({
      x: [0, -20, 20, -20, 20, 0], // Animation de va-et-vient sur l'axe X
      transition: {
        duration: 5, // Durée de l'animation
        repeat: Infinity, // Répéter l'animation indéfiniment
        repeatType: "reverse", // Inverser l'animation lorsqu'elle se répète
      }
    });
  }, []);

  useEffect(() =>{
    const filteredTrendingProducts = products.filter(item => item.subcategory === "arm-chair");
    const filteredBestSalesProducts = products.filter(item => 
      item.subcategory === "double-sofa" && ['01', '02', '03', '04'].includes(item.id)
  );
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
        <Col lg='3' md='3' >
            <div className='hero__img'>
              <motion.img src={heroImg03} alt="" animate={controls} />
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='=hero__content'>
              <motion.div
                className="alert"
                animate={{ opacity: [0, 1, 0, 1, 0, 1] }} // Animation de clignotement de l'opacité
                transition={{ duration: 4, repeat: Infinity }} // Répétition infinie de l'animation
              >
                <p className="hero__subtitle">Découvrer nos produits tendances en {year}. </p>
                <p className="hero__subtitle">Nous vous souhaitons la 🎉 Bienvenue! 🎉 </p>
              </motion.div>
              <h2 className="section__title">Rendre votre intérieur plus beau et plus minimaliste.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat repellat exercitationem excepturi asperiores facere accusamus dolorum laboriosam vero quidem ab.</p>
              <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn"><Link to='/shop'>Visiter la boutique</Link></motion.button>
            </div>
          </Col>
          <Col lg='3' md='3' >
            <div className='hero__img'>
              <motion.img src={heroImg02} alt="" animate={controls} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services></Services>
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="section__title">Produits Populaires</h2>
          </Col>
          <ProductsList data={ trendingProducts }/>
        </Row>
      </Container>
    </section>
    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2 className="section__title">Meilleures Ventes</h2>
          </Col>
          <ProductsList data={ bestSalesProducts }/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6' className="count__down-col">
            <div className="clock_top-content">
              <h4 className="text-white fs-5 mb-3">Offres Limitées</h4>
              <h3  className="text-white fs-6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <Clock></Clock>
            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn"><Link to='/shop'>Visiter la boutique</Link></motion.button>
          </Col>
          <Col lg='6' md='6' className="text-end counter__img">
            <motion.img src={counterImg} alt="" animate={controls} />
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>;
}

export default Home

