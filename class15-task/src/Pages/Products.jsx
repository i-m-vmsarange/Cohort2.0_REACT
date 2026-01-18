import React from "react";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductDataContext);

  return (
    <div className="flex flex-wrap bg-neutral-900 w-full">
      <div className="productData flex flex-wrap w-full">
        {productData.map((product, index) => {
          return (
            <div
              key={index}
              className="product flex flex-col justify-evenly text-center bg-neutral-800 grow border border-red-500 w-45 m-4 h-200px rounded-md p-5"
            >
              <img
                className="w-full"
                src={product.image}
                target="_blank"
                alt={product.title}
              />
              <Link
                className="text-blue-500 font-semibold text-lg block"
                to={`/products/${product.id - 1}`}
              >
                {product.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
