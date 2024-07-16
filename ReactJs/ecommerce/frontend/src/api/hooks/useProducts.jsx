import { useState, useEffect } from "react";
import { getProducts, deleteProduct, updateProduct, addProduct } from "../services";

export function useProducts() {
  const [isLoading, setisLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setisLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      alert(err.message);
    } finally {
      setisLoading(false);
    }
  };

  const searchProducts = (query) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }
    const lowercasedQuery = query.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredProducts(filtered);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
      fetchProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async (id, updatedProduct) => {
    try {
      await updateProduct(id, updatedProduct);
      fetchProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleAdd = async (newProduct) => {
    try {
      await addProduct(newProduct);
      fetchProducts();
    } catch (err) {
      alert(err.message);
    }
  };

  return {
    isLoading,
    products: filteredProducts,
    searchProducts,
    handleDelete,
    handleUpdate,
    handleAdd,
  };
}
