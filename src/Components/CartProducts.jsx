import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
import SeoHelmet from '../Helmet/SeoHelmet'
import seoInfo from "../helmet.json"

const CartProducts = () => {
    const productItems = useSelector(state => state.cart)
    const products =  productItems.all_products
    const dispatch = useDispatch()

    const removeProduct = (id)=>{
        dispatch(remove(id))
    }
    return (
        <>
            <SeoHelmet
            title={seoInfo[1].title}
            content={seoInfo[1].content}
            href="/cartproduct" 
            />
            <p className='text-3xl text-lime-500 mt-20'>Cart products</p>
            {
                products?.map((item, id) => (
                    <div key={id} className='shadow p-3'>
                        <img src={item.image} className=' w-[200px] h-[200px] mx-auto mb-1 object-contain hover:scale-[1.05]' alt="/" />
                        <div className='flex items-center justify-center flex-col'>
                            <p className='truncate w-full text-center'>{item.title}</p>
                            <p>Rs.{item.price}</p>
                            <Button variant="contained" color='error' onClick={() => removeProduct(item.id)} >Remove Cart</Button>
                        </div>
                    </div>
                ))


            }
        </>
    )
}

export default CartProducts