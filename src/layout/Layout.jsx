import React from 'react'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom';
import { SearchProvider } from '../providers/context/SearchProvider';
import { CardProvider } from '../providers/context/CardProvider';


export const Layout = ({ children }) => {
 

  return (
    
     
    <>
      <SearchProvider>
        <CardProvider>
      <Header />
      <Outlet />
       </CardProvider>   
       </SearchProvider>
   </>
  );
}
