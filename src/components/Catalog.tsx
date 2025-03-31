import axiosInstance from "../services/api";
import { useEffect, useState } from "react";
import { IProduct } from "../store/modules/cart/types";
import CatalogItem from "./CatalogItem";

export function Catalog() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get("/products");
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
     {
      data.map(product => (
        <CatalogItem key={product.id} product={product}/>
      ))
     }
    </main>
  );
}
