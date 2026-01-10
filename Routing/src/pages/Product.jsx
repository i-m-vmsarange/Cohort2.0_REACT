import { Link } from "react-router-dom";

const products = () => {
  return (
    <div>
      <h1 className="mt-40 text-8xl font-bold underline text-center">
        Products
      </h1>
      <div className="flex gap-5 items-center justify-center mt-10">
        <Link
          to={"/product/men"}
          className="text-2xl text-blue-500 underline font-semibold "
        >
          Men's Collection
        </Link>
        <Link
          to={"/product/women"}
          className="text-2xl text-pink-500 underline font-semibold"
        >
          Women's Collection
        </Link>
      </div>
    </div>
  );
};

export default products;
