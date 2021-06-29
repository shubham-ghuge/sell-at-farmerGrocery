import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

const ProductContext = createContext();
export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(null);
  const { token } = useAuthContext();
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          "https://farmers-grocery-v2.herokuapp.com/farmers/products"
        );
        if (data.success && data.response) {
          setProducts(data.response.filter((i, idx) => idx <= 2 && i));
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    token && getData();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}
export const useProductContext = () => useContext(ProductContext);
