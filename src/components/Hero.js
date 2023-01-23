import React from 'react'
import WomanImg1 from '../img/model2.png';
import MenImg1 from '../img/model1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden relative'>
      <div className='container mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-indigo-900 mr-3'>
            </div>
            New Trend
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            SPRING SALE<br />
            <span className='font-bold text-rose-600'>10% OFF</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold bg-rose-600 text-white rounded-full cursor-pointer px-4 py-2'>
          Dicover More
          </Link>
        </div>
        <div className='hidden lg:block'>
          <img className='absolute bottom-0 mr-6 right-4 h-[700px]' src={MenImg1} alt="" />
          <img className='absolute right-[300px] h-[1200px]' src={WomanImg1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero