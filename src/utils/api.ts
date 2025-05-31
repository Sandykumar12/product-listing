import axios from 'axios';
import { Product } from '../types/product';

const BASE_URL = 'https://fakestoreapi.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(BASE_URL);
  return res.data;
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await axios.get<Product>(`${BASE_URL}/${id}`);
  return res.data;
};
