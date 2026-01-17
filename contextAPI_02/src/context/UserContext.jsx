import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext(null);

const UserContext = ({ children }) => {
  const users = [
    {
      name: "Amit Sharma",
      username: "amit_s",
      email: "amit.sharma@gmail.com",
      city: "Mumbai",
    },
    {
      name: "Neha Verma",
      username: "neha_v",
      email: "neha.verma@gmail.com",
      city: "Delhi",
    },
  ];
  return (
    <UserDataContext.Provider value={users}>
      {children}
      {/* We are rendering app here */}
    </UserDataContext.Provider>
  );
};

export default UserContext;
