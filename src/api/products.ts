import axios from 'axios';
// import { atom, useAtom } from 'jotai';

interface Props {
  start: string;
  limit: string;
}
// export const products_atom = atom([]);

export const getProducts = async (start: number, limit: number) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_start=${start}&_limit=${limit}`
    );
    const data = response.data;
    console.log(data);
    return data;
  } catch {
    throw new Error('getProducts err');
  }
};
