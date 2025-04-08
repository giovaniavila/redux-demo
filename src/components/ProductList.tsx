import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useEffect, useState } from "react";
import axiosInstance from "../services/api";
import { Product } from "../types/product";

export const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axiosInstance.get("/products")
      setProducts(response.data)
    }
    getProducts()
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
