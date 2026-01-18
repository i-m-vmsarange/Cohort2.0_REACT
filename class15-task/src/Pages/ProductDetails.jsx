import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);

  const params = useParams();
  const product = productData[params.id];

  let selectedProduct = "No Product Found!!!!";

  if (product != null) {
    selectedProduct = (
      <div className="w-65 flex flex-col justify- rounded-lg text-center p-4 m-2 shadow-lg shadow-neutral-300 bg-yellow-50">
        <div className="text-center mb-3">
          <img className="w-full" src={product.image} alt="product-img" />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="font-semibold text-center w-full leading-5 mb-1">
            {product.title}
          </p>
          <h4 className="font-semibold mb-3 text-blue-700">
            Category: {product.category}
          </h4>
          <h4 className="font-bold cursor-pointer text-xl bg-orange-500 text-white w-fit px-3 py-2 rounded-md">
            Price: ${product.price}
          </h4>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen m-0 w-full bg-black">
      {selectedProduct}
    </div>
  );
};

export default ProductDetails;
