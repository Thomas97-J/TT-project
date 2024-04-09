import axios from "axios";
// import { atom, useAtom } from 'jotai';

interface Props {
  start: string;
  limit: string;
}
// export const products_atom = atom([]);

export const getProducts = async (
  start: number,
  limit: number,
  category: string,
  collection: string
) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/products?_start=${start}&_limit=${limit}${
        category.length ? "&category=" + category : ""
      }${collection.length ? "&collection=" + collection : ""}`
    );
    const data = response.data;
    console.log(response);

    return { data: data, count: response.headers["x-total-count"] };
  } catch {
    throw new Error("getProducts err");
  }
};
