import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';
import { getProducts } from '../api/products';
const products_atom = atom([]);

export default function useProducts() {
  const [products, setProducts] = useAtom(products_atom);
  async function getProducts2(start: number, limit: number) {
    const temp = await getProducts(start, limit);

    setProducts(temp);
  }

  return [products, getProducts2] as const;
}
