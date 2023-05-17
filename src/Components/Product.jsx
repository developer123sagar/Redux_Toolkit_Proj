import React, { useEffect } from 'react'
import Cards from './Cards'
import { getProductsThunk } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
    const dispatch = useDispatch()
    const { data: product } = useSelector(state => state.products)

    console.log("product", product)

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [dispatch])

    return (
        <>
            <div className='grid grid-cols-4 gap-2'>
                {
                    product[0]?.map((item, id) => (
                        <Cards product={item} key={id} img={item.image} price={item.price} title={item.title} />
                    ))
                }

            </div>
        </>
    )
}

export default Product