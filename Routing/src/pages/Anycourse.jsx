import React from "react";
import { useParams } from "react-router-dom";

const Anycourse = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1 className="mt-40 text-8xl font-bold underline text-center">
        {params.id} Course Page
      </h1>
    </div>
  );
};

export default Anycourse;
