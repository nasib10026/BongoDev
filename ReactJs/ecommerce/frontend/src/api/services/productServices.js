import { http } from "../../common/http";

export const getProducts = async () => {
  const res = await http.get('/api/products');
  return res.data;
};

export const deleteProduct = async (id) => {
  await http.delete(`/api/products/${id}`);
};

export const updateProduct = async (id, updatedProduct) => {
  const res = await http.put(`/api/products/${id}`, updatedProduct);
  return res.data;
};

export const addProduct = async (newProduct) => {
  const res = await http.post('/api/products', newProduct);
  return res.data;
};