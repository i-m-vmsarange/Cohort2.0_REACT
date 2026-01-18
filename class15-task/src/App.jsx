import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    setProductData(data);
  };

  useEffect(function () {
    getData();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
    // <div className="flex flex-wrap bg-neutral-900 w-full">
    //   <div className="productData flex flex-wrap w-full">
    //     {productData.map((product) => {
    //       return (
    //         <div className="product flex flex-col justify-evenly text-center bg-neutral-800 grow border border-red-500 w-45 m-4 h-200px rounded-md p-5">
    //           <img
    //             className="w-full"
    //             src={product.image}
    //             target="_blank"
    //             alt={product.title}
    //           />
    //           <a
    //             className="text-blue-500 font-semibold text-lg block"
    //             href="https://fakestoreapi.com/products"
    //           >
    //             {product.title}
    //           </a>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

export default App;
