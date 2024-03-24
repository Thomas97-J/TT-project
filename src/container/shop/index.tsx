import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useProducts from '../../hooks/useProduct.js';
import { useInView } from 'react-intersection-observer';
import ProductCard from './productCard';

function Shop() {
  const [products24, getProducts] = useProducts();
  const [products, setProduct] = useState([]);
  const [ref, inView, entry] = useInView({ triggerOnce: false });

  useEffect(() => {
    console.log('call useEffect');
    getProducts(0, 24);
  }, []);

  useEffect(() => {
    console.log(products, products24);
    setProduct(products.concat(products24));
    ///12배수로 가져옴, 한페이지에 48 가져오면 페이징으로 처리
  }, [products24]);

  useEffect(() => {
    if (products.length === 24) {
      getProducts(24, 24);
    }
  }, [inView]);

  return (
    <ShopWrapper>
      <LogoBanner>Logo</LogoBanner>
      <div className={'product'}>
        {products instanceof Array
          ? products.map((product: Product) => {
              return <ProductCard product={product} key={product.name} />;
            })
          : ''}
      </div>
      <div ref={ref}></div>

      <footer>footer</footer>
    </ShopWrapper>
  );
}
export default Shop;
interface Product {
  product_id: number;
  name: string;
  image: string;
  link: string;
  thumbnail: string;
}

const ShopWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .product {
    background-color: whitesmoke;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  footer {
    height: 200px;
    background-color: white;
  }
`;
const LogoBanner = styled.div`
  height: 210px;
  padding-top: 20px;
  font-size: 48px;
  font-weight: bold;
`;
