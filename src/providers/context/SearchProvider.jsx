import React, { useState, useEffect } from 'react'
import { SearchContext } from './SearchContext';
import { Card } from '../../components/Card/Card';

export const SearchProvider = ({ children }) => {
  
  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([]);
  const [results,setResult] = useState([])

  useEffect(() => {
    async function renderCards() {
      try {
        const response = await fetch("http://localhost:3000/cards");

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
 
  
  function changeValue(e) {
    setInputValue(e.target.value)
   
  }


  let searchResults = () => { 
  setResult(data
      .filter((el) => el.heading.toLowerCase().includes(inputValue.toLowerCase()))
    .map((el, index) => <Card {...el} key={index} />))
    
};

  

  return (
    <SearchContext.Provider value={{ searchResults, changeValue,results }}>
      {children}
    </SearchContext.Provider>
  );
}
