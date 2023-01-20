import React from 'react'
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react';

const Product = ({product}) => {
    const {addToCart} = useContext(CartContext);

    // destructure product
    const {id, image, category, title, price} = product;
  return (
    <div>
        <div className='border border-indigo-200 h-[300px] mb-4 relative overflow-hidden group transition'>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-[200px] mx-auto flex justify-center items-center'>
                    <img className='max-h-[160px] group-hover:scale-110 duration-500 transition' src={image} alt={title} />
                </div>
                <div className='absolute top-6 -right-11 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-5'>
                    <button onClick={() => addToCart(product, id)}>
                        <div className='flex justify-center items-center text-white w-12 h-12 bg-indigo-500'>
                            <BsPlus className='text-3xl'/>
                        </div>
                    </button>
                    <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl">
                    <BsEyeFill />
                    </Link>
                </div>
            </div>
        </div>
        {/* Category & title & price */}
        <div>
            <div className='text-sm capitalize text-gray-500'>{category}</div>
            <Link to={`/product/${id}`} className='font-semibold mb-1'>
                <h2>{title}</h2>
            </Link>
            <div className='font-semibold'>{price}</div>
        </div>
    </div>
  )
}

export default Product