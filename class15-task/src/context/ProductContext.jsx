import React from "react";
import { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const ProductDataContext = createContext(null);

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProductData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
