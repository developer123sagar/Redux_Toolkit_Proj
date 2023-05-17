import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice'


const Cards = ({ img, title, price, product }) => {
  const dispatch = useDispatch()

  const addtoCart = (product) => {
    dispatch(add(product))
  }
  return (
    <div className='shadow p-3'>
      <img src={img} className=' w-[200px] h-[200px] mx-auto mb-1 object-contain hover:scale-[1.05]' alt="/" />
      <div className='flex items-center justify-center flex-col'>
        <p className='truncate w-full text-center'>{title}</p>
        <p>Rs.{price}</p>
        <Button variant="contained" onClick={() => addtoCart(product)} >Add to cart</Button>
      </div>
    </div>
  );
}

export default Cards