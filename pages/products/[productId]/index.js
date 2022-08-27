import React from 'react'
import { useRouter } from 'next/router';
const ProductDetails = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <h2>Details of product {productId}</h2>
  )
}

export default ProductDetails;