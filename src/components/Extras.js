import React from 'react'
import { useFetch } from '../hooks/useFetch';
import ProductList from '../pages/home/ProductList';
import Error from './Error';
import Loading from './Loading';

export default function Extras({producttype}) {

 const query=  "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=" + producttype;

   const { documents, isPending, error } = useFetch(query);

  return (
    <>
    {error && <Error/>}
    {isPending && <Loading/>}
    {documents && <ProductList documents={documents}/>}
    </>
  )
}
