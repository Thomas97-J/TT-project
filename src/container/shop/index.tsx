import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import ProductCard from "./productCard";
import Pagination from "../../components/pagenation";
import { getProducts } from "../../api/getProducts";
import { useLocation, useSearchParams } from "react-router-dom";
import data from "../../data/dumy";
import { componentSizeAtom } from "../../hooks/useComponentSize";
import { useAtom } from "jotai";
import MainFooter from "../../components/footers";

function Shop() {
  const [products24, setProducts24] = useState([]);
  const [products, setProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [ref, inView, entry] = useInView({ triggerOnce: false });
  const [searchParams, setSearchParams] = useSearchParams();
  const [size, setSize] = useAtom(componentSizeAtom);

  const location = useLocation();
  const page = parseInt(searchParams.get("page") ?? "1");
  const category = searchParams.get("category") ?? "";

  useEffect(() => {
    setProduct([]);
    window.scrollTo({ top: 0 });
    const splitUrl =
      location?.pathname.replace("/shop", "")?.split("/") ?? null;
    const collection = splitUrl[splitUrl.length - 1];
    getProducts2((page - 1) * 48, 24, category, collection);
    console.log(location, collection);
  }, [location]);

  useEffect(() => {
    setProduct(products.concat(products24));
  }, [products24]);

  useEffect(() => {
    if (inView && products.length === 24) {
      const splitUrl =
        location?.pathname.replace("/shop", "")?.split("/") ?? null;
      const collection = splitUrl[splitUrl.length - 1];
      getProducts2((page - 1) * 48 + 24, 24, category, collection);
    }
  }, [inView]);

  async function getProducts2(
    start: number,
    limit: number,
    category: string,
    collection: string
  ) {
    const { data, count } = await getProducts(
      start,
      limit,
      category,
      collection
    );
    setProducts24(data);
    setProductCount(count);
  }
  return (
    <ShopWrapper>
      <LogoBanner size={size}>Taste Teeth</LogoBanner>
      <div className={"product"}>
        {products instanceof Array
          ? products.map((product: Product) => {
              return <ProductCard product={product} key={product.id} />;
            })
          : ""}
      </div>
      <RefDiv ref={ref}></RefDiv>
      <Pagination
        totalItems={productCount}
        currentPage={page}
        pageCount={5}
        itemCountPerPage={48}
      />
      <MainFooter />
    </ShopWrapper>
  );
}
const RefDiv = styled.div`
  height: 10px;
`;
export default Shop;
interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  thumbnail: string;
  collection: string;
}

const ShopWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  .product {
    min-height: 100vh;
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
`;
const LogoBanner = styled.div<{ size: { width: number; height: number } }>`
  height: 210px;
  display: flex;
  justify-content: flex-end;
  margin-right: ${(props) => props.size.width + 26}px;
  padding-top: 10px;
  padding-right: 10px;
  font-size: 48px;
  font-weight: bold;
`;
