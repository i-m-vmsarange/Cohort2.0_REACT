import React from "react";

const Card = (props) => {
  const c1 = Math.floor(Math.random() * 256);
  const c2 = Math.floor(Math.random() * 256);
  const c3 = Math.floor(Math.random() * 256);

  return (
    <div
      className="w-fit p-4 m-2 rounded-md border-4 border-[rgb(255,255,255)]"
      style={{ backgroundColor: `rgb(${c1},${c2},${c3})` }}
    >
      <h4 className="text-center text-xl font-semibold">Id: {props.user.id}</h4>
      <h2 className="whitespace-nowrap">Name: {props.user.name}</h2>
      <h3 className=" whitespace-nowrap">Email: {props.user.email}</h3>
      <h4>Username: {props.user.username}</h4>
      <h5>Website: {props.user.website}</h5>
      <h5>Address: {props.user.address.city}</h5>
    </div>
  );
};

export default Card;
