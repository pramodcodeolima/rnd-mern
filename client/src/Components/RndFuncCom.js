import React, {useEffect, useState} from 'react'
import Product from './Products'
import Loading from './Loading'
import { fetchProducts } from '../Services/apiService';

export default function RndFuncCom() {

  const [isLoading, setIsloading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
        setIsloading(false);
      })
      .catch(() => {
      })
      .finally(() => {
      });
  }, [])



  return (
    <>
    {isLoading ? <Loading /> : 
      <div><Product products={products} /></div> }
    </>
  )
}
