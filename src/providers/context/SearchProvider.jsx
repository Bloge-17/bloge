import React, { useState, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { useSearchParams } from "react-router-dom";


export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(() => {
    async function renderCards() {
      try {
        const response = await fetch(
          "http://localhost:3000/cards"
        );

        if (response.ok) {
          const arr = await response.json();
          setData(arr);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log(e);
      }
    }
    renderCards();
  }, []);


 

// console.log(searchParams, inputValue)
  

  function changeValue(e) {
    setInputValue(e.target.value)
    
  }

  function clickNav(value) {// поиск по навигации из хэдэра
    setInputValue(value);
    
  }


  
  
  function searchResults() {
    setSearchParams({ s: inputValue })
    }
      
    
 
  return (
    <SearchContext.Provider
      value={{ 
        changeValue,
        inputValue,
          clickNav,
        searchResults,
        searchParams,
        setInputValue,
       setSearchParams,
        data,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
