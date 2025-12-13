import React, { useState } from 'react';
import CommonSection from "../components/ui/CommonSection";
import Helmet from '../components/helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/ui/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "double-sofa") {
      const filteredProducts = products.filter(item => item.subcategory === "double-sofa");
      setProductsData(filteredProducts);
    } else if (filterValue === "single-sofa") {
      const filteredProducts = products.filter(item => item.subcategory === "single-sofa");
      setProductsData(filteredProducts);
    } else if (filterValue === "arm-chair") {
      const filteredProducts = products.filter(item => item.subcategory === "arm-chair");
      setProductsData(filteredProducts);
    } else if (filterValue === "chair") {
      const filteredProducts = products.filter(item => item.subcategory === "chair");
      setProductsData(filteredProducts);
    } else {
      setProductsData(products); // Reset to all products if no specific category is selected
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='Shop'>
      <CommonSection title='Nos Produits' />
      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option value="">Filtrer par catégorie :</option>
                  <option value="double-sofa">Double Sofa</option>
                  <option value="single-sofa">Single Sofa</option>
                  <option value="arm-chair">Arm Chair</option>
                  <option value="chair">Chair</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className="filter__widget">
                <select>
                  <option>Trier par :</option>
                  <option value="ascending">Ordre croissant</option>
                  <option value="descending">Ordre décroissant</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className="search__box">
                <input type="text" placeholder="Recherche......" onChange={handleSearch}/>
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1>Pas de produits disponibles!!!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;