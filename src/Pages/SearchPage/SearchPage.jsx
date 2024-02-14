import React, { useContext } from 'react'
import { Layout } from '../../layout/Layout'
import { SearchContext } from '../../providers/context/SearchContext'




export const SearchPage = () => {
 
const { results } = useContext(SearchContext);
  return <Layout>{results}</Layout>;
}
