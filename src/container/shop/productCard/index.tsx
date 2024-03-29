import styled from 'styled-components';
import React from 'react';

interface Props {
  product: Product;
}
interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  thumbnail: string;
  collection: string;
}
const ProductCardWrapper = styled.ul`
  height: 300px;
  list-style: none;
`;
export default function ProductCard({ product }: Props) {
  return (
    <ProductCardWrapper>
      <img src={product.image} alt='' />
      <div>{product.name}</div>
      <div>{product.collection}</div>
    </ProductCardWrapper>
  );
}
