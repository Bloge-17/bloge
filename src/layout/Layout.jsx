import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../providers/context/SearchProvider";
import { CardProvider } from "../providers/context/CardProvider";
import { Modal } from "../components/Modal/Modal";
import { useState } from "react";



export const Layout = ({ children }) => {

 const [isOpen, setIsOpen] = useState(false);

 function CreatePortal() {
   const portal = document.createElement("div");
   portal.id = "portal";
   document.body.append(portal);
 }


  return (
    <>
      <SearchProvider>
        <CardProvider>
          <Header CreatePortal={CreatePortal} setIsOpen={setIsOpen}/>
          {isOpen && <Modal setIsOpen={setIsOpen}  />}
          <Outlet />
        </CardProvider>
      </SearchProvider>
    </>
  );
};
