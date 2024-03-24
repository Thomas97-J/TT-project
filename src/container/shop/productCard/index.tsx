import styled from 'styled-components';
import React from 'react';

interface Props {
  product: Product;
}
interface Product {
  product_id: number;
  name: string;
  image: string;
  link: string;
  thumbnail: string;
}
const ProductCardWrapper = styled.div`
  height: 300px;
`;
export default function ProductCard({ product }: Props) {
  return (
    <ProductCardWrapper>
      <img src={product.image} alt='' />
      <div>{product.name}</div>
    </ProductCardWrapper>
  );
}
