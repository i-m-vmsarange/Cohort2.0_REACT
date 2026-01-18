import React from "react";
import { createContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../api/productAPI";

export const ProductDataContext = createContext(null);

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    const data = await getData();
    console.log(data);
    setProductData(data);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={productData}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductContext;
