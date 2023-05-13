import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Product = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(data=>data.json()).then(result => setProduct(result))
    }, [])

    return (
        <>
            <p>Product</p>
            <Cards img={product[0]?.image}/>
        </>
    )
}

export default Product